import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Mic, Play, Trash2, Stop } from 'lucide-react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Panel } from '../../components/ui/Panel';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { useAuthStore } from '../../lib/store/authStore';
import { supabase, VoiceNote } from '../../lib/supabase';
import { transcribeAudio } from '../../lib/api/ai';

type MainStackParamList = {
  VoiceNotes: undefined;
};

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'VoiceNotes'>;

export default function VoiceNotesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const theme = useTheme();
  const { session } = useAuthStore();
  const [voiceNotes, setVoiceNotes] = useState<VoiceNote[]>([]);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    loadVoiceNotes();
    return () => {
      sound?.unloadAsync();
    };
  }, []);

  const loadVoiceNotes = async () => {
    try {
      const userId = session?.user?.id;
      if (!userId) return;

      const { data } = await supabase
        .from('voice_notes')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      setVoiceNotes(data || []);
    } catch (error) {
      console.error('Error loading voice notes:', error);
    }
  };

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      setRecording(recording);
      setIsRecording(true);
    } catch (error) {
      Alert.alert('Error', 'Failed to start recording');
    }
  };

  const stopRecording = async () => {
    if (!recording) return;

    try {
      setIsRecording(false);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();

      if (uri && session?.user?.id) {
        // Upload to Supabase Storage (placeholder - implement actual upload)
        // For now, save metadata with local URI
        const { data, error } = await supabase.from('voice_notes').insert({
          user_id: session.user.id,
          file_url: uri,
          duration: 0, // Calculate from recording
          transcript: null,
        }).select().single();

        if (error) throw error;

        // Transcribe audio
        try {
          const transcript = await transcribeAudio(uri);
          await supabase
            .from('voice_notes')
            .update({ transcript })
            .eq('id', data.id);
        } catch {
          // Transcription failed, continue
        }

        setVoiceNotes((prev) => [data, ...prev]);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to save recording');
    } finally {
      setRecording(null);
    }
  };

  const playRecording = async (uri: string, noteId: string) => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync({ uri });
      setSound(newSound);
      setIsPlaying(noteId);

      await newSound.playAsync();

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setIsPlaying(null);
        }
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to play recording');
    }
  };

  const stopPlaying = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setIsPlaying(null);
    }
  };

  const handleDelete = async (noteId: string) => {
    Alert.alert('Delete Voice Note', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            const { error } = await supabase.from('voice_notes').delete().eq('id', noteId);

            if (error) throw error;

            setVoiceNotes((prev) => prev.filter((n) => n.id !== noteId));
          } catch (error) {
            Alert.alert('Error', 'Failed to delete voice note');
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Voice Notes</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {voiceNotes.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
              No voice notes yet. Hold the microphone button to record.
            </Text>
          </View>
        )}

        {voiceNotes.map((note) => (
          <Panel key={note.id} style={styles.noteItem}>
            <View style={styles.noteHeader}>
              <Text style={[styles.noteDate, { color: theme.colors.textSecondary }]}>
                {new Date(note.created_at).toLocaleDateString()}
              </Text>
              <TouchableOpacity onPress={() => handleDelete(note.id)}>
                <Trash2 size={20} color={theme.colors.error} />
              </TouchableOpacity>
            </View>
            {note.transcript && (
              <Text style={[styles.transcript, { color: theme.colors.text }]}>
                {note.transcript}
              </Text>
            )}
            <View style={styles.actions}>
              {isPlaying === note.id ? (
                <TouchableOpacity
                  onPress={stopPlaying}
                  style={[styles.playButton, { backgroundColor: theme.colors.error }]}
                >
                  <Stop size={20} color="#FFFFFF" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => playRecording(note.file_url, note.id)}
                  style={[styles.playButton, { backgroundColor: theme.colors.primary }]}
                >
                  <Play size={20} color="#FFFFFF" />
                </TouchableOpacity>
              )}
            </View>
          </Panel>
        ))}
      </ScrollView>

      <View style={styles.recordButtonContainer}>
        <TouchableOpacity
          onPressIn={startRecording}
          onPressOut={stopRecording}
          style={[
            styles.recordButton,
            {
              backgroundColor: isRecording ? theme.colors.error : theme.colors.primary,
              borderRadius: 40,
            },
            theme.shadows.lg,
          ]}
        >
          <Mic size={32} color="#FFFFFF" />
        </TouchableOpacity>
        {isRecording && (
          <Text style={[styles.recordingText, { color: theme.colors.error }]}>Recording...</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
  },
  emptyText: {
    fontSize: 17,
    textAlign: 'center',
  },
  noteItem: {
    marginBottom: 12,
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  noteDate: {
    fontSize: 13,
  },
  transcript: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordButtonContainer: {
    alignItems: 'center',
    padding: 24,
  },
  recordButton: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordingText: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '600',
  },
});


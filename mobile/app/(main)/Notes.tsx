import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Plus, Trash2, X } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Panel } from '../../components/ui/Panel';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { useAuthStore } from '../../lib/store/authStore';
import { supabase, Note } from '../../lib/supabase';

type MainStackParamList = {
  Notes: undefined;
};

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'Notes'>;

export default function NotesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const theme = useTheme();
  const { session } = useAuthStore();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const userId = session?.user?.id;
      if (!userId) return;

      const { data } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false });

      setNotes(data || []);
    } catch (error) {
      console.error('Error loading notes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveNote = async () => {
    if (!noteTitle.trim() || !session?.user?.id) return;

    try {
      if (editingNote) {
        const { error } = await supabase
          .from('notes')
          .update({
            title: noteTitle,
            content: noteContent,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingNote.id);

        if (error) throw error;

        setNotes((prev) =>
          prev.map((n) =>
            n.id === editingNote.id
              ? { ...n, title: noteTitle, content: noteContent, updated_at: new Date().toISOString() }
              : n
          )
        );
      } else {
        const { data, error } = await supabase
          .from('notes')
          .insert({
            user_id: session.user.id,
            title: noteTitle,
            content: noteContent,
          })
          .select()
          .single();

        if (error) throw error;

        setNotes((prev) => [data, ...prev]);
      }

      setNoteTitle('');
      setNoteContent('');
      setEditingNote(null);
      setShowAddModal(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to save note');
    }
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.content);
    setShowAddModal(true);
  };

  const handleDeleteNote = async (noteId: string) => {
    Alert.alert('Delete Note', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            const { error } = await supabase.from('notes').delete().eq('id', noteId);

            if (error) throw error;

            setNotes((prev) => prev.filter((n) => n.id !== noteId));
          } catch (error) {
            Alert.alert('Error', 'Failed to delete note');
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Notes</Text>
        <TouchableOpacity
          onPress={() => {
            setEditingNote(null);
            setNoteTitle('');
            setNoteContent('');
            setShowAddModal(true);
          }}
          style={[
            styles.addButton,
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 22,
            },
          ]}
        >
          <Plus size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {notes.length === 0 && !loading && (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
              No notes yet. Tap + to create one.
            </Text>
          </View>
        )}

        {notes.map((note) => (
          <TouchableOpacity key={note.id} onPress={() => handleEditNote(note)}>
            <Panel style={styles.noteItem}>
              <View style={styles.noteHeader}>
                <Text style={[styles.noteTitle, { color: theme.colors.text }]}>{note.title}</Text>
                <TouchableOpacity onPress={() => handleDeleteNote(note.id)}>
                  <Trash2 size={20} color={theme.colors.error} />
                </TouchableOpacity>
              </View>
              {note.content && (
                <Text
                  style={[styles.notePreview, { color: theme.colors.textSecondary }]}
                  numberOfLines={3}
                >
                  {note.content}
                </Text>
              )}
            </Panel>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {showAddModal && (
        <View style={styles.modalOverlay}>
          <Panel style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: theme.colors.text }]}>
                {editingNote ? 'Edit Note' : 'New Note'}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setShowAddModal(false);
                  setEditingNote(null);
                  setNoteTitle('');
                  setNoteContent('');
                }}
              >
                <X size={24} color={theme.colors.text} />
              </TouchableOpacity>
            </View>
            <Input
              label="Title"
              placeholder="Note title"
              value={noteTitle}
              onChangeText={setNoteTitle}
            />
            <Input
              label="Content"
              placeholder="Write your note..."
              value={noteContent}
              onChangeText={setNoteContent}
              multiline
              style={{ minHeight: 200 }}
            />
            <Button title={editingNote ? 'Save Changes' : 'Create Note'} onPress={handleSaveNote} fullWidth />
          </Panel>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  addButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
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
  noteTitle: {
    fontSize: 17,
    fontWeight: '600',
    flex: 1,
  },
  notePreview: {
    fontSize: 15,
    lineHeight: 20,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  modal: {
    width: '100%',
    maxWidth: 400,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
});


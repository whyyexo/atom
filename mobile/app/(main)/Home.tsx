import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MessageCircle, CheckSquare, FileText, Mic, Settings } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Panel } from '../../components/ui/Panel';
import { IconButton } from '../../components/ui/IconButton';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { useAuthStore } from '../../lib/store/authStore';
import { supabase, Task, Note } from '../../lib/supabase';

type MainStackParamList = {
  Home: undefined;
  AI: undefined;
  Tasks: undefined;
  Notes: undefined;
  VoiceNotes: undefined;
  Settings: undefined;
};

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const theme = useTheme();
  const { profile } = useAuthStore();
  const [recentTasks, setRecentTasks] = useState<Task[]>([]);
  const [recentNotes, setRecentNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const userId = (await supabase.auth.getUser()).data.user?.id;
      if (!userId) return;

      // Load recent tasks
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(5);

      // Load recent notes
      const { data: notes } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(5);

      setRecentTasks(tasks || []);
      setRecentNotes(notes || []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const QuickAction = ({
    icon,
    title,
    subtitle,
    onPress,
  }: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    onPress: () => void;
  }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Panel style={styles.quickAction}>
        <View style={styles.quickActionContent}>
          <View style={styles.quickActionIcon}>{icon}</View>
          <View style={styles.quickActionText}>
            <Text style={[styles.quickActionTitle, { color: theme.colors.text }]}>
              {title}
            </Text>
            <Text style={[styles.quickActionSubtitle, { color: theme.colors.textSecondary }]}>
              {subtitle}
            </Text>
          </View>
        </View>
      </Panel>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, { color: theme.colors.textSecondary }]}>
            Welcome back,
          </Text>
          <Text style={[styles.name, { color: theme.colors.text }]}>
            {profile?.first_name || 'User'}
          </Text>
        </View>
        <IconButton
          icon={<Settings size={24} color={theme.colors.text} />}
          onPress={() => navigation.navigate('Settings')}
        />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quick Actions</Text>
          <QuickAction
            icon={<MessageCircle size={24} color={theme.colors.primary} />}
            title="AI Assistant"
            subtitle="Chat with your AI"
            onPress={() => navigation.navigate('AI')}
          />
          <QuickAction
            icon={<CheckSquare size={24} color={theme.colors.primary} />}
            title="Tasks"
            subtitle={`${recentTasks.length} recent tasks`}
            onPress={() => navigation.navigate('Tasks')}
          />
          <QuickAction
            icon={<FileText size={24} color={theme.colors.primary} />}
            title="Notes"
            subtitle={`${recentNotes.length} recent notes`}
            onPress={() => navigation.navigate('Notes')}
          />
          <QuickAction
            icon={<Mic size={24} color={theme.colors.primary} />}
            title="Voice Notes"
            subtitle="Record and transcribe"
            onPress={() => navigation.navigate('VoiceNotes')}
          />
        </View>

        {recentTasks.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              Recent Tasks
            </Text>
            {recentTasks.slice(0, 3).map((task) => (
              <Panel key={task.id} style={styles.taskItem}>
                <Text style={[styles.taskTitle, { color: theme.colors.text }]}>
                  {task.title}
                </Text>
                {task.description && (
                  <Text style={[styles.taskDescription, { color: theme.colors.textSecondary }]}>
                    {task.description}
                  </Text>
                )}
              </Panel>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Floating AI Button */}
      <TouchableOpacity
        style={[
          styles.floatingButton,
          {
            backgroundColor: theme.colors.primary,
            borderRadius: 56 / 2,
          },
          theme.shadows.lg,
        ]}
        onPress={() => navigation.navigate('AI')}
        activeOpacity={0.8}
      >
        <MessageCircle size={28} color="#FFFFFF" />
      </TouchableOpacity>
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
  greeting: {
    fontSize: 17,
    marginBottom: 4,
  },
  name: {
    fontSize: 34,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  quickAction: {
    marginBottom: 12,
  },
  quickActionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quickActionIcon: {
    marginRight: 16,
  },
  quickActionText: {
    flex: 1,
  },
  quickActionTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    fontSize: 15,
  },
  taskItem: {
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 4,
  },
  taskDescription: {
    fontSize: 15,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 32,
    right: 24,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


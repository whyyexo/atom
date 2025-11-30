import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Plus, Trash2, Check, X } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Panel } from '../../components/ui/Panel';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { useAuthStore } from '../../lib/store/authStore';
import { supabase, Task } from '../../lib/supabase';

type MainStackParamList = {
  Tasks: undefined;
};

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'Tasks'>;

export default function TasksScreen() {
  const navigation = useNavigation<NavigationProp>();
  const theme = useTheme();
  const { session } = useAuthStore();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const userId = session?.user?.id;
      if (!userId) return;

      const { data } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      setTasks(data || []);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async () => {
    if (!newTaskTitle.trim() || !session?.user?.id) return;

    try {
      const { data, error } = await supabase
        .from('tasks')
        .insert({
          user_id: session.user.id,
          title: newTaskTitle,
          description: newTaskDescription || null,
          completed: false,
        })
        .select()
        .single();

      if (error) throw error;

      setTasks((prev) => [data, ...prev]);
      setNewTaskTitle('');
      setNewTaskDescription('');
      setShowAddModal(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to create task');
    }
  };

  const handleToggleComplete = async (task: Task) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .update({ completed: !task.completed })
        .eq('id', task.id);

      if (error) throw error;

      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to update task');
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    Alert.alert('Delete Task', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            const { error } = await supabase.from('tasks').delete().eq('id', taskId);

            if (error) throw error;

            setTasks((prev) => prev.filter((t) => t.id !== taskId));
          } catch (error) {
            Alert.alert('Error', 'Failed to delete task');
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Tasks</Text>
        <TouchableOpacity
          onPress={() => setShowAddModal(true)}
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
        {tasks.length === 0 && !loading && (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
              No tasks yet. Tap + to add one.
            </Text>
          </View>
        )}

        {tasks.map((task) => (
          <Panel key={task.id} style={styles.taskItem}>
            <View style={styles.taskContent}>
              <TouchableOpacity
                onPress={() => handleToggleComplete(task)}
                style={[
                  styles.checkbox,
                  {
                    backgroundColor: task.completed ? theme.colors.success : 'transparent',
                    borderColor: theme.colors.border,
                  },
                ]}
              >
                {task.completed && <Check size={16} color="#FFFFFF" />}
              </TouchableOpacity>
              <View style={styles.taskText}>
                <Text
                  style={[
                    styles.taskTitle,
                    {
                      color: theme.colors.text,
                      textDecorationLine: task.completed ? 'line-through' : 'none',
                      opacity: task.completed ? 0.5 : 1,
                    },
                  ]}
                >
                  {task.title}
                </Text>
                {task.description && (
                  <Text style={[styles.taskDescription, { color: theme.colors.textSecondary }]}>
                    {task.description}
                  </Text>
                )}
              </View>
              <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
                <Trash2 size={20} color={theme.colors.error} />
              </TouchableOpacity>
            </View>
          </Panel>
        ))}
      </ScrollView>

      {showAddModal && (
        <View style={styles.modalOverlay}>
          <Panel style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: theme.colors.text }]}>New Task</Text>
              <TouchableOpacity onPress={() => setShowAddModal(false)}>
                <X size={24} color={theme.colors.text} />
              </TouchableOpacity>
            </View>
            <Input
              label="Title"
              placeholder="Task title"
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
            />
            <Input
              label="Description"
              placeholder="Optional description"
              value={newTaskDescription}
              onChangeText={setNewTaskDescription}
              multiline
            />
            <Button title="Add Task" onPress={handleAddTask} fullWidth />
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
  taskItem: {
    marginBottom: 12,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  taskText: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 4,
  },
  taskDescription: {
    fontSize: 15,
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


import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { X, Send, Mic } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OrbAnimation } from '../../components/ui/OrbAnimation';
import { Panel } from '../../components/ui/Panel';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { useAuthStore } from '../../lib/store/authStore';
import { supabase, AIMessage } from '../../lib/supabase';
import { sendAIMessage } from '../../lib/api/ai';

type MainStackParamList = {
  AI: undefined;
};

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'AI'>;

export default function AIScreen() {
  const navigation = useNavigation<NavigationProp>();
  const theme = useTheme();
  const { session } = useAuthStore();
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [orbState, setOrbState] = useState<'idle' | 'listening' | 'speaking'>('idle');
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const userId = session?.user?.id;
      if (!userId) return;

      const { data } = await supabase
        .from('ai_messages')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: true })
        .limit(50);

      setMessages(data || []);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const handleSend = async () => {
    if (!inputText.trim() || !session?.user?.id) return;

    const userMessage: AIMessage = {
      id: `temp-${Date.now()}`,
      user_id: session.user.id,
      role: 'user',
      text: inputText,
      created_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setLoading(true);
    setOrbState('speaking');
    Keyboard.dismiss();

    try {
      // Save user message
      const { data: savedUserMessage } = await supabase
        .from('ai_messages')
        .insert({
          user_id: session.user.id,
          role: 'user',
          text: inputText,
        })
        .select()
        .single();

      // Get AI response
      const aiResponse = await sendAIMessage(inputText, session.user.id);

      if (aiResponse.error) {
        throw new Error(aiResponse.error);
      }

      // Save assistant message
      const { data: savedAssistantMessage } = await supabase
        .from('ai_messages')
        .insert({
          user_id: session.user.id,
          role: 'assistant',
          text: aiResponse.text,
        })
        .select()
        .single();

      // Update messages with saved IDs
      setMessages((prev) =>
        prev
          .map((msg) => (msg.id === userMessage.id ? savedUserMessage : msg))
          .concat(savedAssistantMessage || [])
      );
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => prev.slice(0, -1)); // Remove failed message
    } finally {
      setLoading(false);
      setOrbState('idle');
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>AI Assistant</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <X size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.orbContainer}>
        <OrbAnimation size={200} state={orbState} />
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
              Start a conversation with your AI assistant
            </Text>
          </View>
        )}

        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.role === 'user' ? styles.userMessage : styles.assistantMessage,
            ]}
          >
            <Panel
              style={[
                styles.messageBubble,
                {
                  backgroundColor:
                    message.role === 'user' ? theme.colors.primary : theme.colors.surface,
                },
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  {
                    color: message.role === 'user' ? '#FFFFFF' : theme.colors.text,
                  },
                ]}
              >
                {message.text}
              </Text>
            </Panel>
          </View>
        ))}

        {loading && (
          <View style={styles.loadingContainer}>
            <Text style={[styles.loadingText, { color: theme.colors.textSecondary }]}>
              Thinking...
            </Text>
          </View>
        )}
      </ScrollView>

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.border,
          },
        ]}
      >
        <TextInput
          style={[
            styles.input,
            {
              color: theme.colors.text,
              backgroundColor: theme.colors.background,
              borderRadius: theme.borderRadius.lg,
            },
          ]}
          placeholder="Type a message..."
          placeholderTextColor={theme.colors.textSecondary}
          value={inputText}
          onChangeText={setInputText}
          multiline
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity
          onPress={handleSend}
          disabled={!inputText.trim() || loading}
          style={[
            styles.sendButton,
            {
              backgroundColor: inputText.trim() ? theme.colors.primary : theme.colors.border,
            },
          ]}
        >
          <Send size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
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
  orbContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
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
  messageContainer: {
    marginBottom: 16,
  },
  userMessage: {
    alignItems: 'flex-end',
  },
  assistantMessage: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
  },
  messageText: {
    fontSize: 17,
    lineHeight: 22,
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  loadingText: {
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    gap: 12,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 17,
    maxHeight: 100,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, BorderRadius, Shadows } from '../DesignSystem';
import { ArrowLeft, Send, Plus, EmoticonHappy, ShieldCheck } from '../SvgIcons';

interface Message {
  id: string;
  sender: 'agent' | 'student' | 'system';
  text: string;
  time?: string;
  type?: string;
}

const ChatScreen = () => {
  const [inputText, setInputText] = useState('');

  const messages: Message[] = [
    { id: '1', sender: 'system', text: 'Today' },
    { id: '2', sender: 'agent', text: 'Hi Abhay! How can I help you today?', time: '10:30 AM' },
    { id: '3', sender: 'student', text: 'Hi, I need help with my transcript verification.', time: '10:31 AM' },
    { id: '4', sender: 'agent', text: "Sure! I've started reviewing your transcript. Let me check the status.", time: '10:32 AM' },
    {
      id: '5',
      sender: 'agent',
      text: 'Sarah is reviewing your transcript',
      time: '10:33 AM',
      type: 'status',
    },
    { id: '6', sender: 'student', text: 'Great, thank you! How long will it take?', time: '10:34 AM' },
    { id: '7', sender: 'agent', text: 'Usually 24-48 hours. You will receive an email once completed.', time: '10:35 AM' },
  ];

  const renderMessage = ({ item }: { item: Message }) => {
    if (item.sender === 'system') {
      return (
        <View style={styles.systemMsg}>
          <View style={styles.timeTag}>
            <Text style={styles.timeTagText}>{item.text}</Text>
          </View>
        </View>
      );
    }

    if (item.type === 'status') {
      return (
        <View style={styles.statusBubble}>
          <ShieldCheck color="#92400E" size={24} />
          <View style={styles.statusContent}>
            <Text style={styles.statusText}>{item.text}</Text>
            <Text style={styles.statusTime}>{item.time}</Text>
          </View>
        </View>
      );
    }

    const isAgent = item.sender === 'agent';
    return (
      <View style={[styles.msgWrapper, isAgent ? styles.agentWrapper : styles.studentWrapper]}>
        {isAgent && (
          <View style={styles.agentAvatar}>
            <View style={styles.agentAvatarInner}>
              <Text style={styles.agentAvatarText}>S</Text>
            </View>
            <View style={styles.onlineDot} />
          </View>
        )}
        <View style={[styles.bubble, isAgent ? styles.agentBubble : styles.studentBubble]}>
          <Text style={[styles.bubbleText, isAgent ? styles.agentText : styles.studentText]}>
            {item.text}
          </Text>
          <Text style={[styles.bubbleTime, isAgent ? styles.agentTime : styles.studentTime]}>
            {item.time}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeft color="#fff" size={24} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <View style={styles.agentPhotoContainer}>
              <View style={styles.agentPhoto}>
                <Text style={styles.agentPhotoText}>S</Text>
              </View>
              <View style={styles.statusDot} />
            </View>
            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Sarah Johnson</Text>
              <Text style={styles.headerStatus}>Online</Text>
            </View>
          </View>
          <View style={{ width: 40 }} />
        </View>

        {/* Messages */}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderMessage}
            contentContainerStyle={styles.messagesList}
            showsVerticalScrollIndicator={false}
          />

          {/* Input Bar */}
          <View style={styles.inputBar}>
            <TouchableOpacity style={styles.iconBtn}>
              <Plus color="#757575" size={22} />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.emojiBtn}>
                <EmoticonHappy color="#757575" size={20} />
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="Type your message..."
                placeholderTextColor={Colors.textLight}
                value={inputText}
                onChangeText={setInputText}
              />
            </View>
            <TouchableOpacity style={styles.sendBtn}>
              <Send color="#fff" size={20} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.primary,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  agentPhotoContainer: {
    position: 'relative',
    marginRight: 10,
  },
  agentPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  agentPhotoText: {
    fontSize: 18,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.success,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  headerInfo: {
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
  },
  headerStatus: {
    fontSize: Typography.sizes.xs,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 1,
  },
  messagesList: {
    padding: 16,
    paddingBottom: 20,
    backgroundColor: Colors.surface,
    flexGrow: 1,
  },
  systemMsg: {
    alignItems: 'center',
    marginVertical: 12,
  },
  timeTag: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  timeTagText: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondary,
    fontWeight: Typography.weights.medium,
  },
  msgWrapper: {
    flexDirection: 'row',
    marginVertical: 6,
    maxWidth: '85%',
  },
  agentWrapper: {
    alignSelf: 'flex-start',
  },
  studentWrapper: {
    alignSelf: 'flex-end',
  },
  agentAvatar: {
    marginRight: 8,
    alignSelf: 'flex-end',
    marginBottom: 12,
    position: 'relative',
  },
  agentAvatarInner: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  agentAvatarText: {
    fontSize: 12,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.success,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 1.5,
    borderColor: Colors.surface,
  },
  bubble: {
    padding: 12,
    borderRadius: BorderRadius.xl,
    maxWidth: '100%',
  },
  agentBubble: {
    backgroundColor: Colors.chatBubbleAgent,
    borderBottomLeftRadius: 4,
  },
  studentBubble: {
    backgroundColor: Colors.chatBubbleStudent,
    borderBottomRightRadius: 4,
  },
  bubbleText: {
    fontSize: Typography.sizes.base,
    lineHeight: 20,
  },
  agentText: {
    color: Colors.textPrimary,
  },
  studentText: {
    color: Colors.white,
  },
  bubbleTime: {
    fontSize: Typography.sizes.xs,
    marginTop: 4,
    textAlign: 'right',
  },
  agentTime: {
    color: Colors.textLight,
  },
  studentTime: {
    color: 'rgba(255,255,255,0.6)',
  },
  statusBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    borderRadius: BorderRadius.xl,
    padding: 14,
    marginVertical: 6,
    alignSelf: 'flex-start',
    maxWidth: '85%',
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  statusContent: {
    flex: 1,
    marginLeft: 10,
  },
  statusText: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.medium,
    color: '#92400E',
  },
  statusTime: {
    fontSize: Typography.sizes.xs,
    color: '#A16207',
    marginTop: 2,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.full,
    paddingHorizontal: 12,
    marginHorizontal: 8,
    height: 44,
  },
  input: {
    flex: 1,
    fontSize: Typography.sizes.base,
    color: Colors.textPrimary,
    paddingVertical: 0,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiBtn: {
    padding: 4,
    marginRight: 4,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.md,
  },
});

export default ChatScreen;

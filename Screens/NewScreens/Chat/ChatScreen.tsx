import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, BorderRadius, Shadows } from '../DesignSystem';
import { ArrowLeft } from '../SvgIcons';
import ZendeskChat from 'react-native-zendesk-chat';
import { ZENDESK_ACCOUNT_KEY } from '../Services/ZendeskConfig';

const ChatScreen = ({ navigation }: any) => {
  // Initialize Zendesk Chat SDK once when the screen mounts.
  useEffect(() => {
    ZendeskChat.init(ZENDESK_ACCOUNT_KEY);
  }, []);

  const handleStartChat = () => {
    // Start an anonymous chat session (no user authentication required).
    ZendeskChat.startChat({
      // Anonymous chat — no name/email required.
      behaviorFlags: {
        showAgentAvailability: true,
        showChatTranscriptPrompt: true,
        showPreChatForm: false,
        showOfflineForm: true,
      },
      localizedDismissButtonTitle: 'Close',
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation?.goBack()}
          >
            <ArrowLeft color="#fff" size={24} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <View style={styles.agentPhotoContainer}>
              <View style={styles.agentPhoto}>
                <Text style={styles.agentPhotoText}>Z</Text>
              </View>
              <View style={styles.statusDot} />
            </View>
            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Zendesk Support</Text>
              <Text style={styles.headerStatus}>Online</Text>
            </View>
          </View>
          <View style={{ width: 40 }} />
        </View>

        {/* Chat body */}
        <View style={styles.body}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconEmoji}>💬</Text>
          </View>
          <Text style={styles.title}>Chat with Support</Text>
          <Text style={styles.subtitle}>
            Connect with our support team for help with your queries.
          </Text>
          <TouchableOpacity
            style={styles.startChatButton}
            onPress={handleStartChat}
          >
            <Text style={styles.startChatButtonText}>Start Chat</Text>
          </TouchableOpacity>
        </View>
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
  body: {
    flex: 1,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    ...Shadows.md,
  },
  iconEmoji: {
    fontSize: 40,
  },
  title: {
    fontSize: Typography.sizes['2xl'],
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 28,
    lineHeight: 22,
  },
  startChatButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 48,
    paddingVertical: 14,
    borderRadius: BorderRadius.lg,
    ...Shadows.md,
  },
  startChatButtonText: {
    color: Colors.white,
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.bold,
  },
});

export default ChatScreen;

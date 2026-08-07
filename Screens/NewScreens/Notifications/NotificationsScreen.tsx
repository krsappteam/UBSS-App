import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, BorderRadius, Shadows } from '../DesignSystem';
import {
  CalendarCheck,
  Information,
  FileDocument,
  Bell,
  ArrowLeft,
} from '../SvgIcons';

import { useAuth } from '../Services/AuthContext';
import { getNotifications } from '../Services/api';

const filterTabs = ['All', 'Academic', 'Events', 'Updates'];

const NotificationsScreen = ({ navigation }: any) => {
  const { studentId, authToken, isLoggedIn } = useAuth();
  const [activeFilter, setActiveFilter] = useState('All');
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      setLoading(false);
      return;
    }
    fetchNotifications();
  }, [isLoggedIn, studentId]);

  const fetchNotifications = async () => {
    setLoading(true);
    // The 't' parameter is the username/student number, not a token
    const data = await getNotifications(studentId!, studentId!);
    if (data && Array.isArray(data)) {
      setNotifications(data);
    }
    setLoading(false);
  };

  // If not logged in, show login prompt
  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <View style={styles.centerContent}>
            <View style={styles.lockIcon}>
              <Text style={styles.lockEmoji}>🔒</Text>
            </View>
            <Text style={styles.lockTitle}>Sign In Required</Text>
            <Text style={styles.lockSubtitle}>
              Please sign in to view your notifications
            </Text>
            <TouchableOpacity
              style={styles.signInPromptButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.signInPromptText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <ArrowLeft color="#1a365d" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Notifications</Text>
          </View>


          {/* Filter Tabs */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterContainer}
            contentContainerStyle={styles.filterContent}
          >
            {filterTabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.filterTab,
                  activeFilter === tab && styles.filterTabActive,
                ]}
                onPress={() => setActiveFilter(tab)}
              >
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === tab && styles.filterTextActive,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Notifications List */}
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={Colors.primary} />
              <Text style={styles.loadingText}>Loading notifications...</Text>
            </View>
          ) : notifications.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Bell color="#ccc" size={48} />
              <Text style={styles.emptyTitle}>No Notifications</Text>
              <Text style={styles.emptySubtitle}>
                You're all caught up! Check back later for updates.
              </Text>
            </View>
          ) : (
            notifications.map((notif, index) => (
              <TouchableOpacity key={index} style={styles.notificationCard}>
                <View style={styles.notificationIcon}>
                  {notif.type === 'event' ? (
                    <CalendarCheck color="#03A9F4" size={14} />
                  ) : notif.type === 'info' ? (
                    <Information color="#E91E63" size={14} />
                  ) : (
                    <FileDocument color="#9C27B0" size={14} />
                  )}
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>
                    {notif.title || 'Notification'}
                  </Text>
                  <Text style={styles.notificationDesc}>
                    {notif.message || notif.body || ''}
                  </Text>
                  <Text style={styles.notificationTime}>
                    {notif.date || notif.createdAt || ''}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
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
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  lockIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F3E5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  lockEmoji: {
    fontSize: 36,
  },
  lockTitle: {
    fontSize: Typography.sizes['2xl'],
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  lockSubtitle: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  signInPromptButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: BorderRadius.lg,
    ...Shadows.md,
  },
  signInPromptText: {
    color: Colors.white,
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.bold,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    ...Shadows.sm,
  },
  headerTitle: {
    fontSize: Typography.sizes['2xl'],
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
  },

  filterContainer: {
    marginBottom: 20,
  },
  filterContent: {
    gap: 10,
  },
  filterTab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  filterTabActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterText: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.medium,
    color: Colors.textSecondary,
  },
  filterTextActive: {
    color: Colors.white,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  loadingText: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondary,
    marginTop: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
    marginTop: 16,
  },
  emptySubtitle: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    padding: 16,
    marginBottom: 10,
    ...Shadows.sm,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.lg,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
  },
  notificationDesc: {
    fontSize: Typography.sizes.sm,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  notificationTime: {
    fontSize: Typography.sizes.xs,
    color: Colors.textLight,
    marginTop: 4,
  },
});

export default NotificationsScreen;

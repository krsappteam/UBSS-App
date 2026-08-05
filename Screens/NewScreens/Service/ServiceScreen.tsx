import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, BorderRadius, Shadows } from '../DesignSystem';
import {
  Bell,
  CalendarMonth,
  ClockOutline,
  BookOpen,
  AccountGroup,
  School,
  ChevronForward,
} from '../SvgIcons';
import { useAuth } from '../Services/AuthContext';

const { width } = Dimensions.get('window');
const CARD_GAP = 12;
const GRID_CARD_WIDTH = (width - 48 - CARD_GAP) / 2;

const serviceCards = [
  {
    id: '1',
    title: 'Virtual Queues',
    icon: 'queue',
    color: '#E8F5E9',
    iconColor: '#4CAF50',
    desc: 'Check queue status',
  },
  {
    id: '2',
    title: 'Appointments',
    icon: 'appointment',
    color: '#FFF3E0',
    iconColor: '#FF9800',
    desc: 'Book & manage',
  },
  {
    id: '3',
    title: 'Library',
    icon: 'library',
    color: '#E3F2FD',
    iconColor: '#2196F3',
    desc: 'Browse & reserve',
  },
  {
    id: '4',
    title: 'Registrar',
    icon: 'registrar',
    color: '#F3E5F5',
    iconColor: '#9C27B0',
    desc: 'Documents & forms',
  },
  {
    id: '5',
    title: 'Career Center',
    icon: 'career',
    color: '#E0F7FA',
    iconColor: '#00BCD4',
    desc: 'Jobs & internships',
  },
  {
    id: '6',
    title: 'Wellness',
    icon: 'wellness',
    color: '#FCE4EC',
    iconColor: '#E91E63',
    desc: 'Health & support',
  },
];

const ServiceScreen = ({ navigation }: any) => {
  const { isLoggedIn } = useAuth();

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
              Please sign in to access student services
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
            <View>
              <Text style={styles.headerTitle}>Services</Text>
              <Text style={styles.headerSubtitle}>All student services</Text>
            </View>
          </View>

          {/* Service Grid */}
          <View style={styles.grid}>
            {serviceCards.map((card) => (
              <TouchableOpacity
                key={card.id}
                style={[styles.gridCard, { backgroundColor: card.color }]}
              >
                <View style={styles.gridIconContainer}>
                  {card.icon === 'queue' ? (
                    <AccountGroup color={card.iconColor} size={28} />
                  ) : card.icon === 'appointment' ? (
                    <CalendarMonth color={card.iconColor} size={28} />
                  ) : card.icon === 'library' ? (
                    <BookOpen color={card.iconColor} size={28} />
                  ) : card.icon === 'registrar' ? (
                    <School color={card.iconColor} size={28} />
                  ) : card.icon === 'career' ? (
                    <AccountGroup color={card.iconColor} size={28} />
                  ) : (
                    <BookOpen color={card.iconColor} size={28} />
                  )}
                </View>
                <Text style={styles.gridTitle}>{card.title}</Text>
                <Text style={styles.gridDesc}>{card.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
    paddingVertical: 16,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: Typography.sizes['2xl'],
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
  },
  headerSubtitle: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: CARD_GAP,
  },
  gridCard: {
    width: GRID_CARD_WIDTH,
    borderRadius: BorderRadius.xl,
    padding: 18,
    ...Shadows.sm,
  },
  gridIconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.lg,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  gridTitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
  },
  gridDesc: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});

export default ServiceScreen;

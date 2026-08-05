import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
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
  ChevronRight,
  ChevronForward,
} from '../SvgIcons';
import { useAuth } from '../Services/AuthContext';

const { width } = Dimensions.get('window');
const CARD_GAP = 12;
const GRID_CARD_WIDTH = (width - 48 - CARD_GAP) / 2;

const gridCards = [
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
];

const exploreItems = [
  {
    id: '1',
    title: 'Academic',
    subtitle: 'Find Course',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    bgColor: '#1565C0',
  },
  {
    id: '2',
    title: 'Wellness',
    subtitle: 'Student Support',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80',
    bgColor: '#2E7D32',
  },
];

const HomeScreen = ({ navigation }: any) => {
  const { studentData } = useAuth();
  const displayName = studentData?.firstName || 'Student';

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
              <Text style={styles.greeting}>Hello, {displayName}</Text>
              <Text style={styles.subtitle}>Student Services</Text>
            </View>
            <TouchableOpacity
              style={styles.notificationBtn}
              onPress={() => navigation.navigate('Notifications')}
            >
              <Bell color="#1a365d" size={24} />
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Timetable Card */}
          <TouchableOpacity
            style={styles.timetableCard}
            onPress={() => navigation.navigate('Timetable')}
          >
            <View style={styles.timetableLeft}>
              <View style={styles.timetableIconContainer}>
                <CalendarMonth color="#03A9F4" size={32} />
              </View>
              <View style={styles.timetableInfo}>
                <Text style={styles.timetableTitle}>Timetable</Text>
                <Text style={styles.timetableDesc}>Next: Advanced Calculus</Text>
              </View>
            </View>
            <View style={styles.timetableRight}>
              <View style={styles.timetableBadge}>
                <ClockOutline color="#E01842" size={14} />
                <Text style={styles.timetableBadgeText}>10:30 AM</Text>
              </View>
              <Text style={styles.timetableRoom}>Room 405</Text>
            </View>
          </TouchableOpacity>

          {/* Your Services */}
          <Text style={styles.sectionTitle}>Your Services</Text>
          <View style={styles.gridRow}>
            {gridCards.map((card) => (
              <TouchableOpacity
                key={card.id}
                style={[styles.gridCard, { backgroundColor: card.color }]}
              >
                <View style={styles.gridIconContainer}>
                  {card.icon === 'queue' ? (
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

          {/* Explore Section */}
          <Text style={styles.sectionTitle}>Explore</Text>
          <View style={styles.exploreRow}>
            {exploreItems.map((item) => (
              <TouchableOpacity key={item.id} style={[styles.exploreCard, { backgroundColor: item.bgColor }]}>
                <ImageBackground
                  source={{ uri: item.image }}
                  style={styles.exploreImage}
                  imageStyle={styles.exploreImageStyle}
                >
                  <View style={styles.exploreOverlay} />
                  <View style={styles.exploreContent}>
                    <Text style={styles.exploreTitle}>{item.title}</Text>
                    <View style={styles.exploreCTA}>
                      <Text style={styles.exploreSubtitle}>{item.subtitle}</Text>
                      <ChevronForward color="#fff" size={16} />
                    </View>
                  </View>
                </ImageBackground>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  greeting: {
    fontSize: Typography.sizes['2xl'],
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  notificationBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.sm,
  },
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
  },
  timetableCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    padding: 18,
    marginBottom: 24,
    ...Shadows.md,
  },
  timetableLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timetableIconContainer: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.lg,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  timetableInfo: {},
  timetableTitle: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
  },
  timetableDesc: {
    fontSize: Typography.sizes.sm,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  timetableRight: {
    alignItems: 'flex-end',
  },
  timetableBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCE4EC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  timetableBadgeText: {
    fontSize: Typography.sizes.xs,
    color: '#E01842',
    fontWeight: Typography.weights.bold,
    marginLeft: 4,
  },
  timetableRoom: {
    fontSize: Typography.sizes.xs,
    color: Colors.textLight,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
    marginBottom: 14,
  },
  gridRow: {
    flexDirection: 'row',
    gap: CARD_GAP,
    marginBottom: 28,
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
  exploreRow: {
    gap: CARD_GAP,
    marginBottom: 28,
  },
  exploreCard: {
    borderRadius: BorderRadius.xl,
    marginBottom: 12,
    height: 180,
    overflow: 'hidden',
    ...Shadows.md,
  },
  exploreImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  exploreImageStyle: {
    borderRadius: BorderRadius.xl,
  },
  exploreOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: BorderRadius.xl,
  },
  exploreContent: {
    padding: 20,
  },
  exploreTitle: {
    fontSize: Typography.sizes['2xl'],
    fontWeight: Typography.weights.bold,
    color: Colors.white,
  },
  exploreCTA: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  exploreSubtitle: {
    fontSize: Typography.sizes.base,
    color: 'rgba(255,255,255,0.9)',
    marginRight: 6,
  },
});

export default HomeScreen;

import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  Linking,
} from 'react-native';
import SweetToast from 'react-native-sweet-toast';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, BorderRadius, Shadows } from '../DesignSystem';
import {
  CalendarMonth,
  ClockOutline,
  BookOpen,
  AccountGroup,
  School,
  ChevronRight,
  ChevronForward,
  LogoutIcon,
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
    url: 'https://www.gca.edu.au/courses/',
  },
  {
    id: '2',
    title: 'Wellness',
    subtitle: 'Student Support',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80',
    bgColor: '#2E7D32',
    url: 'https://www.gca.edu.au/student-support/',
  },
];


const HomeScreen = ({ navigation }: any) => {
  const { studentData, isLoggedIn, logout } = useAuth();
  const displayName = studentData?.firstName || '';
  const sweetToast = useRef<any>(null);
  const logoutToast = useRef<any>(null);

  // Show a persistent "not logged in" toast when the user is not logged in.
  useEffect(() => {
    if (!isLoggedIn) {
      sweetToast.current?.callToast();
    } else {
      sweetToast.current?.closeToast();
    }
  }, [isLoggedIn]);

  const handleLoginPromptPress = () => {
    sweetToast.current?.closeToast();
    navigation.navigate('Login');
  };

  const handleLogoutPress = () => {
    // Show logout confirmation toast
    logoutToast.current?.callToast();
  };

  const handleConfirmLogout = async () => {
    logoutToast.current?.closeToast();
    await logout();
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    });
  };

  const handleCancelLogout = () => {
    logoutToast.current?.closeToast();
  };



  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerTextContainer}>
              <Text
                style={styles.greeting}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Hello {displayName}
              </Text>
              <Text style={styles.subtitle}>Student</Text>
            </View>
            {isLoggedIn && (
              <TouchableOpacity
                style={styles.logoutBtn}
                onPress={handleLogoutPress}
              >
                <LogoutIcon color="#1a365d" size={24} />
              </TouchableOpacity>
            )}



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
          {/* <Text style={styles.sectionTitle}>Your Services</Text>
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
          </View> */}

          {/* Explore Section */}
          <Text style={styles.sectionTitle}>Explore</Text>
          <View style={styles.exploreRow}>
            {exploreItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.exploreCard, { backgroundColor: item.bgColor }]}
                onPress={() => Linking.openURL(item.url)}
              >

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

      {/* Persistent "not logged in" toast */}
      <SweetToast
        onRef={(ref: any) => (sweetToast.current = ref)}
        position="bottom"
        positionValue={100}
        style={styles.loginToastContainer}
      >
        <TouchableOpacity
          style={styles.loginToastContent}
          activeOpacity={0.8}
          onPress={handleLoginPromptPress}
        >
          <Text style={styles.loginToastIcon}>🔒</Text>
          <View style={styles.loginToastTextContainer}>
            <Text style={styles.loginToastTitle}>You are not logged in</Text>
            <Text style={styles.loginToastSubtitle}>Tap to sign in</Text>
          </View>
          <ChevronForward color="#fff" size={18} />
        </TouchableOpacity>
      </SweetToast>

      {/* Logout Confirmation Toast */}
      <SweetToast
        onRef={(ref: any) => (logoutToast.current = ref)}
        position="bottom"
        positionValue={100}
        style={styles.logoutToastContainer}
      >
        <View style={styles.logoutToastContent}>
          <Text style={styles.logoutToastTitle}>
            Are you sure you want to log out?
          </Text>
          <View style={styles.logoutToastActions}>
            <TouchableOpacity
              style={[styles.logoutToastButton, styles.cancelButton]}
              onPress={handleCancelLogout}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.logoutToastButton, styles.confirmButton]}
              onPress={handleConfirmLogout}
            >
              <Text style={styles.confirmButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SweetToast>
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
  headerTextContainer: {
    flex: 1,
    marginRight: 12,
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
  logoutBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.sm,
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
  loginToastContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    marginHorizontal: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  loginToastContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  loginToastIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  loginToastTextContainer: {
    flex: 1,
  },
  loginToastTitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
  },
  loginToastSubtitle: {
    fontSize: Typography.sizes.sm,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  logoutToastContainer: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginHorizontal: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  logoutToastContent: {
    alignItems: 'center',
    padding: 16,
  },
  logoutToastTitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 14,
  },
  logoutToastActions: {
    flexDirection: 'row',
    width: '100%',
  },
  logoutToastButton: {
    flex: 1,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#f0f0f5',
    marginRight: 8,
  },
  confirmButton: {
    backgroundColor: '#EF4444',
    marginLeft: 8,
  },
  cancelButtonText: {
    color: Colors.textPrimary,
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.bold,
  },
  confirmButtonText: {
    color: Colors.white,
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.bold,
  },
});



export default HomeScreen;

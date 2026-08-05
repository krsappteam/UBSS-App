import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, BorderRadius, Shadows } from './DesignSystem';
import { ChevronRight, AccountDetails } from './SvgIcons';

const menuItems = [
  { title: 'My Account', icon: '👤' },
  { title: 'Settings', icon: '⚙️' },
  { title: 'Help & Support', icon: '❓' },
  { title: 'About', icon: 'ℹ️' },
];

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>

          <View style={styles.profileCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AK</Text>
            </View>
            <Text style={styles.name}>Abhay Kumar</Text>
            <Text style={styles.email}>abhay.kumar@ubss.edu</Text>
          </View>

          <View style={styles.menuSection}>
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text style={styles.menuText}>{item.title}</Text>
                <ChevronRight color="#666" size={22} />
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Sign Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.surface },
  safeArea: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 100 },
  header: { paddingVertical: 16 },
  headerTitle: { fontSize: Typography.sizes['2xl'], fontWeight: Typography.weights.bold, color: Colors.textPrimary },
  profileCard: { alignItems: 'center', backgroundColor: Colors.white, borderRadius: BorderRadius.xl, padding: 24, marginBottom: 24, ...Shadows.md },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  avatarText: { fontSize: 28, fontWeight: Typography.weights.bold, color: Colors.white },
  name: { fontSize: Typography.sizes.xl, fontWeight: Typography.weights.bold, color: Colors.textPrimary },
  email: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, marginTop: 4 },
  menuSection: { backgroundColor: Colors.white, borderRadius: BorderRadius.xl, marginBottom: 24, ...Shadows.sm },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: Colors.borderLight },
  menuIcon: { fontSize: 20, marginRight: 14 },
  menuText: { flex: 1, fontSize: Typography.sizes.base, fontWeight: Typography.weights.medium, color: Colors.textPrimary },
  logoutBtn: { backgroundColor: Colors.white, borderRadius: BorderRadius.xl, padding: 16, alignItems: 'center', borderWidth: 1, borderColor: Colors.red },
  logoutText: { fontSize: Typography.sizes.md, fontWeight: Typography.weights.bold, color: Colors.red },
});

export default ProfileScreen;

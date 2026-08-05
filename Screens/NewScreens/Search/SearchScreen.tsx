import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, BorderRadius, Shadows } from '../DesignSystem';
import { Magnify, HistoryIcon, CloseIcon, ChevronForward } from '../SvgIcons';

const { width } = Dimensions.get('window');
const CARD_GAP = 12;
const CARD_WIDTH = (width - 48 - CARD_GAP) / 2;

const categories = [
  { id: '1', title: 'Library', icon: '📚', color: Colors.primary },
  { id: '2', title: 'Wellness', icon: '🧘', color: '#0F766E' },
  { id: '3', title: 'Registrar', icon: '📋', color: '#92400E' },
  { id: '4', title: 'Career', icon: '💼', color: '#7DD3FC' },
];

const trendingEvents = [
  { id: '1', title: 'Career Fair 2026', date: 'OCT 12', color: '#1a365d' },
  { id: '2', title: 'Sports Day', date: 'OCT 15', color: '#0F766E' },
  { id: '3', title: 'Workshop: AI', date: 'OCT 18', color: '#92400E' },
];

const recentSearches = ['Timetable', 'Library hours', 'Exam schedule', 'Student ID'];

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Search Input */}
          <View style={styles.searchContainer}>
            <View style={styles.searchInputWrapper}>
              <Magnify color="#666" size={22} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search services, events..."
                placeholderTextColor={Colors.textLight}
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
          </View>

          {/* Recent Searches */}
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <View style={styles.recentSearchesRow}>
            {recentSearches.map((item, index) => (
              <TouchableOpacity key={index} style={styles.recentChip}>
                <HistoryIcon color="#666" size={14} />
                <Text style={styles.recentText}>{item}</Text>
                <CloseIcon color="#666" size={12} />
              </TouchableOpacity>
            ))}
          </View>

          {/* Categories */}
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[styles.categoryCard, { backgroundColor: cat.color }]}
              >
                <Text style={styles.categoryIcon}>{cat.icon}</Text>
                <Text style={styles.categoryTitle}>{cat.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Trending Events */}
          <Text style={styles.sectionTitle}>Trending Events</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.eventsRow}
          >
            {trendingEvents.map((event) => (
              <TouchableOpacity
                key={event.id}
                style={[styles.eventCard, { backgroundColor: event.color }]}
              >
                <View style={styles.eventDateBadge}>
                  <Text style={styles.eventDateText}>{event.date}</Text>
                </View>
                <Text style={styles.eventTitle}>{event.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  searchContainer: {
    marginTop: 16,
    marginBottom: 24,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.full,
    paddingHorizontal: 18,
    height: 52,
    ...Shadows.md,
  },
  searchInput: {
    flex: 1,
    fontSize: Typography.sizes.md,
    color: Colors.textPrimary,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
    marginBottom: 14,
  },
  recentSearchesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 28,
  },
  recentChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.full,
    paddingHorizontal: 14,
    paddingVertical: 8,
    ...Shadows.sm,
  },
  recentText: {
    fontSize: Typography.sizes.sm,
    color: Colors.textSecondary,
    fontWeight: Typography.weights.medium,
    marginHorizontal: 6,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: CARD_GAP,
    marginBottom: 28,
  },
  categoryCard: {
    width: CARD_WIDTH,
    height: 100,
    borderRadius: BorderRadius.xl,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.md,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
  },
  eventsRow: {
    paddingRight: 20,
    gap: 12,
  },
  eventCard: {
    width: 160,
    height: 140,
    borderRadius: BorderRadius.xl,
    padding: 16,
    justifyContent: 'flex-end',
    ...Shadows.md,
  },
  eventDateBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
  },
  eventDateText: {
    fontSize: Typography.sizes.xs,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
  },
  eventTitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
  },
});

export default SearchScreen;

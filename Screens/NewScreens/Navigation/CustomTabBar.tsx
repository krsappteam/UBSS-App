import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  HomeIcon,
  StudentCap,
  ChatOutline,
  SearchIcon,
  ViewGrid,
  BellOutline,
} from '../SvgIcons';

const CustomTabBar = ({ state, navigation }: any) => {
  const tabs = [
    { label: 'Home', icon: 'home', route: 'Home' },
    { label: 'ID Card', icon: 'student', route: 'StudentID' },
    { label: 'Search', icon: 'search', route: 'Search' },
    { label: 'Services', icon: 'services', route: 'Services' },
    { label: 'Notify', icon: 'notify', route: 'Notifications' },
    { label: 'Chat', icon: 'chat', route: 'Chat' },
  ];

  const renderIcon = (icon: string, color: string) => {
    switch (icon) {
      case 'home':
        return <HomeIcon color={color} />;
      case 'student':
        return <StudentCap color={color} />;
      case 'search':
        return <SearchIcon color={color} />;
      case 'services':
        return <ViewGrid color={color} />;
      case 'notify':
        return <BellOutline color={color} />;
      case 'chat':
        return <ChatOutline color={color} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container} edges={['bottom']}>
        {tabs.map((tab, index) => {
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(tab.route)}
              style={styles.tab}
            >
              {isFocused ? (
                <View style={styles.activeContainer}>
                  <View style={styles.floatingButton}>
                    {renderIcon(tab.icon, '#fff')}
                  </View>
                  <Text style={[styles.label, styles.activeLabel]}>
                    {tab.label}
                  </Text>
                </View>
              ) : (
                <View style={styles.inactiveContainer}>
                  {renderIcon(tab.icon, '#666')}
                  <Text style={[styles.label, styles.inactiveLabel]}>
                    {tab.label}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 75,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 20,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -3,
    },
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inactiveContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 14,
  },
  floatingButton: {
    position: 'absolute',
    top: -30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3f73b9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#fff',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
  },
  activeLabel: {
    color: '#3f73b9',
    marginTop: 35,
  },
  inactiveLabel: {
    color: '#666',
    marginTop: 4,
  },
});

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

// Custom Student Cap Icon
const StudentCap = ({ color }) => (
  <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
    <Path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill={color} />
  </Svg>
);

const CustomTabBar = ({ state, navigation }) => {
  const tabs = [
    { label: 'Home', icon: 'home', route: 'Home' },
    { label: 'Student Id', icon: 'cap', route: 'StudentId' },
    { label: 'Live Chat', icon: 'headphones-settings', route: 'LiveChat' },
  ];

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
                // ACTIVE STATE: Show the Floating Red Circle
                <View style={styles.activeContainer}>
                  <View style={styles.floatingButton}>
                    {tab.icon === 'cap' ? (
                      <StudentCap color="white" />
                    ) : (
                      <MaterialCommunityIcons name={tab.icon} size={28} color="white" />
                    )}
                  </View>
                  <Text style={[styles.label, styles.activeLabel]}>{tab.label}</Text>
                </View>
              ) : (
                // INACTIVE STATE: Show standard Grey Icon
                <View style={styles.inactiveContainer}>
                  {tab.icon === 'cap' ? (
                    <StudentCap color="#666" />
                  ) : (
                    <MaterialCommunityIcons name={tab.icon} size={28} color="#666" />
                  )}
                  <Text style={[styles.label, styles.inactiveLabel]}>{tab.label}</Text>
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
    backgroundColor: 'white',
    height: 75,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
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
    top: -30, // Pulls the active icon up to float
    backgroundColor: '#3f73b9',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderWidth: 4,
    borderColor: 'white',
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
  },
  activeLabel: {
    color: '#3f73b9',
    marginTop: 35, // Pushes text down so it doesn't overlap the floating circle
  },
  inactiveLabel: {
    color: '#666',
    marginTop: 4,
  },
});
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

// Core Screens
import SplashScreen from '../Splashscreen/SplashScreen';
import LoginScreen from '../Loginscreen/Loginscreen';
import HomeScreen from '../Homescreen/Homscreen';
import TimetableScreen from '../TimeTable/TimeTable';
import LiveChatScreen from '../Chatscreen/ChatScreen';
import CustomTabBar from '../Navigation/CustomTabBar';
import StudentCard from '../StudentCard/StudentCard';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Custom Drawer Content with Logout
function CustomDrawerContent(props) {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          },
        },
      ]
    );
  };

  return (
    <DrawerContentScrollView {...props} style={drawerStyles.drawerScroll}>
      <View style={drawerStyles.drawerHeader}>
        <View style={drawerStyles.avatar}>
          <Text style={drawerStyles.avatarText}>UB</Text>
        </View>
        <Text style={drawerStyles.drawerTitle}>UBSS App</Text>
        <Text style={drawerStyles.drawerSubtitle}>Student Portal</Text>
      </View>

      <View style={drawerStyles.menuSection}>
        {props.state.routes.map((route, index) => {
          const isFocused = props.state.index === index;
          const label = route.name === 'MainTabs' ? 'Home' : route.name;

          return (
            <TouchableOpacity
              key={index}
              style={[drawerStyles.menuItem, isFocused && drawerStyles.menuItemActive]}
              onPress={() => props.navigation.navigate(route.name)}
            >
              <Text style={[drawerStyles.menuText, isFocused && drawerStyles.menuTextActive]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={drawerStyles.divider} />

      <TouchableOpacity style={drawerStyles.logoutButton} onPress={handleLogout}>
        <Text style={drawerStyles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="StudentId" component={StudentCard} />
      <Tab.Screen name="ChatPlaceholder" component={View} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: drawerStyles.drawer,
      }}
    >
      <Drawer.Screen name="MainTabs" component={TabNavigator} />
      <Drawer.Screen name="Timetable" component={TimetableScreen} />
      <Drawer.Screen name="LiveChat" component={LiveChatScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigation() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isShowSplash ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="MainApp" component={DrawerNavigator} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const drawerStyles = StyleSheet.create({
  drawer: {
    width: 280,
  },
  drawerScroll: {
    backgroundColor: '#fff',
  },
  drawerHeader: {
    padding: 20,
    backgroundColor: '#3f73b9',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3f73b9',
  },
  drawerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  drawerSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  menuSection: {
    paddingHorizontal: 10,
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 2,
  },
  menuItemActive: {
    backgroundColor: '#f0f0f5',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  menuTextActive: {
    color: '#3f73b9',
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  logoutButton: {
    marginHorizontal: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EF4444',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#EF4444',
  },
});

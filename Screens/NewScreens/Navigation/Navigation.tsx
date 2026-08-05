import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthProvider } from '../Services/AuthContext';

import LoginScreen from '../Login/LoginScreen';
import HomeScreen from '../Home/HomeScreen';
import StudentIDScreen from '../StudentID/StudentIDScreen';
import ChatScreen from '../Chat/ChatScreen';
import SearchScreen from '../Search/SearchScreen';
import ServiceScreen from '../Service/ServiceScreen';
import NotificationsScreen from '../Notifications/NotificationsScreen';
import TimetableScreen from '../../TimeTable/TimeTable';
import CustomTabBar from './CustomTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="StudentID" component={StudentIDScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Services" component={ServiceScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="Timetable" component={TimetableScreen} />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AppNavigator;

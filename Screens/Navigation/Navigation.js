// import React from 'react';
// import { View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from '../Splashscreen/SplashScreen';
// import LoginScreen from '../Loginscreen/Loginscreen';
// // Screen Imports
// import HomeScreen from '../Homescreen/Homscreen';
// import TimetableScreen from '../TimeTable/TimeTable';
// import LiveChatScreen from '../Chatscreen/ChatScreen';

// // Component Import
// import CustomTabBar from '../Navigation/CustomTabBar';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// /**
//  * 1. Bottom Tab Navigator
//  * These screens will show the floating bottom bar.
//  */
// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       tabBar={(props) => <CustomTabBar {...props} />}
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
      
//       {/* This is your "Student Id" tab (Timetable) */}
//       <Tab.Screen name="StudentId" component={TimetableScreen} />
      
//       {/* Placeholder for LiveChat icon in the bar. 
//          When clicked, it will trigger a stack navigation to the real screen.
//       */}
//       <Tab.Screen name="ChatPlaceholder" component={View} />
//     </Tab.Navigator>
//   );
// }

// /**
//  * 2. Root Stack Navigator
//  * LiveChat is a sibling to the TabNavigator, so it won't show the bar.
//  */
// export default function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         {/* Main Flow (Home/Timetable) */}
//         <Stack.Screen name="MainTabs" component={TabNavigator} />

//         {/* Chat Flow (Outside Tabs)
//            Because this is in the Stack but NOT the TabNavigator, 
//            the Bottom Bar is physically removed from this screen.
//         */}
//         <Stack.Screen 
//           name="LiveChat" 
//           component={LiveChatScreen} 
//           options={{
//             animation: 'slide_from_bottom', // Professional transition effect
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

















import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

export default function AppNavigation() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    // Timer for 3 seconds
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isShowSplash ? (
          // 1. Splash Screen shows first
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            {/* 2. Login Screen shows after Splash */}
            <Stack.Screen name="Login" component={LoginScreen} />
            
            {/* 3. Main App Flow (Accessible after login click) */}
            <Stack.Screen name="MainTabs" component={TabNavigator} />
            
            {/* 4. Chat Flow (Hides Bottom Bar) */}
            <Stack.Screen 
              name="LiveChat" 
              component={LiveChatScreen} 
              options={{ animation: 'slide_from_bottom' }} 
            />
              <Stack.Screen 
              name="Timetable" 
              component={TimetableScreen} 
              options={{ animation: 'slide_from_bottom' }} 
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
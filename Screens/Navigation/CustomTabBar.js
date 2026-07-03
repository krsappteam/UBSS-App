// import React from 'react';
// import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';


// const { width } = Dimensions.get('window');

// // Custom Student Cap Icon
// const StudentCap = ({ color }) => (
//   <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
//     <Path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill={color} />
//   </Svg>
// );

// const CustomTabBar = ({ state, navigation }) => {
//   const tabs = [
//     { label: 'Home', icon: 'home', route: 'Home' },
//     { label: 'Student Id', icon: 'cap', route: 'StudentId' },
//     { label: 'Live Chat', icon: 'headphones-settings', route: 'LiveChat' },
//   ];

//   return (
//     <View style={styles.wrapper}>
//       <SafeAreaView style={styles.container} edges={['bottom']}>
//         {tabs.map((tab, index) => {
//           const isFocused = state.index === index;

//           return (
//             <TouchableOpacity
//               key={index}
//               activeOpacity={0.8}
//               onPress={() => navigation.navigate(tab.route)}
//               style={styles.tab}
//             >
//               {isFocused ? (
//                 // ACTIVE STATE: Show the Floating Red Circle
//                 <View style={styles.activeContainer}>
//                   <View style={styles.floatingButton}>
//                     {tab.icon === 'cap' ? (
//                       <StudentCap color="white" />
//                     ) : (
//                       <MaterialCommunityIcons name={tab.icon} size={28} color="white" />
//                     )}
//                   </View>
//                   <Text style={[styles.label, styles.activeLabel]}>{tab.label}</Text>
//                 </View>
//               ) : (
//                 // INACTIVE STATE: Show standard Grey Icon
//                 <View style={styles.inactiveContainer}>
//                   {tab.icon === 'cap' ? (
//                     <StudentCap color="#666" />
//                   ) : (
//                     <MaterialCommunityIcons name={tab.icon} size={28} color="#666" />
//                   )}
//                   <Text style={[styles.label, styles.inactiveLabel]}>{tab.label}</Text>
//                 </View>
//               )}
//             </TouchableOpacity>
//           );
//         })}
//       </SafeAreaView>
//     </View>
//   );
// };

// export default CustomTabBar;

// const styles = StyleSheet.create({
//   wrapper: {
//     position: 'absolute',
//     bottom: 15,
//     width: '100%',
//     backgroundColor: 'transparent',
//   },
//   container: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     height: 75,
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     elevation: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },
//   tab: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   activeContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   inactiveContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 14,
//   },
//   floatingButton: {
//     position: 'absolute',
//     top: -30, // Pulls the active icon up to float
//     backgroundColor: '#3f73b9',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 8,
//     borderWidth: 4,
//     borderColor: 'white',
//   },
//   label: {
//     fontSize: 11,
//     fontWeight: '700',
//   },
//   activeLabel: {
//     color: '#3f73b9',
//     marginTop: 35, // Pushes text down so it doesn't overlap the floating circle
//   },
//   inactiveLabel: {
//     color: '#666',
//     marginTop: 4,
//   },
// });




















import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

// ==================== HOME ICON ====================
const HomeIcon = ({ color }) => (
  <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3L3 10H6V21H10V15H14V21H18V10H21L12 3Z"
      fill={color}
    />
  </Svg>
);

// ==================== STUDENT CAP ====================
const StudentCap = ({ color }) => (
  <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
      fill={color}
    />
  </Svg>
);

// ==================== LIVE CHAT ====================
const LiveChatIcon = ({ color }) => (
  <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2C7.58 2 4 5.58 4 10V14C4 15.1 4.9 16 6 16H8V10H6C6 6.69 8.69 4 12 4C15.31 4 18 6.69 18 10H16V16H18V18H12V20H18C19.1 20 20 19.1 20 18V16C21.1 16 22 15.1 22 14V10C22 5.58 18.42 2 12 2Z"
      fill={color}
    />
  </Svg>
);

const CustomTabBar = ({ state, navigation }) => {
  const tabs = [
    {
      label: 'Home',
      icon: 'home',
      route: 'Home',
    },
    {
      label: 'Student Id',
      icon: 'student',
      route: 'StudentId',
    },
    {
      label: 'Live Chat',
      icon: 'chat',
      route: 'LiveChat',
    },
  ];

  const renderIcon = (icon, color) => {
    switch (icon) {
      case 'home':
        return <HomeIcon color={color} />;

      case 'student':
        return <StudentCap color={color} />;

      case 'chat':
        return <LiveChatIcon color={color} />;

      default:
        return null;
    }
  };

  return (
    <View style={styles.wrapper}>
      <SafeAreaView
        style={styles.container}
        edges={['bottom']}
      >
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

                  <Text
                    style={[
                      styles.label,
                      styles.activeLabel,
                    ]}
                  >
                    {tab.label}
                  </Text>
                </View>
              ) : (
                <View style={styles.inactiveContainer}>
                  {renderIcon(tab.icon, '#666')}

                  <Text
                    style={[
                      styles.label,
                      styles.inactiveLabel,
                    ]}
                  >
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
// import React from 'react';
// import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import {
//   HomeIcon,
//   StudentCap,
//   ChatOutline,
//   SearchIcon,
//   ViewGrid,
//   BellOutline,
// } from '../SvgIcons';

// const CustomTabBar = ({ state, navigation }: any) => {
//   const insets = useSafeAreaInsets();

//   const tabs = [
//     { label: 'Home', icon: 'home', route: 'Home' },
//     { label: 'ID Card', icon: 'student', route: 'StudentID' },
//     // { label: 'Search', icon: 'search', route: 'Search' },
//     // { label: 'Services', icon: 'services', route: 'Services' },
//     { label: 'Notification', icon: 'bell', route: 'Notifications' },
//     { label: 'Chat', icon: 'chat', route: 'Chat' },
//   ];

//   const renderIcon = (icon: string, color: string) => {
//     switch (icon) {
//       case 'home':
//         return <HomeIcon color={color} size={22} />;
//       case 'student':
//         return <StudentCap color={color} size={22} />;
//       case 'search':
//         return <SearchIcon color={color} size={22} />;
//       case 'services':
//         return <ViewGrid color={color} size={22} />;
//       case 'bell':
//         return <BellOutline color={color} size={22} />;
//       case 'chat':
//         return <ChatOutline color={color} size={22} />;
//       default:
//         return null;
//     }
//   };

//   const handleTabPress = (tab: any) => {
//     navigation.navigate(tab.route);
//   };

//   // Determine the currently focused route name from the navigator state.
//   const currentRouteName = state.routes?.[state.index]?.name;

//   return (
//     <View style={[styles.wrapper, { bottom: 5 + insets.bottom }]}>
//       <View
//         style={[
//           styles.container,
//           { paddingBottom: insets.bottom, height: 48 + insets.bottom },
//         ]}
//       >






//         {tabs.map((tab, index) => {

//           const isFocused = currentRouteName === tab.route;

//           return (
//             <TouchableOpacity
//               key={index}
//               activeOpacity={0.8}
//               onPress={() => handleTabPress(tab)}
//               style={styles.tab}
//             >
//               {isFocused ? (
//                 <View style={styles.activeContainer}>
//                   <View style={styles.floatingButton}>
//                     {renderIcon(tab.icon, '#fff')}
//                   </View>
//                   <Text style={[styles.label, styles.activeLabel]}>
//                     {tab.label}
//                   </Text>
//                 </View>
//               ) : (
//                 <View style={styles.inactiveContainer}>
//                   <View style={styles.inactiveIcon}>
//                     {renderIcon(tab.icon, '#666')}
//                   </View>
//                   <Text style={[styles.label, styles.inactiveLabel]}>
//                     {tab.label}
//                   </Text>
//                 </View>
//               )}
//             </TouchableOpacity>
//           );
//         })}
//       </View>
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
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     elevation: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.12,
//     shadowRadius: 10,
//     shadowOffset: {
//       width: 0,
//       height: -3,
//     },
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
//     height: 48,
//   },


//   inactiveContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     height: 48,
//   },

//   inactiveIcon: {
//     position: 'absolute',
//     top: 4,
//   },





//   floatingButton: {
//     position: 'absolute',
//     top: -24,
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     backgroundColor: '#3f73b9',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 4,
//     borderColor: '#fff',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowRadius: 8,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//   },
//   label: {
//     fontSize: 11,
//     fontWeight: '700',
//   },
//   activeLabel: {
//     color: '#3f73b9',
//     position: 'absolute',
//     top: 24,
//   },


//   inactiveLabel: {
//     color: '#666',
//     position: 'absolute',
//     top: 24,
//   },

// });





import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  HomeIcon,
  StudentCap,
  ChatOutline,
  SearchIcon,
  ViewGrid,
  BellOutline,
} from '../SvgIcons';

const CustomTabBar = ({ state, navigation }: any) => {
  const insets = useSafeAreaInsets();

  const tabs = [
    { label: 'Home', icon: 'home', route: 'Home' },
    { label: 'ID Card', icon: 'student', route: 'StudentID' },
    { label: 'Notification', icon: 'bell', route: 'Notifications' },
    { label: 'Chat', icon: 'chat', route: 'Chat' },
  ];

  const renderIcon = (icon: string, color: string) => {
    switch (icon) {
      case 'home':
        return <HomeIcon color={color} size={22} />;
      case 'student':
        return <StudentCap color={color} size={22} />;
      case 'search':
        return <SearchIcon color={color} size={22} />;
      case 'services':
        return <ViewGrid color={color} size={22} />;
      case 'bell':
        return <BellOutline color={color} size={22} />;
      case 'chat':
        return <ChatOutline color={color} size={22} />;
      default:
        return null;
    }
  };

  const handleTabPress = (tab: any) => {
    navigation.navigate(tab.route);
  };

  const currentRouteName = state.routes?.[state.index]?.name;

  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom }]}>
      <View style={styles.container}>
        {tabs.map((tab, index) => {
          const isFocused = currentRouteName === tab.route;

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => handleTabPress(tab)}
              style={styles.tab}
            >
              {isFocused ? (
                <View style={styles.tabContent}>
                  <View style={styles.floatingButton}>
                    {renderIcon(tab.icon, '#fff')}
                  </View>
                  <Text style={[styles.label, styles.activeLabel]}>
                    {tab.label}
                  </Text>
                </View>
              ) : (
                <View style={styles.tabContent}>
                  {renderIcon(tab.icon, '#666')}
                  <Text style={[styles.label, styles.inactiveLabel]}>
                    {tab.label}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
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
  tabContent: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    paddingBottom: 8,
  },
  floatingButton: {
    position: 'absolute',
    top: -20,
    width: 48,
    height: 48,
    borderRadius: 24,
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
    marginTop: 4,
  },
  activeLabel: {
    color: '#3f73b9',
  },
  inactiveLabel: {
    color: '#666',
  },
});
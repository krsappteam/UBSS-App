import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SweetToast from 'react-native-sweet-toast';
import {
  HomeIcon,
  StudentCap,
  ChatOutline,
  SearchIcon,
  ViewGrid,
  LogoutIcon,
} from '../SvgIcons';
import { useAuth } from '../Services/AuthContext';

const CustomTabBar = ({ state, navigation }: any) => {
  const { logout, isLoggedIn } = useAuth();
  const sweetToast = useRef<any>(null);

  // The Logout tab is only shown when the user is logged in.
  const tabs = [
    { label: 'Home', icon: 'home', route: 'Home' },
    { label: 'ID Card', icon: 'student', route: 'StudentID' },
    // { label: 'Search', icon: 'search', route: 'Search' },
    // { label: 'Services', icon: 'services', route: 'Services' },
    //  { label: 'Notification', icon: 'bell', route: 'Notification' },
    ...(isLoggedIn ? [{ label: 'Logout', icon: 'logout', route: null }] : []),
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
      case 'logout':
        return <LogoutIcon color={color} />;
      case 'chat':
        return <ChatOutline color={color} />;
      default:
        return null;
    }
  };

  const handleTabPress = (tab: any) => {
    if (tab.route === null) {
      // Logout tab - show confirmation toast
      sweetToast.current?.callToast();
    } else {
      navigation.navigate(tab.route);
    }
  };

  // Determine the currently focused route name from the navigator state.
  const currentRouteName = state.routes?.[state.index]?.name;


  const handleConfirmLogout = async () => {
    sweetToast.current?.closeToast();
    await logout();
    // Reset to the original app flow (MainTabs at index 0).
    // Since logout() clears auth state, screens will show their login prompts.
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    });
  };


  const handleCancelLogout = () => {
    sweetToast.current?.closeToast();
  };

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container} edges={['bottom']}>
        {tabs.map((tab, index) => {
          // Focus is determined by route name, not index, so the Logout
          // item (which has no route) is never highlighted.
          const isFocused = tab.route !== null && currentRouteName === tab.route;


          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => handleTabPress(tab)}
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

      {/* Logout Confirmation Toast */}
      <SweetToast
        onRef={(ref: any) => (sweetToast.current = ref)}
        position="bottom"
        positionValue={100}
        style={styles.toastContainer}
      >
        <View style={styles.toastContent}>
          <Text style={styles.toastTitle}>Are you sure you want to log out?</Text>
          <View style={styles.toastActions}>
            <TouchableOpacity
              style={[styles.toastButton, styles.cancelButton]}
              onPress={handleCancelLogout}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toastButton, styles.confirmButton]}
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
  toastContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
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
  toastContent: {
    alignItems: 'center',
  },
  toastTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 14,
  },
  toastActions: {
    flexDirection: 'row',
    width: '100%',
  },
  toastButton: {
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
    color: '#333',
    fontSize: 15,
    fontWeight: '700',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});

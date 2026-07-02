import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import SplashScreen_bg from "../Utility/Assets/SplashScreen_Bg.svg";
import UBBS_Image from "../Utility/Assets/UBBS_Image.svg";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const SplashScreen = () => {
  const insets = useSafeAreaInsets();
  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(1, { duration: 600 });
    opacity.value = withTiming(1, { duration: 500 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <View style={styles.container}>

      {/* 🔒 Background */}
      <View style={styles.bgWrapper}>
        <SplashScreen_bg width="100%" height="100%" />
      </View>

      {/* 🎯 Center Logo */}
      <View style={styles.center}>
        <Animated.View style={animatedStyle}>
          <UBBS_Image width={180} height={180} />
        </Animated.View>
      </View>

      {/* 📝 Bottom Text - with safe area padding */}
      <View style={[styles.bottomTextContainer, { bottom: insets.bottom + 50 }]}>
        <Text style={styles.text}>
          Change Your Life with US
        </Text>
      </View>

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgWrapper: {
    ...StyleSheet.absoluteFillObject,
  },

  center: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 30,

    justifyContent: 'center',
    alignItems: 'center',
  },

  // 🔥 Bottom text positioning
  bottomTextContainer: {
    position: 'absolute',
    bottom: 50, // 👈 distance from bottom
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  text: {
    color: '#3D3D3D',
    fontSize: 16,
    fontWeight: '600',
  },
});

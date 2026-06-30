import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSequence, 
  withDelay,
  runOnJS 
} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const CustomToast = ({ message, visible, onHide, type = 'error' }) => {
  const translateY = useSharedValue(-100); // Start off-screen
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      // Animation Sequence: Slide Down -> Wait -> Slide Up
      translateY.value = withSequence(
        withTiming(50, { duration: 500 }), // Slide down to 50px from top
        withDelay(2000, withTiming(-100, { duration: 500 }, () => {
          runOnJS(onHide)(); // Reset state in parent
        }))
      );
      opacity.value = withSequence(
        withTiming(1, { duration: 500 }),
        withDelay(2000, withTiming(0, { duration: 500 }))
      );
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  if (!visible) return null;

  return (
    <Animated.View style={[styles.toastContainer, animatedStyle, styles[type]]}>
      <Ionicons 
        name={type === 'error' ? "alert-circle" : "checkmark-circle"} 
        size={24} 
        color="white" 
      />
      <Text style={styles.toastText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    zIndex: 9999,
  },
  error: {
    backgroundColor: '#E01842', // Your brand red
  },
  success: {
    backgroundColor: '#4CAF50',
  },
  toastText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 12,
  },
});

export default CustomToast;
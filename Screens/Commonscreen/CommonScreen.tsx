import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CommonScreen = ({ children }) => {
  return (
    <LinearGradient
      colors={['#3f73b9', '#7A0D24']}
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CommonScreen;

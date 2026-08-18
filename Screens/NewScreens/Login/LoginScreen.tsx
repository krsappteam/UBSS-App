import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, BorderRadius, Shadows } from '../DesignSystem';
import { PersonOutline, LockClosedOutline, ChevronForward, EyeOutline, EyeOffOutline } from '../SvgIcons';
import { loginStudent } from '../Services/api';
import { useAuth } from '../Services/AuthContext';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth } = useAuth();


  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter your student ID and password');
      return;
    }
    setIsLoading(true);
    const result = await loginStudent(email.trim(), password);
    setIsLoading(false);

    if (result.success && result.data) {
      setAuth(result.data.id, result.data, result.token);
      navigation.goBack();
    } else {
      Alert.alert('Login Failed', result.message || 'Please check your credentials');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800' }}
        style={styles.backgroundImage}
        blurRadius={20}
      >
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
            >
              {/* Close Button */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>

              {/* Logo Section */}
              <View style={styles.logoSection}>
                <View style={styles.logoContainer}>
                  <View style={styles.logoIcon}>
                    <Text style={styles.logoEmoji}>🎓</Text>
                  </View>
                  <Text style={styles.logoTitle}>UBSS</Text>
                  <Text style={styles.logoSubtitle}>Use myGCA credentials</Text>
                </View>
              </View>

              {/* Login Card */}
              <View style={styles.loginCard}>
                <Text style={styles.welcomeTitle}>Sign In Required</Text>
                <Text style={styles.welcomeSubtitle}>
                  Please sign in to access this feature
                </Text>

                {/* Student ID Input */}
                <View style={styles.inputContainer}>
                  <PersonOutline color="#666" size={20} />
                  <TextInput
                    style={styles.input}
                    placeholder="Student ID"
                    placeholderTextColor={Colors.textLight}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="number-pad"
                  />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                  <LockClosedOutline color="#666" size={20} />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={Colors.textLight}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffOutline color="#666" size={20} />
                    ) : (
                      <EyeOutline color="#666" size={20} />
                    )}
                  </TouchableOpacity>
                </View>


                {/* Sign In Button */}
                <TouchableOpacity
                  style={[styles.signInButton, isLoading && styles.signInButtonDisabled]}
                  onPress={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator color={Colors.white} size="small" />
                  ) : (
                    <>
                      <Text style={styles.signInText}>Sign In</Text>
                      <ChevronForward color="#fff" size={18} />
                    </>
                  )}
                </TouchableOpacity>

                {/* Divider */}
                {/* <View style={styles.divider}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>or</Text>
                  <View style={styles.dividerLine} />
                </View> */}

                {/* Google Sign In */}
                {/* <TouchableOpacity style={styles.googleButton}>
                  <Text style={styles.googleIcon}>G</Text>
                  <Text style={styles.googleText}>Sign in with Institutional Google</Text>
                </TouchableOpacity> */}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(26, 54, 93, 0.7)',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  closeText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    ...Shadows.lg,
  },
  logoEmoji: {
    fontSize: 36,
  },
  logoTitle: {
    fontSize: Typography.sizes['3xl'],
    fontWeight: Typography.weights.bold,
    color: Colors.white,
    letterSpacing: 2,
  },
  logoSubtitle: {
    fontSize: Typography.sizes.base,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
  },
  loginCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius['2xl'],
    padding: 28,
    ...Shadows.lg,
  },
  welcomeTitle: {
    fontSize: Typography.sizes['2xl'],
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: 14,
    marginBottom: 14,
    height: 52,
  },
  input: {
    flex: 1,
    fontSize: Typography.sizes.md,
    color: Colors.textPrimary,
    marginLeft: 10,
  },
  eyeButton: {
    padding: 8,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.lg,
    height: 52,
    marginTop: 8,
    ...Shadows.md,
  },
  signInButtonDisabled: {
    opacity: 0.7,
  },
  signInText: {
    color: Colors.white,
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.bold,
    marginRight: 8,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  dividerText: {
    marginHorizontal: 12,
    color: Colors.textLight,
    fontSize: Typography.sizes.sm,
  },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.lg,
    height: 52,
  },
  googleIcon: {
    fontSize: 20,
    fontWeight: Typography.weights.bold,
    color: '#4285F4',
    marginRight: 10,
    width: 24,
    height: 24,
    textAlign: 'center',
    lineHeight: 24,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    overflow: 'hidden',
  },
  googleText: {
    color: Colors.textSecondary,
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.medium,
  },
});

export default LoginScreen;

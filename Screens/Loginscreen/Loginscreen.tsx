// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   ScrollView,
//   ActivityIndicator,
// } from 'react-native';

// import LoginLogo from "../Utility/Assets/logo.svg";
// import LinearGradient from 'react-native-linear-gradient';
// import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import CommonScreen from '../Commonscreen/CommonScreen'; 
// import { useNavigation } from '@react-navigation/native';
// import CustomToast from '../Commonscreen/CustomToast';   // ← Update path if needed

// const LoginScreen = () => {
//   const insets = useSafeAreaInsets();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   // Toast States
//   const [toastVisible, setToastVisible] = useState(false);
//   const [toastMessage, setToastMessage] = useState('');
//   const [toastType, setToastType] = useState<'error' | 'success'>('error');

//   // Loader State
//   const [isLoading, setIsLoading] = useState(false);

//   const navigation = useNavigation();

//   const handleLogin = () => {
//     const enteredEmail = email.trim().toLowerCase();
//     const enteredPassword = password.trim();

//     if (enteredEmail === 'abhay' && enteredPassword === 'abhay') {
//       // === SUCCESS: Show Red Loader ===
//       setIsLoading(true);

//       // Auto hide loader and navigate after 1.8 seconds
//       setTimeout(() => {
//         setIsLoading(false);
//         navigation.navigate('MainTabs');
//       }, 1800);
//     } 
//     else {
//       // === FAILED: Show Toast ===
//       setToastMessage('Incorrect Credentials');
//       setToastType('error');
//       setToastVisible(true);
//     }
//   };

//   const hideToast = () => {
//     setToastVisible(false);
//   };

//   return (
//     <CommonScreen>
//       <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

//       <SafeAreaView style={styles.safeArea}>

//         {/* 🔥 HEADER (LOGO) */}
//         <View style={styles.header}>
//           <LoginLogo width={270} height={270} />
//         </View>

//         {/* 🔥 FORM SECTION */}
//         <View style={styles.formContainer}>
//           <ScrollView contentContainerStyle={[styles.formContent, { paddingBottom: insets.bottom + 25 }]} showsVerticalScrollIndicator={false}>

//             <Text style={styles.welcomeTitle}>Welcome Back!</Text>
//             <Text style={styles.welcomeSubTitle}>Login to continue your journey</Text>

//             {/* Email */}
//             <Text style={styles.inputLabel}>Email / Student ID</Text>
//             <View style={styles.inputContainer}>
//               <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
//               <TextInput
//                 style={styles.inputText}
//                 placeholder="Enter email or ID"
//                 value={email}
//                 onChangeText={setEmail}
//                 placeholderTextColor="#A9A9A9"
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//               />
//             </View>

//             {/* Password */}
//             <Text style={styles.inputLabel}>Password</Text>
//             <View style={styles.inputContainer}>
//               <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
//               <TextInput
//                 style={[styles.inputText, { flex: 1 }]}
//                 placeholder="Enter password"
//                 secureTextEntry={!isPasswordVisible}
//                 value={password}
//                 onChangeText={setPassword}
//                 placeholderTextColor="#A9A9A9"
//               />
//               <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
//                 <Ionicons
//                   name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
//                   size={20}
//                   color="#666"
//                 />
//               </TouchableOpacity>
//             </View>

//             {/* Remember Me */}
//             <TouchableOpacity
//               style={styles.checkboxContainer}
//               onPress={() => setRememberMe(!rememberMe)}
//             >
//               <Ionicons
//                 name={rememberMe ? 'checkbox-outline' : 'square-outline'}
//                 size={22}
//                 color={rememberMe ? '#004e82' : '#666'}
//               />
//               <Text style={styles.rememberMeText}>Remember Me</Text>
//             </TouchableOpacity>

//             {/* Login Button */}
//             <TouchableOpacity onPress={handleLogin} disabled={isLoading}>
//               <LinearGradient
//                 colors={['#004e82', '#3f73b9']}
//                 style={[styles.loginButton, isLoading && { opacity: 0.8 }]}
//               >
//                 <Text style={styles.loginButtonText}>
//                   {isLoading ? 'Logging in...' : 'Login'}
//                 </Text>
//                 {!isLoading && <Ionicons name="chevron-forward" size={18} color="white" />}
//               </LinearGradient>
//             </TouchableOpacity>

//             {/* Footer */}
//             <View style={styles.footerContainer}>
//               <Text style={styles.footerText}>
//                 By continuing, you agree to our{' '}
//                 <Text style={styles.footerLink}>Terms & Conditions</Text>
//               </Text>
//               <Text style={styles.footerText}>
//                 and <Text style={styles.footerLink}>Privacy Policy</Text>
//               </Text>
//             </View>

//           </ScrollView>
//         </View>

//       </SafeAreaView>

//       {/* Custom Toast for Error */}
//       <CustomToast 
//         message={toastMessage}
//         visible={toastVisible}
//         onHide={hideToast}
//         type={toastType}
//       />

//       {/* ====================== RED LOADER ON SUCCESS ====================== */}
//       {isLoading && (
//         <View style={styles.loaderOverlay}>
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#3f73b9" />
//             <Text style={styles.loaderText}>Logging you in...</Text>
//           </View>
//         </View>
//       )}

//     </CommonScreen>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   header: {
//     paddingTop: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   formContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//     borderTopLeftRadius: 35,
//     borderTopRightRadius: 35,
//   },
//   formContent: {
//     padding: 25,
//   },
//   welcomeTitle: {
//     color: '#333',
//     fontSize: 26,
//     fontWeight: '700',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   welcomeSubTitle: {
//     color: '#666',
//     fontSize: 15,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   inputLabel: {
//     color: '#333',
//     fontSize: 14,
//     fontWeight: '600',
//     marginBottom: 6,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F7F8FA',
//     borderWidth: 1,
//     borderColor: '#E8EBF0',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     marginBottom: 18,
//     height: 48,
//   },
//   inputIcon: {
//     marginRight: 10,
//   },
//   inputText: {
//     flex: 1,
//     color: '#333',
//     fontSize: 15,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   rememberMeText: {
//     color: '#666',
//     fontSize: 14,
//     marginLeft: 10,
//   },
//   loginButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 25,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 17,
//     fontWeight: '700',
//     marginRight: 8,
//   },
//   footerContainer: {
//     alignItems: 'center',
//   },
//   footerText: {
//     color: '#666',
//     fontSize: 13,
//     textAlign: 'center',
//   },
//   footerLink: {
//     color: '#333',
//     fontWeight: '700',
//   },

//   /* ================== RED LOADER STYLES ================== */
//   loaderOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 10000,
//   },
//   loaderContainer: {
//     backgroundColor: 'white',
//     padding: 30,
//     borderRadius: 20,
//     alignItems: 'center',
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//   },
//   loaderText: {
//     marginTop: 15,
//     color: '#333',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });


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
} from 'react-native';

import LoginLogo from "../Utility/Assets/logo.svg";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CommonScreen from '../Commonscreen/CommonScreen'; 
import { useNavigation } from '@react-navigation/native';
import CustomToast from '../Commonscreen/CustomToast';

const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  // Toast States
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'error' | 'success'>('error');

  // Loader State
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    const enteredEmail = email.trim().toLowerCase();
    const enteredPassword = password.trim();

    if (!isTermsAccepted) {
      setToastMessage('Please accept the Terms & Conditions to login');
      setToastType('error');
      setToastVisible(true);
      return;
    }

    if (enteredEmail === 'abhay' && enteredPassword === 'abhay') {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate('MainTabs');
      }, 1800);
    } else {
      setToastMessage('Incorrect Credentials');
      setToastType('error');
      setToastVisible(true);
    }
  };

  const hideToast = () => {
    setToastVisible(false);
  };

  return (
    <CommonScreen>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <ScrollView 
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContainer}
            bounces={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* HEADER (LOGO) */}
            <View style={styles.header}>
              <LoginLogo width={350} height={350} />
            </View>

            {/* FORM SECTION / BOTTOM SHEET */}
            <View style={[styles.formContainer, { paddingBottom: insets.bottom + 30 }]}>
              
              <Text style={styles.welcomeTitle}>Welcome Back!</Text>
              <Text style={styles.welcomeSubTitle}>Login to continue your journey</Text>

              {/* Email */}
              <Text style={styles.inputLabel}>Email / Student ID</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
                <TextInput
                  style={styles.inputText}
                  placeholder="Enter email or ID"
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              {/* Password */}
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
                <TextInput
                  style={[styles.inputText, { flex: 1 }]}
                  placeholder="Enter password"
                  secureTextEntry={!isPasswordVisible}
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor="#A9A9A9"
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <Ionicons
                    name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                    size={20}
                    color="#666"
                  />
                </TouchableOpacity>
              </View>

              {/* Remember Me */}
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <Ionicons
                  name={rememberMe ? 'checkbox-outline' : 'square-outline'}
                  size={22}
                  color={rememberMe ? '#004e82' : '#666'}
                />
                <Text style={styles.rememberMeText}>Remember Me</Text>
              </TouchableOpacity>

              {/* Login Button */}
              <TouchableOpacity onPress={handleLogin} disabled={isLoading}>
                <LinearGradient
                  colors={['#004e82', '#3f73b9']}
                  style={[styles.loginButton, isLoading && { opacity: 0.8 }]}
                >
                  <Text style={styles.loginButtonText}>
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Text>
                  {!isLoading && <Ionicons name="chevron-forward" size={18} color="white" />}
                </LinearGradient>
              </TouchableOpacity>

              {/* Terms & Conditions Checkbox Footer */}
              <View style={styles.footerContainer}>
                <TouchableOpacity 
                  style={styles.termsRow} 
                  onPress={() => setIsTermsAccepted(!isTermsAccepted)}
                  activeOpacity={0.8}
                >
                  <Ionicons
                    name={isTermsAccepted ? 'checkbox-outline' : 'square-outline'}
                    size={20}
                    color={isTermsAccepted ? '#004e82' : '#666'}
                  />
                  <Text style={styles.footerText}>
                    {'  '}I agree to the{' '}
                    <Text style={styles.footerLink}>Terms & Conditions</Text>
                    {' '}and{' '}
                    <Text style={styles.footerLink}>Privacy Policy</Text>
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>

      {/* Custom Toast */}
      <CustomToast 
        message={toastMessage}
        visible={toastVisible}
        onHide={hideToast}
        type={toastType}
      />

      {/* Loader Overlay */}
      {isLoading && (
        <View style={styles.loaderOverlay}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#3f73b9" />
            <Text style={styles.loaderText}>Logging you in...</Text>
          </View>
        </View>
      )}

    </CommonScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    height: 240,                 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -45,              
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 35,
  },
  welcomeTitle: {
    color: '#333',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  welcomeSubTitle: {
    color: '#666',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputLabel: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
    borderWidth: 1,
    borderColor: '#E8EBF0',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 18,
    height: 52,
  },
  inputIcon: {
    marginRight: 10,
  },
  inputText: {
    flex: 1,
    color: '#333',
    fontSize: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  rememberMeText: {
    color: '#666',
    fontSize: 14,
    marginLeft: 10,
  },
  loginButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    marginBottom: 25,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 8,
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  footerText: {
    color: '#666',
    fontSize: 13,
    textAlign: 'center',
  },
  footerLink: {
    color: '#333',
    fontWeight: '700',
  },
  loaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
  },
  loaderContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  loaderText: {
    marginTop: 15,
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});
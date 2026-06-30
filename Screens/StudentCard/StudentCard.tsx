import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'; // Added navigation hook

// SVG Imports
import Logo from "../Utility/Assets/logo.svg";
import Boy from "../Utility/Assets/boy.svg";
import BG from "../Utility/Assets/bg.svg";

const { width } = Dimensions.get('window');

const StudentCard = () => {
  const navigation = useNavigation(); // Initializing navigation

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#A11C3A" />
      
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          {/* Functional Go Back Button */}
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" size={28} color="white" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Digital Student ID</Text>
          
          <TouchableOpacity>
            <MaterialCommunityIcons name="share-variant" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Unified ID Card */}
          <View style={styles.idCard}>
            {/* 1. Header Section */}
            <View style={styles.idCardHeader}>
              <View style={styles.bgWrapper}>
                <BG width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
              </View>
              <View style={styles.logoWrapper}>
                <Logo width={150} height={32} />
              </View>
            </View>
            
            {/* 2. Primary Body Section (Photo & Main Info) */}
            <View style={styles.idCardBody}>
              <View style={styles.photoContainer}>
                <View style={styles.photoInner}>
                  <Boy width="100%" height="100%" />
                </View>
                <View style={styles.verifiedBadge}>
                  <MaterialCommunityIcons name="check-decagram" size={18} color="#4CAF50" />
                </View>
              </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.nameText}>Abhay kumar</Text>
                <Text style={styles.courseText}>MBA Business Administration</Text>
                <View style={styles.campusBadge}>
                  <Text style={styles.campusText}>Sydney Central Campus</Text>
                </View>
              </View>
            </View>

            {/* 3. Integrated Meta Data (Internal Card Details) */}
            <View style={styles.internalDetails}>
               <View style={styles.detailRow}>
                  <MaterialCommunityIcons name="email-outline" size={14} color="#666" />
                  <Text style={styles.internalValue}>sakil.m@student.ubss.edu.au</Text>
               </View>
               <View style={styles.rowSplit}>
                  <View style={styles.detailRow}>
                    <MaterialCommunityIcons name="calendar-check" size={14} color="#666" />
                    <Text style={styles.internalValue}>Enrolled: Mar 2024</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <MaterialCommunityIcons name="map-marker-radius" size={14} color="#666" />
                    <Text style={styles.internalValue}>Library: Level 10</Text>
                  </View>
               </View>
            </View>

            {/* 4. Footer Section (ID & QR) */}
            <View style={styles.cardFooter}>
              <View style={styles.footerLeft}>
                <Text style={styles.idLabel}>STUDENT ID</Text>
                <Text style={styles.idNumber}>ID-1245678</Text>
                <Text style={styles.expiryText}>VALID THRU: 12/2027</Text>
              </View>
              
              <View style={styles.qrContainer}>
                <View style={styles.qrBox}>
                   <MaterialCommunityIcons name="qrcode" size={48} color="#222" />
                </View>
                <Text style={styles.qrLabel}>SECURE VERIFY</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.downloadBtn}>
            <MaterialCommunityIcons name="download" size={20} color="white" />
            <Text style={styles.downloadBtnText}>Save to Device</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#3f73b9' },
  safeArea: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '700' },
  backButton: { padding: 5, marginLeft: -5 },
  
  content: { 
    flex: 1, 
    backgroundColor: '#F4F5F7', 
    borderTopLeftRadius: 35, 
    borderTopRightRadius: 35, 
    paddingTop: 60,
    alignItems: 'center' 
  },

  idCard: { 
    backgroundColor: 'white', 
    width: width - 35,
    borderRadius: 22, 
    elevation: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 15,
    overflow: 'visible',
    paddingBottom: 20,
  },
  idCardHeader: { 
    height: 65, 
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    overflow: 'hidden', 
  },
  bgWrapper: { ...StyleSheet.absoluteFillObject },
  logoWrapper: {
    position: 'absolute',
    top: 0,
    right: 15,
    bottom: 0,
    justifyContent: 'center',
  },
  idCardBody: { 
    flexDirection: 'row', 
    paddingHorizontal: 20,
    paddingTop: 10,
    minHeight: 65,
  },
  photoContainer: { 
    width: 86, 
    height: 86, 
    borderRadius: 43, 
    backgroundColor: 'white', 
    borderWidth: 3, 
    borderColor: 'white', 
    position: 'absolute',
    top: -45, 
    left: 20,
    elevation: 8,
    zIndex: 10,
  },
  photoInner: { flex: 1, borderRadius: 43, overflow: 'hidden' },
  verifiedBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 11,
  },
  detailsContainer: { marginLeft: 100, flex: 1 },
  nameText: { fontSize: 17, fontWeight: '800', color: '#222' },
  courseText: { fontSize: 12, color: '#666', marginTop: 2 },
  campusBadge: { 
    backgroundColor: '#F0F0F0', 
    alignSelf: 'flex-start', 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: 4, 
    marginTop: 6 
  },
  campusText: { fontSize: 10, color: '#444', fontWeight: '600' },

  internalDetails: {
    paddingHorizontal: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    paddingVertical: 12,
  },
  detailRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 3 },
  rowSplit: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  internalValue: { fontSize: 11, color: '#444', marginLeft: 6, fontWeight: '500' },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  footerLeft: { flex: 1 },
  idLabel: { fontSize: 9, color: '#999', fontWeight: '800', letterSpacing: 1 },
  idNumber: { fontSize: 18, fontWeight: '800', color: '#1c5aa1', marginVertical: 2 },
  expiryText: { fontSize: 10, color: '#666', fontWeight: '700' },

  qrContainer: { alignItems: 'center' },
  qrBox: {
    padding: 6,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#F0F0F0',
    borderRadius: 10,
  },
  qrLabel: { fontSize: 8, color: '#1c5aa1', marginTop: 4, fontWeight: '900' },

  downloadBtn: {
    flexDirection: 'row',
    backgroundColor: '#1c5aa1',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 40,
    alignItems: 'center',
    elevation: 5,
  },
  downloadBtnText: { color: 'white', fontWeight: '700', marginLeft: 10, fontSize: 15 }
});
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, BorderRadius, Shadows } from '../DesignSystem';
import { ShareVariant, Download, ChevronRight } from '../SvgIcons';
import { useAuth } from '../Services/AuthContext';
import { getStudentInfo } from '../Services/api';
import QRCode from 'react-native-qrcode-svg';

const StudentIDScreen = ({ navigation }: any) => {
  const { studentId, studentData, authToken, isLoggedIn } = useAuth();
  const [studentInfo, setStudentInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setLoading(false);
      return;
    }
    fetchStudentInfo();
  }, [isLoggedIn, studentId]);

  const fetchStudentInfo = async () => {
    setLoading(true);
    setError(null);
    console.log('fetchStudentInfo called with studentId:', studentId);
    
    const data = await getStudentInfo(studentId!);
    
    if (data) {
      console.log('Student info data received:', JSON.stringify(data));
      setStudentInfo(data);
    } else {
      // API failed - use locally stored student data as fallback
      console.log('API failed, using cached data');
      if (studentData) {
        const cached = studentData as any;
        setStudentInfo({
          firstname: cached.firstName,
          surname: cached.lastName,
          id: cached.id,
          email: cached.email,
          mobilenumber: cached.mobilenumber || cached.mobile || cached.phone || '',
          campus: cached.campus || '',
          qualification: cached.qualification || cached.course || cached.program || '',
        });
      }
      setError('Could not fetch latest data. Showing cached info.');
    }
    setLoading(false);
  };

  // If not logged in, show login prompt
  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <View style={styles.centerContent}>
            <View style={styles.lockIcon}>
              <Text style={styles.lockEmoji}>🔒</Text>
            </View>
            <Text style={styles.lockTitle}>Sign In Required</Text>
            <Text style={styles.lockSubtitle}>
              Please sign in to view your Student ID card
            </Text>
            <TouchableOpacity
              style={styles.signInPromptButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.signInPromptText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <View style={styles.centerContent}>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={styles.loadingText}>Loading your ID card...</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  const getDisplayName = (info: any) => {
    if (!info) return 'Student';
    const firstName = info.firstname || info.firstName || info.first_name || info.givenName || '';
    const lastName = info.surname || info.lastName || info.last_name || info.familyName || '';
    if (firstName || lastName) {
      return `${firstName} ${lastName}`.trim();
    }
    return 'Student';
  };

  const getDisplayId = (info: any) => {
    return info?.id || info?.studentId || info?.student_number || info?.studentNumber || studentId || '';
  };

  const getDisplayEmail = (info: any) => {
    return info?.email || info?.Email || info?.mail || info?.studentEmail || '';
  };

  const getDisplayMobile = (info: any) => {
    return info?.mobilenumber || info?.mobileNumber || info?.mobile || info?.Mobile || info?.phone || info?.Phone || info?.contactNumber || '';
  };

  const initials = studentInfo
    ? `${((studentInfo.firstname || studentInfo.firstName || '')[0])}${((studentInfo.surname || studentInfo.lastName || '')[0])}`
    : 'AK';

  // Build QR code data from student info
  const qrData = studentInfo
    ? JSON.stringify({
        id: getDisplayId(studentInfo),
        name: getDisplayName(studentInfo),
        email: getDisplayEmail(studentInfo),
      })
    : 'UBSS-STUDENT';

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Student ID</Text>
          </View>

          {/* Error Banner */}
          {error && (
            <View style={styles.errorBanner}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {/* ID Card */}
          <View style={styles.idCard}>
            {/* Card Header with Logo */}
            <View style={styles.cardHeaderRow}>
              <View style={styles.cardLogoSection}>
                <Text style={styles.cardLogoText}>UBSS</Text>
                <Text style={styles.cardLogoSubtext}>Universal Bussiness School</Text>
              </View>
              <View style={styles.cardTypeBadge}>
                <Text style={styles.cardTypeText}>STUDENT</Text>
              </View>
            </View>

            {/* Divider */}
            <View style={styles.cardDivider} />

            {/* Photo + Name + ID Row */}
            <View style={styles.photoRow}>
              <View style={styles.photoContainer}>
                {studentInfo?.id && !photoError ? (
                  <Image
                    source={{ uri: `https://my.gca.edu.au/Student/StudentPhotos/${studentInfo.id}.jpg` }}
                    style={styles.photoImage}
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <Text style={styles.photoInitials}>{initials}</Text>
                )}
              </View>
              <View style={styles.nameSection}>
                <Text style={styles.fullName}>{getDisplayName(studentInfo)}</Text>
                <Text style={styles.studentIdText}>{getDisplayId(studentInfo)}</Text>
                <Text style={styles.qualificationText}>
                  {studentInfo?.qualification || studentInfo?.course || studentInfo?.program || ''}
                </Text>
              </View>
            </View>

            {/* Contact Details Section */}
            <View style={styles.contactSection}>
              {/* <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>📧 Email</Text>
                <Text style={styles.contactValue}>{getDisplayEmail(studentInfo) || 'N/A'}</Text>
              </View>
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>📞 Mobile</Text>
                <Text style={styles.contactValue}>{getDisplayMobile(studentInfo) || 'N/A'}</Text>
              </View> */}
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>📍 Campus</Text>
                <Text style={styles.contactValue}>{studentInfo?.campus || 'N/A'}</Text>
              </View>
            </View>

            {/* QR Code Section */}
            {/* <View style={styles.qrSection}>
              <View style={styles.qrWrapper}>
                <QRCode
                  value={qrData}
                  size={90}
                  backgroundColor="white"
                  color="#1a365d"
                />
              </View>
              <View style={styles.qrInfo}>
                <Text style={styles.qrTitle}>Digital Verification</Text>
                <Text style={styles.qrDesc}>Scan to verify student identity</Text>
              </View>
            </View> */}
          </View>

          {/* Action Items */}
          {/* <View style={styles.actionsList}>
            <TouchableOpacity style={styles.actionItem}>
              <ShareVariant color="#1a365d" size={22} />
              <Text style={styles.actionText}>Share Card</Text>
              <ChevronRight color="#666" size={22} />
            </TouchableOpacity>
            <View style={styles.actionDivider} />
            <TouchableOpacity style={styles.actionItem}>
              <Download color="#1a365d" size={22} />
              <Text style={styles.actionText}>Order Physical Copy</Text>
              <ChevronRight color="#666" size={22} />
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  lockIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F3E5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  lockEmoji: {
    fontSize: 36,
  },
  lockTitle: {
    fontSize: Typography.sizes['2xl'],
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  lockSubtitle: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  signInPromptButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: BorderRadius.lg,
    ...Shadows.md,
  },
  signInPromptText: {
    color: Colors.white,
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.bold,
  },
  loadingText: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondary,
    marginTop: 12,
  },
  errorBanner: {
    backgroundColor: '#FFF3CD',
    borderWidth: 1,
    borderColor: '#FFEAA7',
    borderRadius: BorderRadius.lg,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 16,
  },
  errorText: {
    fontSize: Typography.sizes.sm,
    color: '#856404',
    fontWeight: Typography.weights.medium,
  },
  header: {
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: Typography.sizes['2xl'],
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
  },
  idCard: {
    backgroundColor: '#1a365d',
    borderRadius: BorderRadius['2xl'],
    padding: 20,
    marginBottom: 24,
    ...Shadows.lg,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardLogoSection: {
    flex: 1,
  },
  cardLogoText: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
    letterSpacing: 2,
  },
  cardLogoSubtext: {
    fontSize: Typography.sizes.xs,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 2,
  },
  cardTypeBadge: {
    backgroundColor: '#e01842',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  cardTypeText: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
    letterSpacing: 1,
  },
  cardDivider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginVertical: 16,
  },
  photoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  photoContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  photoImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  photoInitials: {
    fontSize: 24,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
  },
  nameSection: {
    flex: 1,
  },
  fullName: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    color: Colors.white,
  },
  studentIdText: {
    fontSize: Typography.sizes.sm,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2,
    fontFamily: 'monospace',
  },
  qualificationText: {
    fontSize: Typography.sizes.sm,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 2,
  },
  contactSection: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: BorderRadius.lg,
    padding: 14,
    marginBottom: 16,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  contactLabel: {
    fontSize: Typography.sizes.sm,
    color: 'rgba(255,255,255,0.6)',
    fontWeight: Typography.weights.medium,
  },
  contactValue: {
    fontSize: Typography.sizes.sm,
    color: Colors.white,
    fontWeight: Typography.weights.medium,
    maxWidth: '60%',
    textAlign: 'right',
  },
  qrSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    padding: 14,
  },
  qrWrapper: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
  },
  qrInfo: {
    flex: 1,
    marginLeft: 14,
  },
  qrTitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
  },
  qrDesc: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  actionsList: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    ...Shadows.sm,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  actionText: {
    flex: 1,
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.medium,
    color: Colors.textPrimary,
    marginLeft: 14,
  },
  actionDivider: {
    height: 1,
    backgroundColor: Colors.borderLight,
    marginHorizontal: 18,
  },
});

export default StudentIDScreen;

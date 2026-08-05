import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonScreen from '../Commonscreen/CommonScreen';
import { useAuth } from '../NewScreens/Services/AuthContext';
import { getTimetable } from '../NewScreens/Services/api';

const TimetableScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { studentId, isLoggedIn } = useAuth();
  const [classData, setClassData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!isLoggedIn) {
      setLoading(false);
      setErrorMessage('Please sign in to view your timetable');
      setShowErrorModal(true);
      return;
    }
    fetchTimetable();
  }, [isLoggedIn, studentId]);

  const fetchTimetable = async () => {
    setLoading(true);
    const data = await getTimetable(studentId!);

    if (data) {
      console.log('Timetable response:', JSON.stringify(data));

      // Check for error messages from API
      if (data.ErrorMessage && data.ErrorMessage !== '') {
        setErrorMessage(data.ErrorMessage);
        setShowErrorModal(true);
        setClassData([]);
      } else if (data.ResultStatus === 7) {
        setErrorMessage('Current enrolment not found');
        setShowErrorModal(true);
        setClassData([]);
      } else if (data.StudentTimetable && Array.isArray(data.StudentTimetable)) {
        // Map API response to our UI format
        const mapped = data.StudentTimetable.map((item, index) => ({
          id: String(index + 1),
          time: item.StartTime && item.EndTime
            ? `${formatTime(item.StartTime)} - ${formatTime(item.EndTime)}`
            : 'Time TBD',
          title: item.SubjectName || item.Subject || 'Class',
          type: item.ClassType || item.Type || 'Face to Face',
          room: item.Room || item.Location || 'Room TBD',
          teacher: item.Teacher || item.Staff || item.Lecturer || 'Staff',
        }));
        setClassData(mapped);
        setShowErrorModal(false);
      } else {
        // No timetable data available
        setErrorMessage('No timetable data available');
        setShowErrorModal(true);
        setClassData([]);
      }
    } else {
      setErrorMessage('Failed to load timetable. Please try again.');
      setShowErrorModal(true);
      setClassData([]);
    }
    setLoading(false);
  };

  const formatTime = (timeStr: string) => {
    if (!timeStr) return '';
    // Handle various time formats
    try {
      const [hours, minutes] = timeStr.split(':');
      const h = parseInt(hours, 10);
      const ampm = h >= 12 ? 'PM' : 'AM';
      const hour12 = h % 12 || 12;
      return `${hour12}:${minutes} ${ampm}`;
    } catch {
      return timeStr;
    }
  };

  const days = [
    { date: '13', day: 'Today', active: true },
    { date: '14', day: 'Tue', active: false },
    { date: '15', day: 'Tue', active: false },
    { date: '16', day: 'Tue', active: false },
    { date: '17', day: 'Tue', active: false },
    { date: '18', day: 'Tue', active: false },
  ];

  const renderClassCard = ({ item }) => (
    <View style={styles.classCard}>
      {/* Time Badge */}
      <View style={styles.timeBadge}>
        <MaterialCommunityIcons name="clock-outline" size={16} color="#E01842" />
        <Text style={styles.timeText}>{item.time}</Text>
      </View>

      {/* Course Title */}
      <Text style={styles.courseTitle}>{item.title}</Text>

      {/* Info Row */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="account-group" size={18} color="#666" />
          <Text style={styles.infoText}>{item.type}</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="door-open" size={18} color="#666" />
          <Text style={styles.infoText}>{item.room}</Text>
        </View>
      </View>

      {/* Teacher Footer */}
      <View style={styles.teacherFooter}>
        <View style={styles.teacherAvatar}>
           <MaterialCommunityIcons name="account" size={18} color="#666" />
        </View>
        <Text style={styles.teacherName}>{item.teacher}</Text>
      </View>
    </View>
  );

  return (
    <CommonScreen>
      <SafeAreaView style={styles.safeHeader} edges={['top']}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Timetable</Text>
          <View style={{ width: 28 }} />
        </View>
      </SafeAreaView>

      <View style={styles.whiteSheet}>
        {loading ? (
          <View style={styles.centerContent}>
            <ActivityIndicator size="large" color="#E01842" />
            <Text style={styles.loadingText}>Loading timetable...</Text>
          </View>
        ) : classData.length > 0 ? (
          <>
            <View style={styles.monthSelector}>
              <TouchableOpacity style={styles.arrowBtn}>
                <MaterialCommunityIcons name="chevron-left" size={24} color="#666" />
              </TouchableOpacity>
              <Text style={styles.monthText}>April 2026</Text>
              <TouchableOpacity style={styles.arrowBtn}>
                <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dateList}>
                {days.map((item, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={[styles.dateCard, item.active && styles.dateCardActive]}
                  >
                    <Text style={[styles.dateNum, item.active && styles.textWhite]}>{item.date}</Text>
                    <Text style={[styles.dayText, item.active && styles.textWhite]}>{item.day}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <FlatList
              data={classData}
              keyExtractor={(item) => item.id}
              renderItem={renderClassCard}
              contentContainerStyle={[styles.scrollPadding, { paddingBottom: insets.bottom + 30 }]}
              showsVerticalScrollIndicator={false}
            />
          </>
        ) : null}
      </View>

      {/* Error / Info Modal */}
      <Modal
        visible={showErrorModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowErrorModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <MaterialCommunityIcons
                name={!isLoggedIn ? "lock" : "alert-circle-outline"}
                size={48}
                color="#E01842"
              />
            </View>
            <Text style={styles.modalTitle}>
              {!isLoggedIn ? 'Sign In Required' : 'No Timetable Available'}
            </Text>
            <Text style={styles.modalMessage}>{errorMessage}</Text>
            {!isLoggedIn ? (
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setShowErrorModal(false);
                  navigation.navigate('Login');
                }}
              >
                <Text style={styles.modalButtonText}>Sign In</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonSecondary]}
                onPress={() => setShowErrorModal(false)}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </CommonScreen>
  );
};

export default TimetableScreen;

const styles = StyleSheet.create({
  safeHeader: { paddingHorizontal: 20, paddingBottom: 15 },
  headerContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '700' },
  whiteSheet: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 35, borderTopRightRadius: 35 },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#666',
  },
  monthSelector: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 15 },
  arrowBtn: { backgroundColor: '#F0F0F0', borderRadius: 5, padding: 2, marginHorizontal: 15 },
  monthText: { fontSize: 16, color: '#333', fontWeight: '500' },
  dateList: { paddingHorizontal: 20, paddingBottom: 10 },
  dateCard: { width: 55, height: 65, borderRadius: 8, borderWidth: 1, borderColor: '#DDD', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  dateCardActive: { backgroundColor: '#E01842', borderColor: '#E01842' },
  dateNum: { fontSize: 18, fontWeight: '700', color: '#333' },
  dayText: { fontSize: 12, color: '#666' },
  textWhite: { color: 'white' },
  scrollPadding: { padding: 20, paddingBottom: 30 },
  classCard: { backgroundColor: 'white', borderRadius: 12, borderWidth: 1, borderColor: '#EEE', marginBottom: 15, overflow: 'hidden', elevation: 2 },
  timeBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FCECEC', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 15, margin: 15 },
  timeText: { color: '#E01842', fontSize: 12, fontWeight: '700', marginLeft: 5 },
  courseTitle: { fontSize: 14, fontWeight: '600', color: '#333', paddingHorizontal: 15, lineHeight: 20 },
  infoRow: { flexDirection: 'row', padding: 15 },
  infoItem: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
  infoText: { fontSize: 13, color: '#666', marginLeft: 6 },
  teacherFooter: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FCECEC', padding: 10, paddingHorizontal: 15 },
  teacherAvatar: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#DDD', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  teacherName: { fontSize: 13, color: '#333', fontWeight: '500' },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    marginHorizontal: 30,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  modalIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FCE4EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  modalButton: {
    backgroundColor: '#E01842',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
    minWidth: 120,
    alignItems: 'center',
  },
  modalButtonSecondary: {
    backgroundColor: '#1a365d',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

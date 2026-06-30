import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonScreen from '../Commonscreen/CommonScreen';

const TimetableScreen = ({ navigation }) => {
  const days = [
    { date: '13', day: 'Today', active: true },
    { date: '14', day: 'Tue', active: false },
    { date: '15', day: 'Tue', active: false },
    { date: '16', day: 'Tue', active: false },
    { date: '17', day: 'Tue', active: false },
    { date: '18', day: 'Tue', active: false },
  ];

  // DUMMY CONTENT: Matching your UI image
  const classData = [
    {
      id: '1',
      time: '11:45 Am - 2:45 Pm',
      title: 'Financial Statements and Investment Analysis (BAP42 A)',
      type: 'Face to Face',
      room: 'Room No. 1012',
      teacher: 'Dimuthu Ekanayake',
    },
    {
      id: '2',
      time: '11:45 Am - 2:45 Pm',
      title: 'Financial Statements and Investment Analysis (BAP42 A)',
      type: 'Face to Face',
      room: 'Room No. 1012',
      teacher: 'Dimuthu Ekanayake',
    },
    {
      id: '3',
      time: '11:45 Am - 2:45 Pm',
      title: 'Financial Statements and Investment Analysis (BAP42 A)',
      type: 'Face to Face',
      room: 'Room No. 1012',
      teacher: 'Dimuthu Ekanayake',
    },
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
          contentContainerStyle={styles.scrollPadding}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </CommonScreen>
  );
};

export default TimetableScreen;

const styles = StyleSheet.create({
  safeHeader: { paddingHorizontal: 20, paddingBottom: 15 },
  headerContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '700' },
  whiteSheet: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 35, borderTopRightRadius: 35 },
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
  teacherName: { fontSize: 13, color: '#333', fontWeight: '500' }
});
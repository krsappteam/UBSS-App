// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   StatusBar,
//   Dimensions,
//   FlatList,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// // SVG Imports
// import WhatsAppIcon from "../Utility/Assets/whatsAppicon.svg";
// import Logo from "../Utility/Assets/logo.svg";
// import Boy from "../Utility/Assets/boy.svg";
// import BG from "../Utility/Assets/bg.svg";

// const { width } = Dimensions.get('window');
// const SCREEN_PADDING = 20;
// const GAP = 12; // Reduced gap for a tighter look
// const ITEM_WIDTH = (width - (SCREEN_PADDING * 2) - GAP) / 2;

// const HomeScreen = () => {
//   const gridItems = [
//     { id: '1', label: 'Timetable', icon: 'clock-outline', color: '#3F51B5', bg: '#E8EAF6' },
//     { id: '2', label: 'Academic Calendar', icon: 'calendar-month', color: '#03A9F4', bg: '#E1F5FE' },
//     { id: '3', label: 'Courses', icon: 'book-open-variant', color: '#FF9800', bg: '#FFF3E0' },
//     { id: '4', label: 'Student Hub', icon: 'account-group', color: '#4CAF50', bg: '#E8F5E9' },
//     { id: '5', label: 'Student Services', icon: 'school', color: '#00BCD4', bg: '#E0F7FA' },
//     { id: '6', label: 'About', icon: 'information', color: '#E91E63', bg: '#FCE4EC' },
//     { id: '7', label: 'Policies & Procedures', icon: 'file-document-outline', color: '#9C27B0', bg: '#F3E5F5' },
//     { id: '8', label: 'Faq', icon: 'help-circle', color: '#2196F3', bg: '#E3F2FD' },
//   ];



//   return (
//     <View style={styles.mainContainer}>
//       <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
//       <SafeAreaView style={styles.topArea} edges={['top']}>
//         {/* Navbar */}
//         <View style={styles.navbar}>
//           <View style={styles.navLeft}>
//             <TouchableOpacity><MaterialCommunityIcons name="menu" size={32} color="white" /></TouchableOpacity>
//             <Text style={styles.navTitle}>UBSS University</Text>
//           </View>
//           <View style={styles.navRight}>
//             <TouchableOpacity style={styles.navIcon}>
//               <MaterialCommunityIcons name="bell" size={26} color="white" />
//               <View style={styles.notificationDot} />
//             </TouchableOpacity>
//             {/* FIX: WhatsApp Icon with better scaling */}
//             <TouchableOpacity style={styles.whatsappBtn}>
//               <MaterialCommunityIcons name="whatsapp" size={26} color="white" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* ID Card */}
//         <View style={styles.idCard}>
//           <View style={styles.idCardHeader}>
//             <View style={styles.bgWrapper}>
//                <BG width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
//             </View>
//             <View style={styles.logoWrapper}>
//                <Logo width={180} height={38} />
//             </View>
//           </View>
          
//           <View style={styles.idCardBody}>
//             <View style={styles.photoContainer}>
//               <View style={styles.photoInner}>
//                 <Boy width="100%" height="100%" />
//               </View>
//             </View>

//             <View style={styles.detailsContainer}>
//               <Text style={styles.detailText}><Text style={styles.boldLabel}>Name     :</Text> Abhay kumar</Text>
//               <Text style={styles.detailText}><Text style={styles.boldLabel}>Course   :</Text> Independent MBA Business</Text>
//               <Text style={styles.detailText}><Text style={styles.boldLabel}>Campus :</Text> Sydney</Text>
//             </View>
//           </View>

//           <View style={styles.idBadge}>
//             <Text style={styles.idBadgeText}>ID-1245678</Text>
//           </View>
//         </View>
//       </SafeAreaView>

//       {/* Grid List */}
//       <View style={styles.whiteSheet}>
//         <View style={styles.sheetHeader}>
//       <Text style={styles.universityText}>My University</Text>
//     </View>
//         <FlatList
//           data={gridItems}
//           keyExtractor={(item) => item.id}
//           numColumns={2}
//           contentContainerStyle={styles.listContent}
//           columnWrapperStyle={styles.row}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={[styles.gridCard, { backgroundColor: item.bg }]} activeOpacity={0.8}>
//               <View style={styles.iconBox}>
//                 <MaterialCommunityIcons name={item.icon} size={26} color={item.color} />
//               </View>
//               <Text style={styles.gridLabel}>{item.label}</Text>
//             </TouchableOpacity>
//           )}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>

//       {/* Footer */}
//       <View style={styles.tabBar}>
//         <TouchableOpacity style={styles.tabItem}>
//           <MaterialCommunityIcons name="home" size={28} color="#A11C3A" />
//           <Text style={[styles.tabLabel, {color: '#A11C3A', fontWeight: '700'}]}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.tabItem}>
//           <MaterialCommunityIcons name="account-details-outline" size={28} color="#666" />
//           <Text style={styles.tabLabel}>Student Id</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.tabItem}>
//           <MaterialCommunityIcons name="chat-outline" size={28} color="#666" />
//           <Text style={styles.tabLabel}>Live Chat</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   mainContainer: { flex: 1, backgroundColor: '#A11C3A' },
//   topArea: { paddingBottom: 15 },
//   navbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 },
//   navLeft: { flexDirection: 'row', alignItems: 'center' },
//   navTitle: { color: 'white', fontSize: 20, fontWeight: '700', marginLeft: 10 },
//   navRight: { flexDirection: 'row', alignItems: 'center' },
//   navIcon: { marginRight: 15, position: 'relative' },
//   notificationDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'white', position: 'absolute', top: 0, right: 0 },
//   whatsappBtn: {
//     padding: 2, // Gives the SVG space to breathe
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  
//   idCard: { 
//     backgroundColor: 'white', 
//     marginHorizontal: 20, 
//     borderRadius: 15, 
//     height: 180, 
//     marginTop: 10, 
//     elevation: 8,
//     overflow: 'visible',
//   },
//   idCardHeader: { 
//     height: 70, 
//     width: '100%',
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     overflow: 'hidden', 
//     position: 'relative',
//   },
//   bgWrapper: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   logoWrapper: {
//     position: 'absolute',
//     top: 0,
//     right: 15,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//   },
//   idCardBody: { 
//     flexDirection: 'row', 
//     paddingHorizontal: 15,
//     paddingTop: 10,
//   },
//   photoContainer: { 
//     width: 90, 
//     height: 90, 
//     borderRadius: 45, 
//     backgroundColor: 'white', 
//     borderWidth: 4, 
//     borderColor: 'white', 
//     position: 'absolute',
//     top: -45, 
//     left: 15,
//     zIndex: 10, 
//     elevation: 10,
//   },
//   photoInner: { flex: 1, borderRadius: 45, overflow: 'hidden' },
//   detailsContainer: { marginLeft: 100, flex: 1, paddingTop: 10 },
//   detailText: { fontSize: 12, color: '#333', marginBottom: 8 },
//   boldLabel: { fontWeight: '700', color: '#444' },
//   idBadge: { position: 'absolute', bottom: 30, left: 20, backgroundColor: '#f2f2f2', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 5 },
//   idBadgeText: { fontSize: 11, color: '#666', fontWeight: 'bold' },

//   whiteSheet: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 35, borderTopRightRadius: 35 },
//   sheetHeader: { alignItems: 'center', marginTop: 25, marginBottom: 15 },
//   universityText: { fontSize: 18, fontWeight: '700', color: '#333' },
//   listContent: { paddingHorizontal: 20, paddingBottom: 100 },
//   row: { justifyContent: 'space-between' },
  
//   // FIXED: Smaller Cards
//   gridCard: { 
//     width: ITEM_WIDTH, 
//     height: ITEM_WIDTH * 0.72, // Reduced from 0.85 for a slimmer profile
//     borderRadius: 12, 
//     marginBottom: GAP, 
//     alignItems: 'center', 
//     justifyContent: 'center', 
//     elevation: 2 
//   },
//   iconBox: { 
//     backgroundColor: 'white', 
//     padding: 10, // Reduced padding
//     borderRadius: 10, 
//     marginBottom: 6, 
//     elevation: 3 
//   },
//   gridLabel: { 
//     fontSize: 12, // Slightly smaller font for smaller card
//     fontWeight: '700', 
//     color: '#444', 
//     textAlign: 'center', 
//     paddingHorizontal: 5 
//   },

//   tabBar: { flexDirection: 'row', height: 75, backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#EEE', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', bottom: 0, width: '100%' },
//   tabItem: { alignItems: 'center' },
//   tabLabel: { fontSize: 11, color: '#666', marginTop: 4 }
// });





















import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  FlatList,
  Linking,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// SVG Imports
import WhatsAppIcon from "../Utility/Assets/whatsAppicon.svg";
import Logo from "../Utility/Assets/logo.svg";
import Boy from "../Utility/Assets/boy.svg";
import BG from "../Utility/Assets/bg.svg";

const { width } = Dimensions.get('window');
const SCREEN_PADDING = 20;
const GAP = 12;
const ITEM_WIDTH = (width - (SCREEN_PADDING * 2) - GAP) / 2;

const HomeScreen = () => {
  const navigation = useNavigation();

  const gridItems = [
    { id: '1', label: 'Timetable', icon: 'clock-outline', color: '#3F51B5', bg: '#E8EAF6', type: 'screen', destination: 'Timetable' },
    { id: '2', label: 'Academic Calendar', icon: 'calendar-month', color: '#03A9F4', bg: '#E1F5FE', type: 'link', destination: 'https://www.gca.edu.au/academic-calendar/' },
    { id: '3', label: 'Courses', icon: 'book-open-variant', color: '#FF9800', bg: '#FFF3E0', type: 'link', destination: 'https://www.gca.edu.au/courses/' },
    { id: '4', label: 'Student Hub', icon: 'account-group', color: '#4CAF50', bg: '#E8F5E9', type: 'link', destination: 'https://www.gca.edu.au/student-testimonials/' },
    { id: '5', label: 'Student Services', icon: 'school', color: '#00BCD4', bg: '#E0F7FA', type: 'link', destination: 'https://www.gca.edu.au/student-support/' },
    { id: '6', label: 'About', icon: 'information', color: '#E91E63', bg: '#FCE4EC', type: 'link', destination: 'https://www.gca.edu.au/about-gca/' },
    { id: '7', label: 'Policies & Procedures', icon: 'file-document-outline', color: '#9C27B0', bg: '#F3E5F5', type: 'link', destination: 'https://www.gca.edu.au/policies-and-procedures/' },
  ];

  const handlePress = async (item) => {
    if (item.type === 'screen') {
      try {
        navigation.navigate(item.destination);
      } catch (error) {
        Alert.alert("Navigation Error", `Screen "${item.destination}" not found.`);
      }
    } else if (item.type === 'link') {
      try {
        // We attempt to open the URL directly
        await Linking.openURL(item.destination);
      } catch (error) {
        Alert.alert("Error", "Could not open the webpage. Make sure a browser is installed.");
        console.error("Link Error:", error);
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <SafeAreaView style={styles.topArea} edges={['top']}>
        {/* Navbar */}
        <View style={styles.navbar}>
          <View style={styles.navLeft}>
            <TouchableOpacity><MaterialCommunityIcons name="menu" size={32} color="white" /></TouchableOpacity>
            <Text style={styles.navTitle}>UBSS University</Text>
          </View>
          <View style={styles.navRight}>
            <TouchableOpacity style={styles.navIcon}>
              <MaterialCommunityIcons name="bell" size={26} color="white" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.whatsappBtn}
              onPress={() => Linking.openURL('whatsapp://send?phone=YOUR_NUMBER')}
            >
              <MaterialCommunityIcons name="whatsapp" size={26} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ID Card */}
        <View style={styles.idCard}>
          <View style={styles.idCardHeader}>
            <View style={styles.bgWrapper}>
               <BG width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
            </View>
            <View style={styles.logoWrapper}>
               <Logo width={180} height={38} />
            </View>
          </View>
          
          <View style={styles.idCardBody}>
            <View style={styles.photoContainer}>
              <View style={styles.photoInner}>
                <Boy width="100%" height="100%" />
              </View>
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}><Text style={styles.boldLabel}>Name     :</Text> Abhay kumar</Text>
              <Text style={styles.detailText}><Text style={styles.boldLabel}>Course   :</Text> Independent MBA Business</Text>
              <Text style={styles.detailText}><Text style={styles.boldLabel}>Campus :</Text> Sydney</Text>
            </View>
          </View>

          <View style={styles.idBadge}>
            <Text style={styles.idBadgeText}>ID-1245678</Text>
          </View>
        </View>
      </SafeAreaView>

      {/* Grid List */}
      <View style={styles.whiteSheet}>
        <View style={styles.sheetHeader}>
          <Text style={styles.universityText}>My University</Text>
        </View>
        <FlatList
          data={gridItems}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={[styles.gridCard, { backgroundColor: item.bg }]} 
              activeOpacity={0.8}
              onPress={() => handlePress(item)}
            >
              <View style={styles.iconBox}>
                <MaterialCommunityIcons name={item.icon} size={26} color={item.color} />
              </View>
              <Text style={styles.gridLabel}>{item.label}</Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Footer */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <MaterialCommunityIcons name="home" size={28} color="#3f73b9" />
          <Text style={[styles.tabLabel, {color: '#3f73b9', fontWeight: '700'}]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => navigation.navigate('StudentId')}
        >
          <MaterialCommunityIcons name="account-details-outline" size={28} color="#666" />
          <Text style={styles.tabLabel}>Student Id</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => Linking.openURL('mailto:support@university.edu')}
        >
          <MaterialCommunityIcons name="chat-outline" size={28} color="#666" />
          <Text style={styles.tabLabel}>Live Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#3f73b9' },
  topArea: { paddingBottom: 15 },
  navbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 },
  navLeft: { flexDirection: 'row', alignItems: 'center' },
  navTitle: { color: 'white', fontSize: 20, fontWeight: '700', marginLeft: 10 },
  navRight: { flexDirection: 'row', alignItems: 'center' },
  navIcon: { marginRight: 15, position: 'relative' },
  notificationDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'white', position: 'absolute', top: 0, right: 0 },
  whatsappBtn: {
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idCard: { 
    backgroundColor: 'white', 
    marginHorizontal: 20, 
    borderRadius: 15, 
    height: 180, 
    marginTop: 10, 
    elevation: 8,
    overflow: 'visible',
  },
  idCardHeader: { 
    height: 70, 
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden', 
    position: 'relative',
  },
  bgWrapper: { ...StyleSheet.absoluteFillObject },
  logoWrapper: {
    position: 'absolute',
    top: 0,
    right: 15,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  idCardBody: { 
    flexDirection: 'row', 
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  photoContainer: { 
    width: 90, 
    height: 90, 
    borderRadius: 45, 
    backgroundColor: 'white', 
    borderWidth: 4, 
    borderColor: 'white', 
    position: 'absolute',
    top: -45, 
    left: 15,
    zIndex: 10, 
    elevation: 10,
  },
  photoInner: { flex: 1, borderRadius: 45, overflow: 'hidden' },
  detailsContainer: { marginLeft: 100, flex: 1, paddingTop: 10 },
  detailText: { fontSize: 12, color: '#333', marginBottom: 8 },
  boldLabel: { fontWeight: '700', color: '#444' },
  idBadge: { position: 'absolute', bottom: 30, left: 20, backgroundColor: '#f2f2f2', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 5 },
  idBadgeText: { fontSize: 11, color: '#666', fontWeight: 'bold' },

  whiteSheet: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 35, borderTopRightRadius: 35 },
  sheetHeader: { alignItems: 'center', marginTop: 25, marginBottom: 15 },
  universityText: { fontSize: 18, fontWeight: '700', color: '#333' },
  listContent: { paddingHorizontal: 20, paddingBottom: 100 },
  row: { justifyContent: 'space-between' },
  
  gridCard: { 
    width: ITEM_WIDTH, 
    height: ITEM_WIDTH * 0.72,
    borderRadius: 12, 
    marginBottom: GAP, 
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 2 
  },
  iconBox: { 
    backgroundColor: 'white', 
    padding: 10, 
    borderRadius: 10, 
    marginBottom: 6, 
    elevation: 3 
  },
  gridLabel: { 
    fontSize: 12, 
    fontWeight: '700', 
    color: '#444', 
    textAlign: 'center', 
    paddingHorizontal: 5 
  },

  tabBar: { flexDirection: 'row', height: 75, backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#EEE', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', bottom: 0, width: '100%' },
  tabItem: { alignItems: 'center' },
  tabLabel: { fontSize: 11, color: '#666', marginTop: 4 }
});
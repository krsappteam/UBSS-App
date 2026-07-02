import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Circle, Path, G } from 'react-native-svg';
import CommonScreen from '../Commonscreen/CommonScreen'; // Using your LinearGradient wrapper

const { width } = Dimensions.get('window');

// Internal SVG Components to remove dependency on external files
const BotIcon = ({ size = 34 }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Circle cx="20" cy="20" r="20" fill="#FCECEC" />
    <Path d="M12 18C12 14 15 11 20 11C25 11 28 14 28 18V24C28 28 25 31 20 31C15 31 12 28 12 24V18Z" fill="#1c5aa1" />
    <Circle cx="16" cy="18" r="1.5" fill="white" />
    <Circle cx="24" cy="18" r="1.5" fill="white" />
    <Path d="M17 24C17 24 18.5 26 20 26C21.5 26 23 24 23 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

const UserIcon = ({ size = 30 }) => (
  <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
    <Circle cx="15" cy="15" r="15" fill="#E0E0E0" />
    <Path d="M15 7C12.8 7 11 8.8 11 11C11 13.2 12.8 15 15 15C17.2 15 19 13.2 19 11C19 8.8 17.2 7 15 7ZM15 17C10.6 17 7 18.8 7 21V23H23V21C23 18.8 19.4 17 15 17Z" fill="#757575" />
  </Svg>
);

const ChatScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState('');
  const insets = useSafeAreaInsets();

  const CHAT_DATA = [
    { id: '1', type: 'system', text: 'Today' },
    { id: '2', sender: 'bot', text: 'Hi, What can we help you with today?', time: '2:10 Am' },
    { id: '3', sender: 'user', text: 'Hi, I want to check my class timetable.', time: '2:10 Am' },
    { id: '4', sender: 'bot', text: 'Sure! Please select an option', time: '2:10 Am' },
    { id: '5', sender: 'bot', type: 'options', options: ["Today's Classes", "Weekly Timetable"] },
  ];

  const renderMessage = ({ item }) => {
    if (item.type === 'system') {
      return (
        <View style={styles.systemMsg}>
          <View style={styles.timeTag}><Text style={styles.timeTagText}>{item.text}</Text></View>
        </View>
      );
    }

    if (item.type === 'options') {
      return (
        <View style={styles.optionsRow}>
          {item.options.map((opt, i) => (
            <TouchableOpacity key={i} style={styles.optionBtn}>
              <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }

    const isBot = item.sender === 'bot';
    return (
      <View style={[styles.msgWrapper, isBot ? styles.botWrapper : styles.userWrapper]}>
        {isBot && (
          <View style={styles.avatarMini}>
            <BotIcon size={30} />
            <View style={styles.dot} />
          </View>
        )}
        <View style={isBot ? styles.botBubble : styles.userBubble}>
          <Text style={isBot ? styles.botText : styles.userText}>{item.text}</Text>
          <Text style={isBot ? styles.botTime : styles.userTime}>{item.time}</Text>
        </View>
        {!isBot && (
          <View style={styles.userAvatarMini}>
            <UserIcon size={30} />
          </View>
        )}
      </View>
    );
  };

  return (
    <CommonScreen>
      <SafeAreaView style={styles.safeHeader} edges={['top']}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={28} color="white" />
          </TouchableOpacity>
          <View style={styles.titleGroup}>
            <View style={styles.headerAvatar}>
              <BotIcon size={36} />
              <View style={styles.dotLarge} />
            </View>
            <Text style={styles.headerTitle}>Live Chat</Text>
          </View>
          <View style={{ width: 28 }} />
        </View>
      </SafeAreaView>

      <View style={styles.whiteSheet}>
        <FlatList
          data={CHAT_DATA}
          keyExtractor={item => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.listPadding}
          showsVerticalScrollIndicator={false}
        />
        
        {/* Input Bar - with bottom safe area padding */}
        <View style={[styles.inputBar, { paddingBottom: insets.bottom + 10 }]}>
          <TouchableOpacity style={styles.iconBtn}>
            <MaterialCommunityIcons name="plus" size={26} color="#757575" />
          </TouchableOpacity>
          
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.iconBtn}>
              <MaterialCommunityIcons name="emoticon-happy-outline" size={22} color="#757575" />
            </TouchableOpacity>
            <TextInput 
              style={styles.input} 
              placeholder="Type Your Mesage" 
              placeholderTextColor="#757575"
              value={inputText}
              onChangeText={setInputText}
            />
            <TouchableOpacity style={styles.iconBtn}>
              <MaterialCommunityIcons name="microphone-outline" size={24} color="#757575" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.sendBtn}>
            <MaterialCommunityIcons name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </CommonScreen>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  safeHeader: { paddingHorizontal: 20, paddingBottom: 15 },
  headerContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  titleGroup: { flexDirection: 'row', alignItems: 'center' },
  headerAvatar: { position: 'relative', marginRight: 10 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '700' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#4CAF50', position: 'absolute', bottom: 0, right: 0, borderWidth: 1.5, borderColor: 'white' },
  dotLarge: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#4CAF50', position: 'absolute', bottom: -1, right: -1, borderWidth: 1.5, borderColor: 'white' },
  
  whiteSheet: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 35, borderTopRightRadius: 35, overflow: 'hidden' },
  listPadding: { padding: 20, paddingBottom: 20 },
  
  systemMsg: { alignItems: 'center', marginVertical: 12 },
  timeTag: { backgroundColor: '#F0F0F0', paddingHorizontal: 16, paddingVertical: 4, borderRadius: 12 },
  timeTagText: { fontSize: 12, color: '#757575', fontWeight: '500' },
  
  msgWrapper: { flexDirection: 'row', marginVertical: 8, maxWidth: '85%' },
  botWrapper: { alignSelf: 'flex-start' },
  userWrapper: { alignSelf: 'flex-end' },
  
  avatarMini: { marginRight: 8, alignSelf: 'flex-end', marginBottom: 15 },
  userAvatarMini: { marginLeft: 8, alignSelf: 'flex-end', marginBottom: 15 },
  
  botBubble: { backgroundColor: '#FCECEC', padding: 12, borderRadius: 15, borderBottomLeftRadius: 2 },
  userBubble: { backgroundColor: '#1c5aa1', padding: 12, borderRadius: 15, borderBottomRightRadius: 2 },
  
  botText: { color: '#333', fontSize: 13, lineHeight: 18 },
  userText: { color: 'white', fontSize: 13, lineHeight: 18 },
  botTime: { fontSize: 10, color: '#999', marginTop: 4, textAlign: 'right' },
  userTime: { fontSize: 10, color: '#E0E0E0', marginTop: 4, textAlign: 'right' },
  
  optionsRow: { flexDirection: 'row', marginLeft: 40, marginTop: 5, flexWrap: 'wrap' },
  optionBtn: { borderColor: '#2196F3', borderWidth: 1, borderRadius: 6, paddingHorizontal: 12, paddingVertical: 8, marginRight: 10, marginBottom: 10, backgroundColor: 'white' },
  optionText: { color: '#2196F3', fontSize: 12, fontWeight: '600' },

  inputBar: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  inputContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 25, paddingHorizontal: 8, height: 46, marginHorizontal: 8 },
  input: { flex: 1, fontSize: 14, color: '#333', paddingVertical: 0 },
  iconBtn: { padding: 4 },
  sendBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#1c5aa1', justifyContent: 'center', alignItems: 'center', elevation: 2 }
});
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://my.gca.edu.au';

// Storage keys
export const STORAGE_KEYS = {
  STUDENT_ID: 'studentId',
  STUDENT_DATA: 'studentData',
  AUTH_TOKEN: 'authToken',
};

// ==================== AUTH ====================
export const loginStudent = async (username: string, password: string) => {
  try {
    const url = `${BASE_URL}/Ajax/UBSSMoodleAdv.aspx?mode=moodleauth&username=${username}&password=${password}`;
    const response = await fetch(url);
    const data = await response.json();
    
    // Log the full login response to see all available fields
    console.log('Login response:', JSON.stringify(data));

    if (data.Access === '1') {
      // Save student data
      const studentData = {
        id: data.StudentNumber?.toString() || username,
        firstName: data.FirstName || '',
        lastName: data.LastName || '',
        email: data.Email || '',
      };
      // Save auth token from login response - try all possible field names
      const authToken = data.Token || data.token || data.TokenID || data.TokenId || data.AuthToken || data.authToken || data.SessionID || data.SessionId || data.sessionId || data.GUID || data.guid || data.Key || data.key || '';
      console.log('Auth token found:', authToken ? authToken.substring(0, 20) + '...' : 'EMPTY');
      if (authToken) {
        await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, authToken);
      }
      await AsyncStorage.setItem(STORAGE_KEYS.STUDENT_ID, studentData.id);
      await AsyncStorage.setItem(STORAGE_KEYS.STUDENT_DATA, JSON.stringify(studentData));
      return { success: true, data: studentData, token: authToken };
    } else {
      let message = 'Login failed';
      if (data.Access === '2') message = 'User is not a student';
      else if (data.Access === '3') message = 'Invalid password or user not active';
      else if (data.Access === '4') message = 'Access denied';
      return { success: false, message };
    }
  } catch (error) {
    return { success: false, message: 'Network error. Please try again.' };
  }
};

// Static GUID token used for API authentication
const STATIC_TOKEN = 'cd786778-4d30-437e-8677-8e1f4c3ff2f2';

// ==================== STUDENT INFO (ID Card) ====================
export const getStudentInfo = async (studentId: string) => {
  try {
    const url = `${BASE_URL}/api/CustomerInfo/GetStudentInfo?s=${studentId}&t=${STATIC_TOKEN}`;
    console.log('Fetching student info from:', url);
    const response = await fetch(url);
    const responseText = await response.text();
    console.log('Raw response:', responseText);
    
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse JSON:', e);
      return null;
    }
    
    console.log('Parsed data type:', typeof data, 'isArray:', Array.isArray(data));
    
    // Handle potential ASP.NET wrapper { d: {...} }
    if (data && data.d) {
      console.log('Unwrapped from .d property');
      return data.d;
    }
    
    // Handle array response - take first item
    if (Array.isArray(data) && data.length > 0) {
      console.log('Response is an array, taking first item');
      return data[0];
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching student info:', error);
    return null;
  }
};

// ==================== TIMETABLE ====================
export const getTimetable = async (studentId: string) => {
  try {
    const url = `${BASE_URL}/api/Timetable/GetTimetableInfo?s=${studentId}&t=${STATIC_TOKEN}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching timetable:', error);
    return null;
  }
};

// ==================== NOTIFICATIONS ====================
export const getNotifications = async (studentId: string, token: string) => {
  try {
    const url = `${BASE_URL}/api/CustomerInfo/GetNotifications?id=${studentId}&t=${token}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return null;
  }
};

// ==================== STORAGE HELPERS ====================
export const getStudentId = async () => {
  try {
    return await AsyncStorage.getItem(STORAGE_KEYS.STUDENT_ID);
  } catch {
    return null;
  }
};

export const getStudentData = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.STUDENT_DATA);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch {
    return null;
  }
};

export const logoutStudent = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.STUDENT_ID);
    await AsyncStorage.removeItem(STORAGE_KEYS.STUDENT_DATA);
    await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

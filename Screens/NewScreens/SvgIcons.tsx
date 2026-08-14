import React from 'react';
import Svg, { Path } from 'react-native-svg';

// ==================== TAB BAR ICONS ====================
export const HomeIcon = ({ color = '#3f73b9', size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 3L3 10H6V21H10V15H14V21H18V10H21L12 3Z" fill={color} />
  </Svg>
);

export const StudentCap = ({ color = '#666', size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill={color} />
  </Svg>
);

export const ChatOutline = ({ color = '#666', size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill={color} />
  </Svg>
);

export const SearchIcon = ({ color = '#666', size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" fill={color} />
  </Svg>
);

export const AccountDetails = ({ color = '#666', size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill={color} />
  </Svg>
);

// ==================== HEADER ICONS ====================
export const Bell = ({ color = '#fff', size = 26 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill={color} />
  </Svg>
);

export const ArrowLeft = ({ color = '#fff', size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill={color} />
  </Svg>
);

export const ChevronRight = ({ color = '#666', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill={color} />
  </Svg>
);

export const ChevronForward = ({ color = '#fff', size = 18 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill={color} />
  </Svg>
);

// ==================== HOME SCREEN ICONS ====================
export const CalendarMonth = ({ color = '#03A9F4', size = 26 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill={color} />
  </Svg>
);

export const ClockOutline = ({ color = '#E01842', size = 16 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill={color} />
  </Svg>
);

export const BookOpen = ({ color = '#FF9800', size = 26 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill={color} />
  </Svg>
);

export const AccountGroup = ({ color = '#4CAF50', size = 26 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.79 13 1 14.12 1 16.28V19H15V16.28C15 14.12 10.21 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.64 13.61 16 14.38 16 15.28V19H23V16.28C23 14.12 18.21 13 16 13Z" fill={color} />
  </Svg>
);

export const School = ({ color = '#00BCD4', size = 26 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill={color} />
  </Svg>
);

// ==================== STUDENT CARD ICONS ====================
export const QrCode = ({ color = '#222', size = 48 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M3 11H11V3H3V11ZM5 5H9V9H5V5ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM3 21H11V13H3V21ZM5 15H9V19H5V15ZM17 13H19V15H17V13ZM13 13H15V15H13V13ZM15 15H17V17H15V15ZM13 17H15V19H13V17ZM15 19H17V21H15V19ZM17 17H19V19H17V17ZM19 13H21V15H19V13ZM17 15H19V17H17V15Z" fill={color} />
  </Svg>
);

export const ShareVariant = ({ color = '#fff', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill={color} />
  </Svg>
);

export const Download = ({ color = '#fff', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill={color} />
  </Svg>
);

// ==================== CHAT ICONS ====================
export const Send = ({ color = '#fff', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill={color} />
  </Svg>
);

export const Plus = ({ color = '#757575', size = 26 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color} />
  </Svg>
);

export const EmoticonHappy = ({ color = '#757575', size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM8 14H16C15.45 15.72 13.88 17 12 17C10.12 17 8.55 15.72 8 14ZM8.5 11C7.67 11 7 10.33 7 9.5C7 8.67 7.67 8 8.5 8C9.33 8 10 8.67 10 9.5C10 10.33 9.33 11 8.5 11ZM15.5 11C14.67 11 14 10.33 14 9.5C14 8.67 14.67 8 15.5 8C16.33 8 17 8.67 17 9.5C17 10.33 16.33 11 15.5 11Z" fill={color} />
  </Svg>
);

// ==================== LOGIN ICONS ====================
export const PersonOutline = ({ color = '#666', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill={color} />
  </Svg>
);

export const LockClosedOutline = ({ color = '#666', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill={color} />
  </Svg>
);

// ==================== EYE ICONS ====================
export const EyeOutline = ({ color = '#666', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill={color} />
  </Svg>
);

export const EyeOffOutline = ({ color = '#666', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L15.65 18.92C14.5 19.3 13.28 19.5 12 19.5C7 19.5 2.73 16.39 1 12C1.9 9.77 3.44 7.91 5.35 6.63L2 5.27ZM12 7C14.76 7 17 9.24 17 12C17 12.64 16.87 13.26 16.64 13.82L19.57 16.75C21.07 15.5 22.27 13.86 23 12C21.27 7.61 17 4.5 12 4.5C10.6 4.5 9.26 4.75 8 5.2L10.17 7.35C10.74 7.13 11.35 7 12 7ZM12 9C11.65 9 11.31 9.05 11 9.14L14.86 13C14.95 12.69 15 12.35 15 12C15 10.34 13.66 9 12 9ZM8.11 11.13L12.87 15.89C12.58 15.96 12.29 16 12 16C9.24 16 7 13.76 7 11C7 10.71 7.04 10.42 7.11 10.13L8.11 11.13Z" fill={color} />
  </Svg>
);


// ==================== NOTIFICATION ICONS ====================
export const CalendarCheck = ({ color = '#666', size = 14 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM5 8V6H19V8H5ZM10.56 18.46L16.5 12.53L15.43 11.47L10.56 16.34L8.45 14.23L7.39 15.29L10.56 18.46Z" fill={color} />
  </Svg>
);

export const Information = ({ color = '#E91E63', size = 26 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill={color} />
  </Svg>
);

export const FileDocument = ({ color = '#9C27B0', size = 26 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM16 11H8V13H16V11ZM16 15H8V17H16V15ZM10 7H8V9H10V7Z" fill={color} />
  </Svg>
);

// ==================== SEARCH ICONS ====================
export const HistoryIcon = ({ color = '#666', size = 16 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM14 8H12V13L16.28 15.54L17.28 14.01L14 12.25V8Z" fill={color} />
  </Svg>
);

export const CloseIcon = ({ color = '#666', size = 14 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill={color} />
  </Svg>
);

export const Magnify = ({ color = '#666', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" fill={color} />
  </Svg>
);

// ==================== SHIELD ICON ====================
export const ShieldCheck = ({ color = '#92400E', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill={color} />
  </Svg>
);

// ==================== SERVICE ICON ====================
export const ViewGrid = ({ color = '#666', size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13Z" fill={color} />
  </Svg>
);

// ==================== NOTIFICATION ICON ====================
export const BellOutline = ({ color = '#666', size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill={color} />
  </Svg>
);

// ==================== LOGOUT ICON ====================
export const LogoutIcon = ({ color = '#666', size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill={color} />
  </Svg>
);



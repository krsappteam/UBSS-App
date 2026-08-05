import React from 'react';
import Svg, { Path, Circle, Rect, Line } from 'react-native-svg';

export const Colors = {
  primary: '#3f73b9',
  secondary: '#eef2f7',
  surface: '#f5f7fa',
  white: '#ffffff',
  textPrimary: '#1a1a2e',
  textSecondary: '#6b7280',
  textLight: '#9ca3af',
  borderLight: '#e5e7eb',
  error: '#EF4444',
  success: '#10B981',
  warning: '#F59E0B',
  blue: '#3B82F6',
  purple: '#8B5CF6',
  pink: '#EC4899',
  orange: '#F97316',
  teal: '#14B8A6',
  indigo: '#6366F1',
  red: '#EF4444',
  green: '#10B981',
  yellow: '#F59E0B',
  cyan: '#06B6D4',
};

export const Typography = {
  fontFamily: undefined,
  sizes: {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
  },
  weights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
};

export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
};

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
};

// SVG Icons
const createIcon = (paths: React.ReactNode, viewBox = '0 0 24 24') => {
  return ({ color = '#000', size = 24 }: { color?: string; size?: number }) => (
    <Svg width={size} height={size} viewBox={viewBox} fill="none">
      {paths}
    </Svg>
  );
};

export const Icons = {
  Home: createIcon(<Path d="M12 3L3 10H6V21H10V15H14V21H18V10H21L12 3Z" fill="currentColor" />),
  Bell: createIcon(<Path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="currentColor" />),
  ChevronRight: createIcon(<Path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />),
  Calendar: createIcon(<React.Fragment><Rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><Line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" /><Line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><Line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></React.Fragment>),
  IdCard: createIcon(<React.Fragment><Rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><Circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="2" /><Path d="M13 15C13 13.8954 12.1046 13 11 13H7C5.89543 13 5 13.8954 5 15" stroke="currentColor" strokeWidth="2" /><Line x1="14" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><Line x1="14" y1="13" x2="17" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></React.Fragment>),
  Chat: createIcon(<Path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor" />),
  Search: createIcon(<Circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><Line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />),
  Profile: createIcon(<React.Fragment><Circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" /><Path d="M4 21C4 17.6863 7.58172 15 12 15C16.4183 15 20 17.6863 20 21" stroke="currentColor" strokeWidth="2" /></React.Fragment>),
  ArrowLeft: createIcon(<Path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />),
  Clock: createIcon(<React.Fragment><Circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /><Path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></React.Fragment>),
  Book: createIcon(<Path d="M4 6H20M4 12H20M4 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />),
  MapPin: createIcon(<React.Fragment><Path d="M12 22C12 22 19 16 19 10C19 5.58172 15.4183 2 11 2C6.58172 2 3 5.58172 3 10C3 16 12 22 12 22Z" stroke="currentColor" strokeWidth="2" /><Circle cx="11" cy="10" r="3" stroke="currentColor" strokeWidth="2" /></React.Fragment>),
  Star: createIcon(<Path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />),
  Menu: createIcon(<React.Fragment><Line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><Line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><Line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></React.Fragment>),
  Logout: createIcon(<React.Fragment><Path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><Path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><Line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></React.Fragment>),
};

// Global Design System Tokens
// Surface: #f8f9ff, Primary: #1a365d, Secondary: #eff4ff
// Font: Hanken Grotesk (system default fallback)

export const Colors = {
  primary: '#1a365d',
  primaryLight: '#2a4a7f',
  secondary: '#eff4ff',
  surface: '#f8f9ff',
  white: '#ffffff',
  textPrimary: '#1a1a2e',
  textSecondary: '#6b7280',
  textLight: '#9ca3af',
  border: '#e5e7eb',
  borderLight: '#f0f0f0',
  error: '#EF4444',
  success: '#10B981',
  warning: '#F59E0B',
  blue: '#3B82F6',
  navy: '#1a365d',
  navyLight: '#2a4a7f',
  brown: '#8B6914',
  lightBlue: '#7DD3FC',
  orange: '#F97316',
  teal: '#14B8A6',
  indigo: '#6366F1',
  red: '#EF4444',
  green: '#10B981',
  yellow: '#F59E0B',
  cyan: '#06B6D4',
  purple: '#8B5CF6',
  pink: '#EC4899',
  cardBackground: '#ffffff',
  chatBubbleAgent: '#eff4ff',
  chatBubbleStudent: '#1a365d',
  tabInactive: '#9ca3af',
  tabActive: '#1a365d',
};

export const Typography = {
  fontFamily: undefined, // Uses system default (Hanken Grotesk if available)
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
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
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

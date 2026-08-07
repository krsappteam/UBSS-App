declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-sweet-toast' {
  import React from 'react';
  import { StyleProp, ViewStyle } from 'react-native';

  interface SweetToastProps {
    onRef: (ref: any) => void;
    position?: 'top' | 'bottom';
    positionValue?: number;
    flash?: boolean;
    flashTime?: number;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
  }

  const SweetToast: React.FC<SweetToastProps>;
  export default SweetToast;
}



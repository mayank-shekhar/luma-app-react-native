import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../types';

const isAndroid = Platform.OS === 'android';

// const androidStyles = {
//   buttonWrapper: {
//     backgroundColor: 'transparent',
//     textTransform: 'capitalize',
//   },
// };

function androidStyles(colors: Theme['colors']) {
  return {
    buttonWrapper: {
      backgroundColor: colors.background,
      textTransform: 'capitalize',
      borderRadius: 16,
    },
  };
}

// const iOSStyles = {
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
// };

export default function CommonStyles(colors: Theme['colors']) {
  return StyleSheet.create({
    footnote: {
      fontSize: 14,
      color: colors.text,
      paddingVertical: 10,
    },
    buttonWrapper: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      backgroundColor: colors.primary,
      ...(isAndroid && androidStyles(colors).buttonWrapper),
    },
  });
}

// export defa

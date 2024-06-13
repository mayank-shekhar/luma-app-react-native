import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../types';

const isAndroid = Platform.OS === 'android';

function androidStyles(colors: Theme['colors']) {
  return {
    buttonWrapper: {
      backgroundColor: colors.background,
      textTransform: 'capitalize',
      borderRadius: 16,
    },
  };
}

export default function CommonStyles(colors: Theme['colors']) {
  return StyleSheet.create({
    footnote: {
      fontSize: 14,
      color: colors.text,
      paddingVertical: 10,
      opacity: 0.5,
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

import {StyleSheet} from 'react-native';
import {Theme} from '../../types';

export function AndroidButtonStyles(
  colors: Theme['colors'],
  variant?: 'primary' | 'secondary',
) {
  const isSecondary = variant === 'secondary';
  return StyleSheet.create({
    button: {
      backgroundColor: colors.background,
      borderRadius: 12,
      paddingVertical: 10,
      paddingHorizontal: 20,
      margin: 0,
    },
    buttonText: {
      // color: colors.text,
      color: isSecondary ? 'red' : colors.text,
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 14,
    },
    buttonPressed: {
      backgroundColor: colors.border,
    },
  });
}

export function IOSButtonStyles(
  colors: Theme['colors'],
  variant?: 'primary' | 'secondary',
) {
  const isSecondary = variant === 'secondary';
  return StyleSheet.create({
    button: {
      backgroundColor: colors.background,
      borderRadius: 5,
      padding: 8,
      margin: 0,
    },
    buttonText: {
      textAlign: 'center',
      color: isSecondary ? 'red' : colors.primary,
      fontSize: 14,
    },
    buttonPressed: {
      backgroundColor: colors.border,
    },
  });
}

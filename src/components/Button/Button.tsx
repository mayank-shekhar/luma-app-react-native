import React from 'react';
import {Platform, Pressable, Text} from 'react-native';
import type {PressableProps} from 'react-native';
import {AndroidButtonStyles, IOSButtonStyles} from './Button.styles';

import {useTheme} from '@react-navigation/native';

export type ButtonProps = PressableProps & {
  label?: string;
  variant?: 'primary' | 'secondary';
};

export default function Button(props: ButtonProps) {
  const {variant, label, ...otherProps} = props;
  const {colors} = useTheme();

  const styles =
    Platform.OS === 'android'
      ? AndroidButtonStyles(colors, variant)
      : IOSButtonStyles(colors, variant);

  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      {...otherProps}>
      {otherProps.children || <Text style={styles.buttonText}>{label}</Text>}
    </Pressable>
  );
}

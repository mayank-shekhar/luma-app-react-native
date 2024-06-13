import {StyleSheet} from 'react-native';
import {Theme} from '../../types';

export default function DisclaimerViewStyles(_colors: Theme['colors']) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    text: {
      fontSize: 16,
      marginBottom: 16,
    },
    button: {
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#007AFF',
    },
    buttonText: {
      color: '#FFFFFF',
    },
  });
}

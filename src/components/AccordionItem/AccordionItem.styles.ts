import {StyleSheet} from 'react-native';
import {Theme} from '../../types';

export default function AccordionItemStyles(colors: Theme['colors']) {
  return StyleSheet.create({
    accordContainer: {
      backgroundColor: colors.card,
      borderRadius: 10,
      marginVertical: 8,
    },
    accordHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    accordExpanded: {
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    accordTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    accordBody: {
      padding: 16,
    },
  });
}

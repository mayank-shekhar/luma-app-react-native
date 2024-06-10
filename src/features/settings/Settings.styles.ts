import {StyleSheet} from 'react-native';
import {Theme} from '../../types';

export default function SettingsStyles(colors: Theme['colors']) {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      padding: 20,
    },

    header: {
      fontSize: 36,
      fontWeight: '600',
      color: '#000',
      marginVertical: 10,
    },
    settingsSectionWrapper: {
      marginTop: 30,
      flexDirection: 'column',
    },
    sectionHeader: {
      fontWeight: '400',
      textTransform: 'uppercase',
      fontSize: 15,
      color: colors.text,
      opacity: 0.5,
      paddingLeft: 24,
    },
    sectionContainer: {
      backgroundColor: colors.card,
      borderRadius: 10,
      marginTop: 8,
      position: 'relative',
    },
    testSection: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
    },
    testProfileSection: {
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
    },
    buttonWrapepr: {
      backgroundColor: colors.background,
      borderRadius: 8,
      paddingHorizontal: 4,
      fontSize: 11,
    },
    textNote: {
      fontSize: 14,
    },
    settingsListItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      marginLeft: 20,
      paddingRight: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      alignItems: 'center',
    },
    footnoteWrapper: {
      paddingHorizontal: 20,
    },

    // config section
    textInputBox: {
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'transparent',
      height: 50,
    },

    configurationWrapper: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
      // marginLeft: 20,
    },

    configItemsWrapper: {
      padding: 10,
    },
    configItemRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 2,
      paddingHorizontal: 20,
    },
    configItemTitle: {
      color: colors.text,
      fontSize: 12,
    },
    configItemValue: {
      color: colors.text,
      fontSize: 12,
      fontWeight: '600',
      textAlign: 'right',
    },
  });
}

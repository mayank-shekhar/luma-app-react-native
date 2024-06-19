import {Platform, StyleSheet} from 'react-native';
import {Theme} from '../../types';

const isAndroid = Platform.OS === 'android';

const androidStyles = {
  wrapper: {
    padding: 0,
  },
  sectionHeader: {
    fontWeight: '500',
    textTransform: 'capitalize',
    opacity: 0.7,
  },
  testSection: {
    paddingVertical: 16,
    paddingHorizontal: 0,
    marginHorizontal: 20,
  },
  testProfileSection: {
    paddingVertical: 16,
    paddingHorizontal: 0,
    marginHorizontal: 20,
  },
  settingsListItem: {
    borderBottomWidth: 0,
  },
};

export default function SettingsStyles(colors: Theme['colors']) {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      padding: 20,
      ...(isAndroid && androidStyles.wrapper),
    },

    header: {
      fontSize: 36,
      fontWeight: '600',
      color: '#000',
      marginVertical: 10,
    },
    settingsSectionWrapper: {
      flexDirection: 'column',
      marginBottom: 20,
    },
    sectionHeader: {
      fontWeight: '400',
      textTransform: 'uppercase',
      fontSize: 14,
      color: colors.text,
      opacity: 0.7,
      paddingLeft: 24,
      ...(isAndroid && androidStyles.sectionHeader),
    },
    sectionContainer: {
      backgroundColor: colors.card,
      borderRadius: 10,
      marginTop: 8,
      position: 'relative',
    },
    testSection: {
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingVertical: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      ...(isAndroid && androidStyles.testSection),
    },
    testProfileSection: {
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
      ...(isAndroid && androidStyles.testProfileSection),
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
      marginLeft: 24,
      paddingHorizontal: 24,
      paddingLeft: 0,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      alignItems: 'center',
      ...(isAndroid && androidStyles.settingsListItem),
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

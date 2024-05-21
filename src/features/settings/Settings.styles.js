import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },

  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  settingsSectionWrapper: {
    marginTop: 30,
    flexDirection: 'column',
  },
  sectionHeader: {
    fontWeight: 400,
    textTransform: 'uppercase',
    fontSize: 15,
    color: '#999',
    paddingLeft: 24,
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 8,
  },
  testSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-around',
  },
  buttonWrapepr: {
    backgroundColor: Platform.OS === 'ios' ? '#eeeeee' : 'inherit',
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 12,
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
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  footnoteWrapper: {
    paddingHorizontal: 20,
  },
});

import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 0,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },

  sectionWrapper: {
    marginTop: 0,
  },

  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  subheader: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
    textTransform: 'uppercase',
  },

  subheaderIcon: {
    fontSize: 18,
    color: '#999',
    marginRight: 8,
  },

  subheadingWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
});

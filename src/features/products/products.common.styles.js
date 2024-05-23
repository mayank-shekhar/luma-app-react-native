import {StyleSheet, Platform} from 'react-native';

const shadow = {
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.9,
  shadowRadius: 3.84,
  elevation: 5,
};

export default StyleSheet.create({
  wrapper: {
    // flex: 1,
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 0,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    // backgroundColor: Platform.OS === 'ios' ? '#f0f0f0' : '#fff',
  },

  sectionWrapper: {
    backgroundColor: Platform.OS === 'ios' ? '#f0f0f0' : '#fff',
    marginTop: 20,
    borderWidth: Platform.OS === 'ios' ? 0 : 1,
    borderColor: '#f0f0f0',
    ...(Platform.OS === 'android' ? shadow : {}),
  },

  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
    // marginTop: 20,
  },

  subheader: {
    fontSize: 16,
    color: '#999',
    fontWeight: '500',
    // marginBottom: 10,
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

  //
  // heroSection: {
  //   backgroundColor: '#fff',
  //   borderRadius: 20,
  //   padding: 10,
  //   flexDirection: 'column',
  //   justifyContent: 'flex-start',
  // },
  //
  // heroImageContainer: {
  //   alignItems: 'center',
  // },
  //
  // heroImage: {
  //   resizeMode: 'contain',
  //   width: '80%',
  // },
  //
  // heroText: {
  //   fontSize: 14,
  //   color: '#000',
  //   marginTop: 5,
  // },
  //
  // brandName: {
  //   fontSize: 15,
  //   fontWeight: 'bold',
  //   marginTop: 5,
  // },
  //
  // heroTextWrapper: {
  //   alignItems: 'center',
  //   marginBottom: 20,
  // },
});

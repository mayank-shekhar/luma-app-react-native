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
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 0,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },

  sectionWrapper: {
    marginTop: 20,
  },

  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
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

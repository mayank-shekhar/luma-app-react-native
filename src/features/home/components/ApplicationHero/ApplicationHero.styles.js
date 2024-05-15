import {StyleSheet} from 'react-native';

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

  heroSection: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  heroImageContainer: {
    alignItems: 'center',
  },

  heroImage: {
    resizeMode: 'contain',
    width: '80%',
  },

  heroText: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },

  brandName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },

  heroTextWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  headingWrapper: {
    // flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    alignContent: 'center',
  },
  productsBox: {
    borderRadius: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  product: {
    flex: 1,
    flexDirection: 'column',
    width: 100,
    margin: 10,
  },
  productImage: {
    // flex: 1,
  },
  productTitle: {
    overflow: 'hidden',
    fontSize: 12,
    marginTop: 10,
  },
});

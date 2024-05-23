import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  productsListWrapper: {
    marginVertical: 20,
  },

  productsList: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    borderRadius: Platform.OS === 'ios' ? 12 : 0,
    overflow: 'hidden',
  },

  productsListItem: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  productImageContainer: {
    resizeMode: 'stretch',
    marginLeft: 20,
    marginRight: 10,
  },

  productImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    flex: 1,
  },

  productInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    borderBottomWidth: 1,
    height: 80,
  },
  arrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

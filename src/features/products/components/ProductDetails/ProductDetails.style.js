import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  productImage: {
    width: '100%',
    height: 550,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 20,
  },
  categoryTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
  },

  categoryText: {color: '#999', fontWeight: '500'},
  productDescription: {
    fontSize: 18,
    marginTop: 10,
    lineHeight: 30,
  },
  metaDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 30,
  },
  productColor: {
    width: 18,
    height: 18,
    borderRadius: 4,
  },
  productSize: {
    minWidth: 20,
    // height: 20,
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  productSizeText: {
    fontSize: 16,
    flex: 1,
  },
  productPriceText: {
    fontSize: 18,
    flex: 1,
    fontWeight: 'bold',
  },
});

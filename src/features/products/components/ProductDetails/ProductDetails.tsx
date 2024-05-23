import * as React from 'react';

import {View, Text, Image, useColorScheme, ScrollView} from 'react-native';
import {Product} from '../../../../models/Products';
import {
  sanitizeProductCategory,
  numToTwoDecimals,
} from '../../../../utils/stringModifiers';
import {useTheme} from '@react-navigation/native';
import ProductDetailsStyle from './ProductDetails.style';

const CURRENCY = '$';

const ProductDetails = ({_navigation, route}: any) => {
  const {colors} = useTheme();
  const colorsScheme = useColorScheme();
  const isDarkMode = colorsScheme === 'dark';
  const product = route.params.product as Product;
  return (
    <ScrollView>
      <View style={{backgroundColor: colors.card}}>
        {/* Product image */}
        <View style={{backgroundColor: colors.background}}>
          <Image
            style={ProductDetailsStyle.productImage}
            source={{uri: product.imageUrl}}
          />
        </View>
        {/* Product category and description */}
        <View
          style={[
            ProductDetailsStyle.productInfo,
            {backgroundColor: colors.card},
          ]}>
          <Text style={ProductDetailsStyle.categoryText}>
            {sanitizeProductCategory(product.category)}
          </Text>
          <Text
            style={[
              ProductDetailsStyle.productDescription,
              {color: colors.text},
            ]}>
            {product.description}
          </Text>
          <View style={ProductDetailsStyle.metaDataContainer}>
            <View
              style={[
                ProductDetailsStyle.productColor,
                {backgroundColor: product.color},
              ]}
            />
            <View>
              <Text
                style={[
                  ProductDetailsStyle.productPriceText,
                  {color: colors.text},
                ]}>
                {CURRENCY}&nbsp;{numToTwoDecimals(product.price)}
              </Text>
            </View>

            <View
              style={[
                ProductDetailsStyle.productSize,
                {backgroundColor: isDarkMode ? '#fff' : '#000'},
              ]}>
              <Text
                style={[
                  ProductDetailsStyle.productSizeText,
                  {color: isDarkMode ? '#000' : '#fff'},
                ]}>
                {product.size}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

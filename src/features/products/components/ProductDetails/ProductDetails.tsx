import * as React from 'react';

import {View, Text, SafeAreaView, Image, useColorScheme} from 'react-native';
import {Product} from '../../../../models/Products';
import {sanitizeProductCategory} from '../../../../utils/stringModifiers';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const ProductDetails = ({navigation, route}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const product = route.params.product as Product;
  console.log('Product Details', product);
  return (
    <SafeAreaView>
      <View style={{backgroundColor: isDarkMode ? '#000' : '#fff'}}>
        {/* Product image */}
        <View style={{backgroundColor: isDarkMode ? '#000' : '#fff'}}>
          <Image
            style={{width: '100%', height: 550, resizeMode: 'contain'}}
            source={{uri: product.imageUrl}}
          />
        </View>
        {/* Product category and description */}
        <View>
          <Text>{sanitizeProductCategory(product.category)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

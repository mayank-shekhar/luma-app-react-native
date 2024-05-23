import * as React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import featuredProductsStyles from './FeaturedProducts.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import productsCommonStyles from '../../products.common.styles';
import {Products} from '../../../../models/Products.ts';
import {useTheme} from '@react-navigation/native';

export type FeaturedProductsListProps = {
  products: Products;
};

export default function FeaturedProductsList(
  props: FeaturedProductsListProps,
): React.JSX.Element {
  const {colors} = useTheme();
  const {products} = props;
  return (
    <View
      style={[
        productsCommonStyles.sectionWrapper,
        {backgroundColor: colors.background},
      ]}>
      <View style={productsCommonStyles.subheadingWrapper}>
        <Icon
          name={'star'}
          size={18}
          color={'#999'}
          style={productsCommonStyles.subheaderIcon}
        />
        <Text style={productsCommonStyles.subheader}>Featured</Text>
      </View>
      <View
        style={[
          featuredProductsStyles.productsBox,
          {backgroundColor: colors.card},
        ]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* Featured products */}
          {products.map(product => {
            return (
              <View style={featuredProductsStyles.product} key={product.sku}>
                <View
                  style={[
                    featuredProductsStyles.productImage,
                    {borderColor: colors.border},
                  ]}>
                  <Image
                    source={{uri: product.imageUrl}}
                    style={{width: 100, height: 100}}
                  />
                </View>
                <View style={featuredProductsStyles.productTitle}>
                  <Text numberOfLines={1} style={{color: colors.primary}}>
                    {product.name}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

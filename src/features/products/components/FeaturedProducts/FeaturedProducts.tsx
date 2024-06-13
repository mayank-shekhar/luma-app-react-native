import * as React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import featuredProductsStyles from './FeaturedProducts.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import productsCommonStyles from '../../products.common.styles';
import {Product, Products} from '../../../../models/Products';
import {useTheme} from '@react-navigation/native';

export type FeaturedProductsListProps = {
  products: Products;
  navigation: any;
};

export default function FeaturedProductsList(
  props: FeaturedProductsListProps,
): React.JSX.Element {
  const {colors} = useTheme();
  const {products, navigation} = props;

  const onViewDetails = (product: Product) => {
    navigation.navigate('Details', {product});
  };
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
              <Pressable
                key={product.sku}
                onPress={() => onViewDetails(product)}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? colors.border : colors.card,
                  },
                ]}>
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
                    <Text
                      numberOfLines={1}
                      style={{fontSize: 12, color: colors.primary}}>
                      {product.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

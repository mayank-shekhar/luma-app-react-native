import {Text, View, Image, Button, Pressable} from 'react-native';
import * as React from 'react';
import {Product} from '../../../../models/Products';
import productsCommonStyles from '../../products.common.styles';
import ProductsListStyles from './ProductsList.styles';
import Icon from 'react-native-vector-icons/Ionicons';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductDetails} from '..';
import {sanitizeProductCategory} from '../../../../utils/stringModifiers';

// const ProductStack = createNativeStackNavigator();

export type ProductsListProps = {
  products: Product[];
  navigation: any;
};

export default function ProductsList({
  products,
  navigation,
}: ProductsListProps) {
  const categoryWiseProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as {[key: string]: Product[]});
  const sortedCategories = Object.keys(categoryWiseProducts).sort().reverse();

  const onViewDetails = (product: Product) => {
    navigation.navigate('Details', {product});
  };
  const renderItem = ({item, isLast}: {item: Product; isLast: boolean}) => {
    return (
      <Pressable key={item.sku} onPress={() => onViewDetails(item)}>
        <View
          style={[
            ProductsListStyles.productsListItem,
            isLast ? ProductsListStyles.lastItem : {},
          ]}
          key={item.sku}>
          <View style={ProductsListStyles.productImageContainer}>
            <Image
              source={{uri: item.imageUrl}}
              style={ProductsListStyles.productImage}
            />
          </View>
          <View style={ProductsListStyles.productInfo}>
            <View style={ProductsListStyles.productTitle}>
              <Text numberOfLines={1}>{item.name}</Text>
            </View>
            <View style={ProductsListStyles.arrow}>
              {/* <Button title="View details" onPress={() => onViewDetails(item)}> */}
              <Icon name="chevron-forward" size={20} color="#999" />
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const renderCategoryItem = ({item}: {item: string}) => {
    return (
      <View style={productsCommonStyles.sectionWrapper} key={item}>
        <View style={productsCommonStyles.subheadingWrapper}>
          <Text style={productsCommonStyles.subheader}>
            {sanitizeProductCategory(item)}
          </Text>
        </View>
        <View style={ProductsListStyles.productsList}>
          {categoryWiseProducts[item].map((product, index) => {
            return renderItem({
              item: product,
              isLast: index === categoryWiseProducts[item].length - 1,
            });
          })}
        </View>
      </View>
    );
  };

  return (
    <>
      {sortedCategories.map(category => {
        return renderCategoryItem({item: category});
      })}
    </>
  );
}

import {Text, View, Image, Pressable} from 'react-native';
import * as React from 'react';
import {Product} from '../../../../models/Products';
import productsCommonStyles from '../../products.common.styles';
import ProductsListStyles from './ProductsList.styles';
import Icon from 'react-native-vector-icons/Ionicons';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {ProductDetails} from '..';
import {sanitizeProductCategory} from '../../../../utils/stringModifiers';
import {useTheme} from '@react-navigation/native';

// const ProductStack = createNativeStackNavigator();

export type ProductsListProps = {
  products: Product[];
  navigation: any;
};

export default function ProductsList({
  products,
  navigation,
}: ProductsListProps) {
  const {colors} = useTheme();
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
      <Pressable
        key={item.sku}
        onPress={() => onViewDetails(item)}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? colors.border : colors.card,
          },
        ]}>
        <View style={ProductsListStyles.productsListItem} key={item.sku}>
          <View style={ProductsListStyles.productImageContainer}>
            <Image
              source={{uri: item.imageUrl}}
              style={ProductsListStyles.productImage}
            />
          </View>
          <View
            style={[
              ProductsListStyles.productInfo,
              {borderBottomWidth: isLast ? 0 : 1, borderColor: colors.border},
            ]}>
            <View>
              <Text numberOfLines={1} style={{color: colors.text}}>
                {item.name}
              </Text>
            </View>
            <View style={ProductsListStyles.arrow}>
              {/* <Button title="View details" onPress={() => onViewDetails(item)}> */}
              {item.featured && (
                <Icon
                  name="star"
                  size={20}
                  color={colors.text}
                  style={{marginRight: 5}}
                />
              )}
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
        <View
          style={[
            ProductsListStyles.productsList,
            {backgroundColor: colors.card},
          ]}>
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

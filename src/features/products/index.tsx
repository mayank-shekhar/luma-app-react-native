import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProductsContainer} from './containers';
import {ProductDetails} from './components';

const ProductsStack = createNativeStackNavigator();
export type HeaderButtonProps = {
  /**
   * Tint color for the header.
   */
  tintColor?: string;
  /**
   * Whether it's possible to navigate back in stack.
   */
  canGoBack: boolean;
};

function ProductsStackScreen() {
  function getDetailsHeaderTitle(route: any) {
    return route.params.product.name ?? 'Product Details';
  }

  function getDetailsPageHeaderOptions(route: any, props: HeaderButtonProps) {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
        }}>
        <Pressable>
          <Icon name="heart-outline" size={30} color={props.tintColor} />
        </Pressable>
        <Pressable>
          <Icon name="cart-outline" size={30} color={props.tintColor} />
        </Pressable>
        <Pressable>
          <Icon name="card-outline" size={30} color={props.tintColor} />
        </Pressable>
      </View>
    );
  }

  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen name="Products" component={ProductsContainer} />
      <ProductsStack.Screen
        name="Details"
        component={ProductDetails}
        options={({route}) => ({
          headerTitle: getDetailsHeaderTitle(route),
          headerRight: props => getDetailsPageHeaderOptions(route, props),
        })}
      />
    </ProductsStack.Navigator>
  );
}

export default ProductsStackScreen;

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProductsContainer} from './containers';
import {ProductDetails} from './components';
import {HeaderButtonProps} from '../../types';

const ProductsStack = createNativeStackNavigator();

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
      <ProductsStack.Screen
        name="Products"
        component={ProductsContainer}
        // options={{headerShown: Platform.OS === 'ios' ? false : true}}
      />
      <ProductsStack.Screen
        name="Details"
        component={ProductDetails}
        options={({route}) => ({
          headerTitle: getDetailsHeaderTitle(route),
          headerRight: props => getDetailsPageHeaderOptions(route, props),
          headerBackButtonMenuEnabled: true,
        })}
      />
    </ProductsStack.Navigator>
  );
}

export default ProductsStackScreen;

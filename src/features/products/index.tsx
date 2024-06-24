import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Pressable, Alert, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProductsContainer} from './containers';
import {ProductDetails} from './components';
import {HeaderButtonProps} from '../../types';
import {useMobileSDK} from '../../hooks';
import {PERMISSIONS, RESULTS, check} from 'react-native-permissions';
import {Product} from '../../models/Products';

const ProductsStack = createNativeStackNavigator();

function ProductsStackScreen() {
  const mobileSDK = useMobileSDK();

  const checkAttAndSendCommerceEvent = async (
    eventType: string,
    product: Product,
  ) => {
    if (Platform.OS === 'android') {
      mobileSDK.sendCommerceExperienceEvent(eventType, product);
      return;
    }
    check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then(result => {
      if (result === RESULTS.GRANTED) {
        mobileSDK.sendCommerceExperienceEvent(eventType, product);
      }
    });
  };

  function getDetailsHeaderTitle(route: any) {
    return route.params.product.name ?? 'Product Details';
  }

  const raiseProductActionAlert = (
    actionName: string,
    actionDescription: string,
  ) => {
    Alert.alert(actionName, actionDescription);
  };

  const handleProductAction = (product: Product, actionType: string) => {
    // raiseProductActionAlert();
    checkAttAndSendCommerceEvent(actionType, product);
    switch (actionType) {
      case 'saveForLaters':
        raiseProductActionAlert(
          'Saved for later',
          'The selected item is saved to your wishlist...',
        );
        break;
      case 'productListAdds':
        raiseProductActionAlert(
          'Added to basket',
          'The selected item is added to your basket...',
        );
        break;
      case 'purchases':
        raiseProductActionAlert('Purchases', 'The selected item is purchased.');
        break;
      default:
        break;
    }
  };

  function getDetailsPageHeaderOptions(route: any, props: HeaderButtonProps) {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
        }}>
        <Pressable
          onPress={() =>
            handleProductAction(route.params.product, 'saveForLaters')
          }>
          <Icon name="heart-outline" size={30} color={props.tintColor} />
        </Pressable>
        <Pressable
          onPress={() =>
            handleProductAction(route.params.product, 'productListAdds')
          }>
          <Icon name="cart-outline" size={30} color={props.tintColor} />
        </Pressable>
        <Pressable
          onPress={() =>
            handleProductAction(route.params.product, 'purchases')
          }>
          <Icon name="card-outline" size={30} color={props.tintColor} />
        </Pressable>
      </View>
    );
  }

  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        name="Products "
        component={ProductsContainer}
        options={{
          headerShown: true,
          headerLargeTitle: true,
          headerTransparent: Platform.OS === 'ios' ? true : false,
        }}
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

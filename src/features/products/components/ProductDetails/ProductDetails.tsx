import * as React from 'react';

import {
  View,
  Text,
  Image,
  useColorScheme,
  ScrollView,
  Platform,
} from 'react-native';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Product} from '../../../../models/Products';
import {
  sanitizeProductCategory,
  numToTwoDecimals,
} from '../../../../utils/stringModifiers';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import ProductDetailsStyle from './ProductDetails.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMobileSDK} from '../../../../hooks';

const CURRENCY = '$';

const ProductDetails = ({_navigation, route}: any) => {
  const {colors} = useTheme();
  const mobileSDK = useMobileSDK();
  const colorsScheme = useColorScheme();
  const isDarkMode = colorsScheme === 'dark';
  const product = route.params.product as Product;

  const checkAttAndSendCommerceEvent = async (eventType: string) => {
    check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then(result => {
      if (result === RESULTS.GRANTED) {
        mobileSDK.sendCommerceExperienceEvent(eventType, product);
      }
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      // sdk events
      mobileSDK.sendTrackScreenEvent(
        `rn luma: content: ${Platform.OS}: us: en: product`,
      );
      checkAttAndSendCommerceEvent('productViews');
    }, []),
  );

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
          <View style={ProductDetailsStyle.categoryTextWrapper}>
            <Text style={ProductDetailsStyle.categoryText}>
              {sanitizeProductCategory(product.category)}
            </Text>
            {product.featured && (
              <Icon name="star" size={16} color={colors.text} />
            )}
          </View>

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

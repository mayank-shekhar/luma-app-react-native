import {Platform, Text, View, ScrollView} from 'react-native';
import * as React from 'react';

import productsCommonStyles from './products.common.styles';
import {FeaturedProductsList, ProductsList} from './components';
import {useEffect} from 'react';
import {loadProducts} from '../../api';
import {Products} from '../../models/Products.ts';
import {FullScreenLoader} from '../../components/index.ts';
import {useTheme} from '@react-navigation/native';

function ProductsScreen({navigation}: {navigation: any}) {
  const {colors} = useTheme();

  const [products, setProducts] = React.useState<Products>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [featuredProducts, setFeaturedProducts] = React.useState<Products>([]);

  const getProducts = async () => {
    const fetchedProducts = await loadProducts();
    setProducts(fetchedProducts.products);
  };

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
      const featured = products.filter(product => product.featured);
      setFeaturedProducts(featured);
    }
  }, [products]);

  useEffect(() => {
    // Fetch products
    getProducts();
  }, []);

  return loading ? (
    <FullScreenLoader />
  ) : (
    <ScrollView>
      <View style={productsCommonStyles.wrapper}>
        {Platform.OS === 'ios' && (
          <Text style={[productsCommonStyles.header, {color: colors.text}]}>
            Products
          </Text>
        )}
        {products.length > 0 && (
          <>
            <FeaturedProductsList products={featuredProducts} />
            <ProductsList navigation={navigation} products={products} />
          </>
        )}
      </View>
    </ScrollView>
  );
}

export default ProductsScreen;

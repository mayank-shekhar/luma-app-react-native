import {Platform, View, ScrollView, SafeAreaView} from 'react-native';
import * as React from 'react';

import productsCommonStyles from '../../products.common.styles';
import {FeaturedProductsList, ProductsList} from '../../components';
import {useEffect} from 'react';
import {loadProducts} from '../../../../api';
import {Products} from '../../../../models/Products.ts';
import {FullScreenLoader} from '../../../../components/index.ts';
import {useMobileSDK} from '../../../../hooks/useAppStore.ts';
import {useFocusEffect} from '@react-navigation/native';

function ProductsContainer({navigation}: {navigation: any}) {
  const [products, setProducts] = React.useState<Products>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const mobileSDK = useMobileSDK();

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

  useFocusEffect(
    React.useCallback(() => {
      mobileSDK.sendTrackScreenEvent(
        `rn luma: content: ${Platform.OS}: us: en: products`,
      );
    }, []),
  );

  useEffect(() => {
    // Fetch products
    getProducts();
  }, []);

  return loading ? (
    <FullScreenLoader />
  ) : (
    <SafeAreaView>
      <ScrollView>
        <View style={productsCommonStyles.wrapper}>
          {products.length > 0 && (
            <>
              <FeaturedProductsList
                navigation={navigation}
                products={featuredProducts}
              />
              <ProductsList navigation={navigation} products={products} />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProductsContainer;

import {ProductNetworkResponse} from '../models/Products.ts';

// data
import productsData from '../models/data/products.json';

export function loadProducts(): Promise<ProductNetworkResponse> {
  return Promise.resolve(productsData as unknown as ProductNetworkResponse);
}

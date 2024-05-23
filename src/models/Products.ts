export type Product = {
  sku: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  color: string;
  size: string;
  url: string;
  stockQuantity: number;
  featured: boolean;
};

export type Products = Product[];

export type ProductNetworkResponse = {
  products: Product[];
};

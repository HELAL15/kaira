export interface Product {
  id: number;
  name: string;
  price: number;
  // Add other fields here
}

export interface ProductsResponse {
  data: Product[];
  meta: {
    total: number;
    per_page: number;
  };
}

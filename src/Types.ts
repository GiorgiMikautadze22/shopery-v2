export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

export interface ProductsContextType {
  products: Product[];
  categories: string[];
  electronics: Product[];
  jewelery: Product[];
  mensClothing: Product[];
  womansClothing: Product[];
}

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
  filteredProducts: () => void | Product[];
  selectedCategory: string | undefined;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
  value: number[];
  highestPrice: number;
  lowestPrice: number;
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  prices: number[];
  getMaxPrice: () => number;
  getMinPrice: () => number;
}

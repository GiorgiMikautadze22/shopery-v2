export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
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
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  headerCategoryIndicator: string | undefined;
  selectedProduct: Product | undefined;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
  maxPrice: number;
  minPrice: number;
  myCart: Product[];
  setMyCart: React.Dispatch<React.SetStateAction<Product[]>>;
  removeFromCart: (id: number) => void;
  cartTotalPrice: number;
  setCartTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

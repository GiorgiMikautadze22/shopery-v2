import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Product, ProductsContextType } from "./Types";

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

interface ProductProviderProps {
  children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [electronics, setElectronics] = useState<Product[]>([]);
  const [jewelery, setJewelery] = useState<Product[]>([]);
  const [mensClothing, setMensClothing] = useState<Product[]>([]);
  const [womansClothing, setWomansClothing] = useState<Product[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const [value, setValue] = useState<number[]>([0, 100]);
  const [headerCategoryIndicator, setHeaderCategoryIndicator] =
    useState<string>();

  const filteredProducts = () => {
    const priceFiltered = products.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );
    setProducts(priceFiltered);
    setHeaderCategoryIndicator(selectedCategory);

    switch (selectedCategory) {
      case "electronics":
        setProducts(electronics);

        break;
      case "jewelery":
        setProducts(jewelery);

        break;
      case "men's clothing":
        setProducts(mensClothing);

        break;
      case "women's clothing":
        setProducts(womansClothing);

        break;

      default:
        setProducts(allProducts);
    }
  };

  useEffect(() => {
    categories.map((item) => {
      fetch(`https://fakestoreapi.com/products/category/${item}`)
        .then((res) => res.json())
        .then((json) => {
          if (item === "electronics") {
            setElectronics(json);
          } else if (item === "jewelery") {
            setJewelery(json);
          } else if (item === "men's clothing") {
            setMensClothing(json);
          } else {
            setWomansClothing(json);
          }
        });
    });
  }, [categories]);

  useEffect(() => {
    const allProducts = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setAllProducts(json);
      });

    const allCategories = fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
      });
  }, []);

  const contextValue: ProductsContextType = {
    products,
    categories,
    electronics,
    jewelery,
    mensClothing,
    womansClothing,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    value,
    setValue,
    headerCategoryIndicator,
    selectedProduct,
    setSelectedProduct,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}

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

  const [value, setValue] = useState<number[]>([]);
  const [headerCategoryIndicator, setHeaderCategoryIndicator] =
    useState<string>();

  const [allProductsPrices, setAllProductsPrices] = useState<number[]>([]);
  const [maxPrice, setMaxPrice] = useState(Number);
  const [minPrice, setMinPrice] = useState(Number);

  const [myCart, setMyCart] = useState<Product[]>([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const removeFromCart = (id: number) => {
    const filteredCart = myCart.filter((product) => product.id !== id);
    setMyCart(filteredCart);
  };

  // useEffect(() => {
  //   if (myCart.length === 1) {
  //     setCartTotalPrice(myCart[0].price);
  //   } else {
  //     myCart.map((product) => {
  //       const sum = product.price * product.quantity;
  //       setCartTotalPrice(cartTotalPrice + sum);
  //       console.log("test");
  //     });
  //   }
  // }, [myCart]);

  useEffect(() => {
    setAllProductsPrices(allProducts.map((product) => product.price));
    setMaxPrice(Math.max(...allProductsPrices));
    setMinPrice(Math.min(...allProductsPrices));
    setValue([minPrice, maxPrice]);
  }, [allProducts, maxPrice]);

  const filteredProducts = () => {
    const priceFiltered = allProducts.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );

    setProducts(priceFiltered);
    setHeaderCategoryIndicator(selectedCategory);

    switch (selectedCategory) {
      case "electronics":
        const filteredElectronics = electronics.filter(
          (product) => product.price >= value[0] && product.price <= value[1]
        );
        setProducts(filteredElectronics);

        break;
      case "jewelery":
        const filteredJewelery = jewelery.filter(
          (product) => product.price >= value[0] && product.price <= value[1]
        );
        setProducts(filteredJewelery);

        break;
      case "men's clothing":
        const filteredMensClothing = mensClothing.filter(
          (product) => product.price >= value[0] && product.price <= value[1]
        );
        setProducts(filteredMensClothing);

        break;
      case "women's clothing":
        const filteredWomensClothing = womansClothing.filter(
          (product) => product.price >= value[0] && product.price <= value[1]
        );
        setProducts(filteredWomensClothing);

        break;
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
    maxPrice,
    minPrice,
    myCart,
    setMyCart,
    removeFromCart,
    cartTotalPrice,
    setCartTotalPrice,
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

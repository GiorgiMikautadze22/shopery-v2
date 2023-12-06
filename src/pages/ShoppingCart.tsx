import React from "react";
import ShoppingCartHeader from "../components/ShoppingCartHeader";
import MyShoppingCart from "../components/MyShoppingCart";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

const ShoppingCart = () => {
  return (
    <div>
      <ShoppingCartHeader />
      <MyShoppingCart />
      <Subscription />
      <Footer />
    </div>
  );
};

export default ShoppingCart;

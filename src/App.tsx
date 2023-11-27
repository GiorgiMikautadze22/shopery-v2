import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="single-product" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

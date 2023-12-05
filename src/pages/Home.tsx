import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "5%",
        }}
      >
        <Filter />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import ProductCard from "./ProductCard";
import { useProductContext } from "../Context";
import styled from "styled-components";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
`;

const ProductList = () => {
  const { products } = useProductContext();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <p
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        {products.length} Results Found
      </p>
      <StyledProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledProductList>
    </div>
  );
};

export default ProductList;

import React from "react";
import { Product } from "../Types";
import styled from "styled-components";
import BagIcon from "../Images/Bag (2).svg";
import BasicRating from "./Rating";

interface Props {
  product: Product;
}

const StyledProductCard = styled.div`
  width: 312px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
`;

const ProductInformation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 5px 20px;
  align-items: center;
  margin-top: 10px;
`;

const BagIconBg = styled.div`
  display: flex;
  padding: 7px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f2f2f2;
`;

const ProductCard = ({ product }: Props) => {
  return (
    <StyledProductCard>
      <img
        style={{
          width: "300px",
          height: "300px",
          objectFit: "contain",
          margin: "5px",
        }}
        src={product.image}
        alt="product image"
      />
      <ProductInformation>
        <div>
          <p style={{ fontSize: "14px" }}>{product.title}</p>
          <h4 style={{ fontSize: "16px" }}>${product.price}</h4>
          <BasicRating />
        </div>
        <BagIconBg>
          <img src={BagIcon} alt="bag icon" />
        </BagIconBg>
      </ProductInformation>
    </StyledProductCard>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProductContext } from "../Context";
import { Product } from "../Types";
import MyCartProducts from "./MyCartProducts";
import { useNavigate } from "react-router-dom";

const Table = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding-bottom: 10px;
`;

const Titles = styled.div`
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  gap: 10px;
  margin: 5px 10px;

  p {
    color: #808080;
    font-size: 14px;
    font-weight: 500;
  }
`;

const ReturnToShopButton = styled.div`
  width: 168px;
  height: 45px;
  border-radius: 43px;
  background-color: #f2f2f2;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #00b207;
    transition: 120ms;
  }
`;

const UpdateCart = styled.div`
  width: 150px;
  height: 45px;
  border-radius: 43px;
  background-color: #f2f2f2;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #00b207;
    transition: 120ms;
  }
`;

const ShoppingCartTable = () => {
  const { myCart } = useProductContext();

  const navigate = useNavigate();

  return (
    <Table>
      <Titles>
        <p style={{ marginRight: "300px" }}>PRODUCT</p>
        <p style={{ marginRight: "73px" }}>PRICE</p>
        <p style={{ marginRight: "114px" }}>QUANTITY</p>
        <p style={{ marginRight: "100px" }}>SUBTOTAL</p>
      </Titles>
      {myCart.map((product) => (
        <MyCartProducts product={product} key={product.id} />
      ))}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ReturnToShopButton onClick={() => navigate("/")}>
          Return to shop
        </ReturnToShopButton>
        <UpdateCart>Update Cart</UpdateCart>
      </div>
    </Table>
  );
};

export default ShoppingCartTable;

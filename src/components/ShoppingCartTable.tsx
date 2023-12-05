import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProductContext } from "../Context";
import CloseIcon from "../Images/Close (1).svg";
import { Product } from "../Types";

const Table = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
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

const ShoppingCardProducts = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
`;

const QuantityIndicator = styled.div`
  width: 125px;
  height: 50px;
  border-radius: 170px;
  padding: 8px;
  justify-content: center;
  gap: 15px;
  border: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

const Minus = styled.div<{ quantity: number }>`
  width: 34px;
  height: 34px;
  background-image: url("data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAANwAANwAAQUxQSDEAAAABHyAQSPFomR0REUNp20hSFt3X1PaPtoTr5FiOLozo/wTQ3flkQJkB15y/MgPSBN0NAFZQOCA4AAAAMAQAnQEqOAA4AD7ZWKRMqCUjojHoAQAbCWkAAIrg+d+0EnGTmKUmy5EAAP7y4x/qAZv9aqAAAAA=");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: #f2f2f2;
  background-size: 14px;
  border-radius: 50%;
  cursor: ${(props) => (props.quantity !== 1 ? "pointer" : "not-allowed")};
`;

const Plus = styled.div`
  width: 34px;
  height: 34px;
  background-image: url("data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAANwAANwAAQUxQSEwAAAABHyAQSPFomR0REYNNbFuNHjmJQApIRBoSEEGZOti8bUT/jbZt46JuQzsDD06Sa9WvtfCb4lyEAHlFAWXF7ezK7mT3199U/VqSeG4AVlA4IEgAAABQBACdASo4ADgAPt1apUyopSOiNfF7MRAbiWkAAA6bPChQHexPFwU69nAAAP7yqJBT1XbmzyGT/UIdD+OiuzzZ/IUqR3gAAAA=");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: #f2f2f2;
  background-size: 14px;
  border-radius: 50%;
`;

const ShoppingCartTable = () => {
  const { selectedProduct, myCart } = useProductContext();

  const [quantity, setQuantity] = useState(1);

  return (
    <Table>
      <Titles>
        <p style={{ marginRight: "300px" }}>PRODUCT</p>
        <p style={{ marginRight: "73px" }}>PRICE</p>
        <p style={{ marginRight: "114px" }}>QUANTITY</p>
        <p style={{ marginRight: "100px" }}>SUBTOTAL</p>
      </Titles>
      {myCart.map((product) => (
        <ShoppingCardProducts key={product.id}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
              src={product.image}
              alt=""
            />
            <span style={{ width: "200px" }}>{product.title}</span>
          </div>
          <span
            style={{
              marginLeft: "55px",
              width: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ${product.price}
          </span>
          <QuantityIndicator>
            <Minus
              quantity={quantity}
              onClick={
                quantity !== 1
                  ? ((() =>
                      setQuantity(
                        quantity - 1
                      )) as React.MouseEventHandler<HTMLDivElement>)
                  : undefined
              }
            />
            {quantity} <Plus onClick={() => setQuantity(quantity + 1)} />
          </QuantityIndicator>
          {selectedProduct ? (
            <p
              style={{
                marginLeft: "95px",
                width: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ${quantity * product.price}
            </p>
          ) : null}
          <img style={{ marginLeft: "50px" }} src={CloseIcon} alt="" />
        </ShoppingCardProducts>
      ))}
    </Table>
  );
};

export default ShoppingCartTable;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../Types";
import { useProductContext } from "../Context";
import CloseIcon from "../Images/Close (1).svg";

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
  &:hover {
    transition: 120ms;
    background-size: 36px;
    background-image: url("https://cdn-icons-png.flaticon.com/512/6048/6048601.png");
  }
`;

const Plus = styled.div`
  width: 34px;
  height: 34px;
  background-image: url("data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAANwAANwAAQUxQSEwAAAABHyAQSPFomR0REYNNbFuNHjmJQApIRBoSEEGZOti8bUT/jbZt46JuQzsDD06Sa9WvtfCb4lyEAHlFAWXF7ezK7mT3199U/VqSeG4AVlA4IEgAAABQBACdASo4ADgAPt1apUyopSOiNfF7MRAbiWkAAA6bPChQHexPFwU69nAAAP7yqJBT1XbmzyGT/UIdD+OiuzzZ/IUqR3gAAAA=");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: #f2f2f2;
  background-size: 16px;
  border-radius: 50%;
  cursor: pointer;
  border: none;

  &:hover {
    transition: 120ms;
    background-size: 36px;
    background-image: url("https://cdn1.iconfinder.com/data/icons/color-bold-style/21/04-512.png");
  }
`;

const RemoveFromCartButton = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 50px;
  border-radius: 50%;
  background-image: url("data:image/webp;base64,UklGRqwDAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSLECAAABJyAQSOFmFxERA6xItlU7LyAABSQnEYACaPv3BGuvvfaF/4j+Q3AkN2xDpTippujjHf2JyxnX3fozM3tbVxvtPo2s1y02L9asx3F4HbqgzDDtH7itB+hwAYnvq9Ef7BiRhb/B0+z7qmH+N3r4m070ZNKlJzHeVRs+zOxGTIoGxHYzR6ITAslyRgMKpgETuwRK/6iOruh3TwXV1x0TmmhaFUXqiACOINpQeDQg9CHgHGg24BAimWYnjsGTG9JqqK3/xBjIi/d+SwYzzxscfazZ+XqLeI4jkeSyyQpxS4fzM6FXFMTbG1yubuSQEMlRzIYHkxcF9KpMTDIBRVK0oPTvHNB15I4cfAS6zyvcJnY7B3idU6ER0CAn5YmlLD0ENIik+Evim6DMEggCa55IXtZQ00iX+3k9rGuhQ5boogSbiB4oNuE0onwoL4CGkIu1BGiQl8JLCkgI1TAUKCiHBIhC4JhIIGAdkRwTCST0ZzUkSNRDAUQ9FADcIbY/HCBlj0Lbz8l4Dg8w53t8R792q6EGP/YUeTQoPQUgN+h4uoQSRA2nAZcklACqwasU1ABHpAxKS02Ccp+XClGSWcOak0pKUIopn503qjgpXgsqeSKLULZRvQbUdg6lLDuEc42rcWCkkwMmMu5oqsID3lreEuOmrf7zyv4h0V83DUKPiLNNhKRVEP+UBsEsCHmrQX7c5Ox2E7fd7FkUN3wCmEOzy0XccJtx9uMGZ++9I60Gb52zcBhjdNLSULBvZAx9H80HEzBDd7q1KWCEYHQH4f3Ecx8krdUr+X8pktSrD2YbdaxDI4195IhJ2bGqjj0q8WGhqK6+vfbxaenYQCB7u2rEASo+DhMDzBaL5TzArtEPNg8ZL76jf4OHfAlPJRu68A5zDT+ZzxLpUqZtsVl/UGf57oTrAgBWUDgg1AAAAJAPAJ0BKmAAYAA+qT6ZTKYjIqI/CADAFQlpAToD+gfgAKK98H/wD8AP2A/Knv8RNLim2ZcKZF/CJlIsXFb1Rd5GlhsFR8ReBlu9+jUTsmXJPU/3M9AWPXQd34E0cOlFk1w5OFmvp/bYUoTx9QrTyZRTJmv+L+KJxzofxs9NzilpXB+gpjAA/vB1//8k3/+RrcSpUuUADIe4F8PP//B5/+CIyPog7VgbqhxmIMj4Ov+B8/hCJb/rbdaJgOhT6yP/7gB/8L5sXvCWseRkeE5krPD7cAAA");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 25px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 120ms;
    background-image: url("https://image.similarpng.com/very-thumbnail/2021/05/Red-cross-of-reject-circle-symbol-on-transparent-background-PNG.png");
  }
`;

interface Props {
  product: Product;
}

const MyCartProducts = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const {
    selectedProduct,
    removeFromCart,
    setCartTotalPrice,
    myCart,
    cartTotalPrice,
  } = useProductContext();

  useEffect(() => {
    product.quantity = quantity;
  }, [quantity]);

  useEffect(() => {
    const sum = product.price * product.quantity;

    if (myCart.length === 1) {
      setCartTotalPrice(sum);
    } else {
      setCartTotalPrice(cartTotalPrice + product.price);
    }
  }, [myCart]);

  const increase = () => {
    setQuantity(quantity + 1);
    setCartTotalPrice(cartTotalPrice + product.price);
  };

  const decrease = () => {
    setQuantity(quantity - 1);
    setCartTotalPrice(cartTotalPrice - product.price);
  };

  return (
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
          onClick={quantity !== 1 ? () => decrease() : undefined}
        />
        {quantity}
        <Plus onClick={() => increase()} />
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

      <RemoveFromCartButton onClick={() => removeFromCart(product.id)} />
    </ShoppingCardProducts>
  );
};

export default MyCartProducts;

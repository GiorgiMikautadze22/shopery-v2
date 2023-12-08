import React from "react";
import styled from "styled-components";
import ColorRadioButtons from "./Checkbox";
import { useProductContext } from "../Context";

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  width: 424px;

  h3 {
    font-size: 20px;
  }
`;

const Payments = styled.div`
  padding: 12px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;

  p {
    font-size: 14px;
  }
  h5 {
    font-size: 14px;
  }
`;

const PaymentMethod = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  div {
    display: flex;
  }
  p {
    font-size: 14px;
    cursor: pointer;
  }
`;

const OrderButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #00b207;
  border: none;
  border-radius: 43px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const OrderSummery = () => {
  const { myCart, cartTotalPrice } = useProductContext();

  return (
    <Wrapper>
      <h3>Order Summery</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {myCart.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #CCCCCC",
              paddingBottom: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
                src={product.image}
                alt=""
              />
              <p style={{ fontSize: "14px", maxWidth: "170px" }}>
                {product.title.split(" ").splice(0, 3).join(" ")}
              </p>
              <h5>x{product.quantity}</h5>
            </div>
            <h5>${product.price}</h5>
          </div>
        ))}
      </div>
      <Payments>
        <p>Subtotal:</p>
        <h5>${cartTotalPrice}</h5>
      </Payments>
      <Payments>
        <p>Shipping:</p>
        <h5>Free</h5>
      </Payments>
      <Payments style={{ border: "none" }}>
        <p style={{ fontSize: "16px" }}>Total:</p>
        <h5 style={{ fontSize: "16px" }}>${cartTotalPrice}</h5>
      </Payments>
      <h3>Payment Method</h3>
      <PaymentMethod>
        <ColorRadioButtons />
      </PaymentMethod>
      <OrderButton>Place Order</OrderButton>
    </Wrapper>
  );
};

export default OrderSummery;

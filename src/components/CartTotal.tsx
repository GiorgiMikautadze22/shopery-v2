import React from "react";
import styled from "styled-components";
import { useProductContext } from "../Context";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  padding: 24px;
  border-radius: 8px;
  height: 300px;
`;

const Fees = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  gap: 200px;
  padding: 12px 0px;

  p {
    font-size: 14px;
  }

  span {
    font-size: 14px;
    font-weight: 600;
  }
`;

const CheckoutButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: #00b207;
  border: none;
  border-radius: 43px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const CartTotal = () => {
  const { cartTotalPrice } = useProductContext();

  const navigate = useNavigate();

  return (
    <Wrapper>
      <h3 style={{ fontSize: "20px", marginBottom: "7px" }}>Cart Total</h3>
      <Fees>
        <p>Subtotal:</p>
        <span>${cartTotalPrice.toFixed(2)}</span>
      </Fees>
      <Fees>
        <p>Shipping:</p>
        <span>Free</span>
      </Fees>
      <Fees style={{ border: "none" }}>
        <p>Total:</p>
        <span>${cartTotalPrice.toFixed(2)}</span>
      </Fees>
      <CheckoutButton onClick={() => navigate("/checkout")}>
        Proceed to checkout
      </CheckoutButton>
    </Wrapper>
  );
};

export default CartTotal;

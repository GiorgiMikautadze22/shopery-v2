import React from "react";
import styled from "styled-components";
import { useProductContext } from "../Context";

const Wrapper = styled.div`
  display: flex;
  gap: 100px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #999999;
  font-size: 14px;

  p:hover {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }

  h5 {
    color: white;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

const Navigation = () => {
  const { categories } = useProductContext();
  return (
    <Wrapper>
      <Column>
        <h5>My Account</h5>
        <p>My Account</p>
        <p>Order History</p>
        <p>Shoping Cart</p>
        <p>Wishlist</p>
      </Column>
      <Column>
        <h5>Helps</h5>
        <p>Contact</p>
        <p>Faqs</p>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
      </Column>
      <Column>
        <h5>Proxy</h5>
        <p>About</p>
        <p>Shop</p>
        <p>Product</p>
        <p>Track Order</p>
      </Column>
      <Column>
        <h5>Categories</h5>
        {categories.map((product) => (
          <p key={product}>{product}</p>
        ))}
      </Column>
    </Wrapper>
  );
};

export default Navigation;

import React from "react";
import styled from "styled-components";
import ShoppingCartTable from "./ShoppingCartTable";
import CouponCode from "./CouponCode";
import CartTotal from "./CartTotal";

const MyShoppingCardTag = styled.h2`
  font-size: 32px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const MyShoppingCart = () => {
  return (
    <Wrapper>
      <MyShoppingCardTag>My Shopping Cart</MyShoppingCardTag>
      <div style={{ display: "flex", gap: "20px", marginTop: "32px" }}>
        <div>
          <ShoppingCartTable />
          <CouponCode />
        </div>
        <CartTotal />
      </div>
    </Wrapper>
  );
};

export default MyShoppingCart;

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px;
  margin-top: 24px;
`;

const CodeInput = styled.input`
  width: 450px;
  height: 52px;
  border: 1px solid #e6e6e6;
  border-radius: 46px;
  padding-left: 24px;
  outline: none;
  font-size: 16px;
  position: relative;
  left: 32px;
`;

const CouponButton = styled.button`
  width: 200px;
  height: 52px;
  background-color: #333333;
  border: none;
  border-radius: 43px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  cursor: pointer;

  &:hover {
    transition: 120ms;
    background-color: #00b207;
  }
`;

const CouponCode = () => {
  return (
    <Wrapper>
      <h2>Coupon Code</h2>
      <div>
        <CodeInput type="text" placeholder="Enter code" />
        <CouponButton>Apply Coupon</CouponButton>
      </div>
    </Wrapper>
  );
};

export default CouponCode;

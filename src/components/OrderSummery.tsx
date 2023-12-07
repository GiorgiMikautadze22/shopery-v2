import React from "react";
import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 10px;
  div {
    display: flex;
    gap: 10px;
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
  return (
    <Wrapper>
      <h3>Order Summery</h3>
      <div></div>
      <Payments>
        <p>Subtotal:</p>
        <h5>$84.00</h5>
      </Payments>
      <Payments>
        <p>Shipping:</p>
        <h5>Free</h5>
      </Payments>
      <Payments style={{ border: "none" }}>
        <p style={{ fontSize: "16px" }}>Total:</p>
        <h5 style={{ fontSize: "16px" }}>$84.00</h5>
      </Payments>
      <h3>Payment Method</h3>
      <PaymentMethod>
        <div>
          <input type="checkbox" />
          <p>Cash on Delivery</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Paypal</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Amazon Pay</p>
        </div>
      </PaymentMethod>
      <OrderButton>Place Order</OrderButton>
    </Wrapper>
  );
};

export default OrderSummery;

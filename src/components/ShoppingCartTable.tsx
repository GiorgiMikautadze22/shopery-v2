import React from "react";
import styled from "styled-components";

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

const ShoppingCartTable = () => {
  return (
    <Table>
      <Titles>
        <p>PRODUCT</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SUBTOTAL</p>
      </Titles>
    </Table>
  );
};

export default ShoppingCartTable;

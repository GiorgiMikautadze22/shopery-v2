import React from "react";
import Payment from "../Images/Frame 142.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px;
  border-top: 1px solid #333333;

  p {
    color: #808080;
    font-size: 14px;
  }
`;

const CopyWrite = () => {
  return (
    <Wrapper>
      <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
      <img src={Payment} alt="" />
    </Wrapper>
  );
};

export default CopyWrite;

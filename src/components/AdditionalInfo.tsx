import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 32px;
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    margin-bottom: 14px;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding-left: 16px;
    padding-top: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    font-size: 16px;
    resize: none;
    outline: none;
  }
`;

const AdditionalInfo = () => {
  return (
    <Wrapper>
      <h3>Additional Info</h3>
      <p>Order Notes (Optional)</p>
      <textarea placeholder="Notes about your order, e.g. special notes for delivery" />
    </Wrapper>
  );
};

export default AdditionalInfo;

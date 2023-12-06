import React from "react";
import styled from "styled-components";
import FooterContact from "./FooterContact";
import Navigation from "./Navigation";
import CopyWrite from "./CopyWrite";

const Wrapper = styled.div`
  margin-top: 40px;
  background-color: #333333;
  display: flex;
  align-items: center;
  padding: 0px 200px;
  width: 100%;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterContact />
      <Navigation />
      <CopyWrite />
    </Wrapper>
  );
};

export default Footer;

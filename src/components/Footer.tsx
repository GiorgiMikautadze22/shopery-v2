import React from "react";
import styled from "styled-components";
import FooterContact from "./FooterContact";
import Navigation from "./Navigation";
import CopyWrite from "./CopyWrite";

const Wrapper = styled.div`
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 200px;
  width: 100%;
`;

const Footer = () => {
  return (
    <Wrapper>
      <div style={{ padding: "60px 0px", display: "flex", gap: "120px" }}>
        <FooterContact />
        <Navigation />
      </div>
      <CopyWrite />
    </Wrapper>
  );
};

export default Footer;

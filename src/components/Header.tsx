import React from "react";
import styled from "styled-components";
import HeaderBackground from "../Images/Breadcrumbs.svg";
import HomeIcon from "../Images/home-1 1 (1).svg";
import ArrowIcon from "../Images/Vector (3).svg";
import { useProductContext } from "../Context";
import { Product } from "../Types";

const StyledHeader = styled.div`
  display: flex;
  background-image: url(${HeaderBackground});
  /* background-size: 100%; // after image size exeeds 1920px */
  background-repeat: no-repeat;
  background-position: 100% 0%;
  width: 100%;
  height: 120px;
  padding-left: 300px;
  gap: 10px;
  align-items: center;
`;

interface Props {
  selectedProduct?: Product;
  headerShoppingCartIndicator?: string;
}

const Header = ({ selectedProduct, headerShoppingCartIndicator }: Props) => {
  const { headerCategoryIndicator } = useProductContext();
  return (
    <StyledHeader>
      <img style={{ width: "24px", height: "24px" }} src={HomeIcon} alt="" />
      <img style={{ width: "10px", height: "10px" }} src={ArrowIcon} alt="" />

      {headerShoppingCartIndicator ? (
        <h3 style={{ color: "#00B207", fontSize: "16px", fontWeight: 400 }}>
          {headerShoppingCartIndicator}
        </h3>
      ) : (
        <h3 style={{ color: "#999999", fontSize: "16px", fontWeight: 400 }}>
          Categories
        </h3>
      )}

      {headerCategoryIndicator ? (
        <>
          <img
            style={{ width: "10px", height: "10px" }}
            src={ArrowIcon}
            alt=""
          />
          <h3
            style={{
              color: "#00B207",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {headerCategoryIndicator}
          </h3>
        </>
      ) : null}
      {selectedProduct ? (
        <>
          <img
            style={{ width: "10px", height: "10px" }}
            src={ArrowIcon}
            alt=""
          />
          <h3
            style={{
              color: "#00B207",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {selectedProduct.title}
          </h3>
        </>
      ) : null}
    </StyledHeader>
  );
};

export default Header;

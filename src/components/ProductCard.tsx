import React from "react";
import { Product } from "../Types";
import styled from "styled-components";
import BagIcon from "../Images/Bag (2).svg";
import BasicRating from "./Rating";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../Context";

interface Props {
  product: Product;
}

const StyledProductCard = styled.div`
  width: 312px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
    transition: 120ms;
    box-shadow: 0px 0px 7px 0px #00b207;
  }
`;

const ProductInformation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 5px 20px;
  align-items: center;
  margin-top: 10px;
`;

const BagIconBg = styled.div`
  display: flex;
  padding: 7px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f2f2f2;
  background-image: url("data:image/webp;base64,UklGRrgBAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSCQBAAABJyAQSOFmFxERA+zItts2j6EABRQAYVCAAgpIp/+mLL6H5/wZ0f8JkH/UW0qXz3DqAHlxOw3elsWrc5id7ig3n/EhpQ/FJQJ5ETl1YPVoUBYRkdOA4DFgk7d3KA4RihwOWOfdYT+qsM1rsB5FCPM6iBKyR9Z0Dyz8T91SSlCSckBK6WJqTA+WMa9YcPwi0WM1bSKQRdlB5G66wzonwqarHrtJ5oipeQRd98iWPKtbOAiadoAliMhg11SKiDTbLiL3smhOYxORaojvplZYDdusu+EO66wIm6b67AaZbmg+QdN9si7P6zp80IV5zbLPq6rotaq2eXfVHdZ5Ebaj6rWrxFHVvMJR98qa7NE1eKEJHk2Xk2NXRNzX7+rkt7yTW3K+yL8mVlA4IG4AAAAwBwCdASpQAFAAPtlYokyoJSMiOFDdUQAbCWkAFtoATQXAnFwKW3UBx19YIzTLQ8KKEbw6XG7/GK8sZKGRTWkmlwAA/vLoZufce8xSwAf8V1utR78H8cdfpf+XFNmV4nv2HMuF11i+woI+RgAAAA==");
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 50% 50%;

  &:hover {
    background-color: #00b207;
    transition: 140ms;
    transform: scale(1.2);
    background-image: url("data:image/webp;base64,UklGRs4BAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSCQBAAABJyAQSOFmFxERA+zItts2j6EABRQAYVCAAgpIp/+mLL6H5/wZ0f8JkH/UW0qXz3DqAHlxOw3elsWrc5id7ig3n/EhpQ/FJQJ5ETl1YPVoUBYRkdOA4DFgk7d3KA4RihwOWOfdYT+qsM1rsB5FCPM6iBKyR9Z0Dyz8T91SSlCSckBK6WJqTA+WMa9YcPwi0WM1bSKQRdlB5G66wzonwqarHrtJ5oipeQRd98iWPKtbOAiadoAliMhg11SKiDTbLiL3smhOYxORaojvplZYDdusu+EO66wIm6b67AaZbmg+QdN9si7P6zp80IV5zbLPq6rotaq2eXfVHdZ5Ebaj6rWrxFHVvMJR98qa7NE1eKEJHk2Xk2NXRNzX7+rkt7yTW3K+yL8mVlA4IIQAAAAwCQCdASpQAFAAPrU8mUynIyKiPX9IAOAWiWkAFtY+AP4B+AH6S/n73+HvLgTjnLEbocZTwSJJZoGBl5QoUVPCempn19O7yI1AtmfEN4CivgMAAP7144Xg/0+WNH0+RXpaTv+gF/pkr//9jC9K36DB9wQhs+olf/05v/6W+//6Ugq9YAA=");
  }
`;

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();
  const { setSelectedProduct } = useProductContext();

  const viewProduct = (currentProduct: Product) => {
    setSelectedProduct(currentProduct);

    navigate("/single-product");
  };

  return (
    <StyledProductCard>
      <img
        onClick={() => viewProduct(product)}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "contain",
          margin: "5px",
        }}
        src={product.image}
        alt="product image"
      />
      <ProductInformation>
        <div>
          <p style={{ fontSize: "14px" }}>
            {product.title.split(" ").slice(0, 3).join(" ")}
          </p>
          <h4 style={{ fontSize: "16px" }}>${product.price}</h4>
          <BasicRating />
        </div>
        <BagIconBg />
      </ProductInformation>
    </StyledProductCard>
  );
};

export default ProductCard;

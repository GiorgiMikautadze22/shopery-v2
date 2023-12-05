import React from "react";
import Header from "../components/Header";
import { useProductContext } from "../Context";
import styled from "styled-components";
import WhiteBagIcon from "../Images/Rectangle (1).svg";
import { useNavigate } from "react-router-dom";

const CurrentProduct = styled.div`
  display: flex;
  gap: 100px;
  margin-top: 100px;
  justify-content: center;
`;

const CurrentProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  width: 650px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e6e6e6;
`;

const AddToCartButton = styled.div`
  width: 450px;
  height: 50px;
  border-radius: 43px;
  border: none;
  background-color: #00b207;
  color: white;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transform: scale(1.03);
    transition: 120ms;
  }
`;

const LikeButton = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #e6e6e6;
  background-image: url("data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSOIBAAABJyAQSOFmFxERA6zatlU3IQElASEBJQFJev17epvOueXPiP4zlGQlCNZQgvh4j69Y/YfW/rjOdnfc9Ox1jDHeNwHsB3GcPCPC0fWo9gIYAnhprehtLMsfeROO4lm+09quVs+E4Z/RrmNZEfldAeOp3jsfDZDBPd5sK3j5IoxDgv9A4Ddx7oVfIzLQZtcKBvP8DsKoBf1udFaFrCcuS85YRJETT5RQxIoaeFcXipjFAdxS+p10DjzFTFD7jNdYo/Q2PMbTOcLQoZAIcFeAttXMMQDj6LSX6QBDJiIdKwJIhOGyOdOzOInMhlWJOAjDcEwZL/pT7PMKfZK+nzoHenzOtObnzSnGmnM/Y1aP5XBw8iRqW+mnybHHbXIZApMRuRWJDMxFfFAGApORYfe2lcuoJMDfmX/MiUHg78Q/wTuTvcMFJvul63uMZ+odErfFJWepKSZ3s0FF7Iqu6ZWJyrV9gTe5BpwKMKcnm04c2ysRu3aZBe2ucq5dZlXZ6rh1Adl87YimQmzkl93JVgtHgy3Zins2lU32z263SqEGEY9qLyVNFbGCXXuKtLeOCLUkPZzpbin8paFir1dQCiwVUsVejte20rKmcqaTwq16aX8FYQuZ5wo0KvRlhrCf9CzvP2CtAFZQOCA6AQAAcAkAnQEqUABQAD7JVJ9Mp6UiojhWvVDwGQloAxgA+dMB1Wn6sfAJnB9vV//+hpfWQoREAjpAe2dspnqQFukg0dVRS3LuMV5sAvcvc5DQlZQBVk7QAP7w68//9+XSwZT+5/avIp+Chhp4fxP//+9cZYqLLE/DgH7uCgMVhWb2Kb/1AVw0Vz31wSIXWRZUnUFQ6fRpKSXUJaMVH8ZvF/vE89H7YMvlV3pyMLBo/0ythv4SGoWcs8xGixg9j54rLIM5v2PYpzIO2OcapfP3Z5+pSUtp76MUpCkOsIpGctgnytlsE7qoeBWPc3f7QfmUrdlJnFWUaYRMH3kvii3Ntb+60p9MnI1w5hwd92fxv/2VSKWW4T2AsX/cb5sLtJopF4IDF/yRSgz5tz6U/kd//m5nKthezKxTZ5DgAAA=");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 25px;
  cursor: pointer;

  &:hover {
    background-color: #fd5858e2;
    transition: 120ms;
    transform: scale(1.05);
    box-shadow: 0px 0px 5px 2px #ff8282;
  }
`;

const SingleProduct = () => {
  const { selectedProduct, myCart, setMyCart } = useProductContext();
  const navigate = useNavigate();
  const AddToCart = () => {
    navigate("/shopping-cart");
    if (selectedProduct) {
      setMyCart([...myCart, selectedProduct]);
    }
  };

  return (
    <div>
      <Header selectedProduct={selectedProduct} />
      <CurrentProduct>
        <img
          style={{ width: "300px", objectFit: "contain" }}
          src={selectedProduct?.image}
          alt=""
        />
        <CurrentProductInformation>
          <h2 style={{ fontSize: "36px", fontWeight: 600 }}>
            {selectedProduct?.title}
          </h2>
          <h3
            style={{ fontSize: "24px", fontWeight: "600", color: " #2C742F" }}
          >
            ${selectedProduct?.price}
          </h3>
          <Line />
          <p style={{ fontSize: "16px", fontWeight: 400, color: "#808080" }}>
            {selectedProduct?.description}
          </p>
          <Line />
          <div style={{ display: "flex", gap: "12px" }}>
            <AddToCartButton onClick={AddToCart}>
              Add to Cart
              <img src={WhiteBagIcon} alt="" />
            </AddToCartButton>
            <LikeButton />
          </div>
          <Line />
          <p style={{ color: "#808080" }}>
            <span style={{ fontWeight: 600, color: "black" }}>Category: </span>
            {selectedProduct?.category}
          </p>
        </CurrentProductInformation>
      </CurrentProduct>
    </div>
  );
};

export default SingleProduct;

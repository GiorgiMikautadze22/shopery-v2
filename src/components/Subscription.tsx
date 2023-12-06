import React from "react";
import styled from "styled-components";
import FacebookIcon from "../Images/Social Media.svg";
import TweeterIcon from "../Images/Social Media (1).svg";
import PinterestIcon from "../Images/pinterest 1.svg";
import InstagramIcon from "../Images/Social Media (2).svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 200px;
  margin-top: 80px;
  background-color: #f7f7f7;
  width: 100%;
  align-items: center;
`;

const SubscriptionInput = styled.input`
  width: 450px;
  height: 52px;
  border: 1px solid #e6e6e6;
  border-radius: 46px;
  padding-left: 24px;
  font-size: 16px;
  outline: none;
`;

const SubscriptionButton = styled.button`
  width: 162px;
  height: 52px;
  border-radius: 43px;
  border: none;
  background-color: #00b207;
  color: white;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  right: 60px;
  cursor: pointer;

  &:hover {
    transition: 120ms;
    opacity: 0.7;
  }
`;

const Subscription = () => {
  return (
    <Wrapper>
      <div>
        <h4 style={{ fontSize: "24px" }}>Subcribe our Newsletter</h4>
        <p style={{ fontSize: "14px", color: "#999999", width: "450px" }}>
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <SubscriptionInput type="text" placeholder="Your email address" />
          <SubscriptionButton>Subscribe</SubscriptionButton>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "8px",
          }}
        >
          <img src={FacebookIcon} alt="facebook icon" />
          <img src={TweeterIcon} alt="tweeter icon" />
          <img src={PinterestIcon} alt="pinterest icon" />
          <img src={InstagramIcon} alt="instagram icon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Subscription;

import React from "react";
import styled from "styled-components";
import ArrowIcon from "../Images/Chevron Down.svg";
import PhoneCall from "../Images/PhoneCall 1 (1).svg";

const Navigation = styled.div`
  display: flex;
  gap: 30px;

  p {
    color: #666666;
    font-weight: 500;
    font-size: 14px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 200px;
  border-top: 1px solid #e5e5e5;
  margin: 20px 0px;
  padding-top: 25px;
`;

const ContactSection = () => {
  return (
    <Wrapper>
      <Navigation>
        <Flex>
          <p>Home</p>
          <img src={ArrowIcon} alt="arrow icon" />
        </Flex>
        <Flex>
          <p>Shop</p>
          <img src={ArrowIcon} alt="arrow icon" />
        </Flex>
        <Flex>
          <p>Pages</p>
          <img src={ArrowIcon} alt="arrow icon" />
        </Flex>
        <Flex>
          <p>Blog</p>
          <img src={ArrowIcon} alt="arrow icon" />
        </Flex>
        <Flex>
          <p>About Us</p>
        </Flex>
        <Flex>
          <p>Contact Us</p>
        </Flex>
      </Navigation>
      <Flex>
        <img src={PhoneCall} alt="" />
        <p>(219) 555-0114</p>
      </Flex>
    </Wrapper>
  );
};

export default ContactSection;

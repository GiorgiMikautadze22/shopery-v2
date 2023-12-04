import React from "react";
import styled from "styled-components";
import MapPinIcon from "../Images/Map Pin (1).svg";
import Arrow from "../Images/Group (1).svg";

const BlackBg = styled.div`
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  color: #b3b3b3;
  padding: 10px 200px;
`;

const Flex = styled.div`
  display: flex;
  gap: 10px;
`;

const LocationAndAuthentication = () => {
  return (
    <BlackBg>
      <Flex>
        <img src={MapPinIcon} alt="" />
        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
      </Flex>
      <Flex>
        <Flex>
          <p>Eng</p>
          <img src={Arrow} alt="" />
        </Flex>
        <Flex>
          <p>USD</p>
          <img src={Arrow} alt="" />
        </Flex>
        <div>|</div>
        <Flex>
          <p>Sign In</p>/<p>Sign Up</p>
        </Flex>
      </Flex>
    </BlackBg>
  );
};

export default LocationAndAuthentication;

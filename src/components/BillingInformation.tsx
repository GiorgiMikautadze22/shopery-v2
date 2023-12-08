import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  gap: 16px;

  p {
    font-size: 14px;
    margin-bottom: 8px;
  }

  input {
    width: 280px;
    height: 50px;
    padding-left: 16px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #e6e6e6;
  }

  select {
    width: 280px;
    height: 50px;
    padding-left: 16px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #e6e6e6;
  }
`;

const StreetAddress = styled.div`
  p {
    font-size: 14px;
    margin-bottom: 8px;
  }
  input {
    height: 50px;
    padding-left: 16px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #e6e6e6;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 872px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 32px;
`;

const Checkbox = styled.div`
  display: flex;
  gap: 10px;
  p {
    font-size: 14px;
    cursor: pointer;
  }
`;

const BillingInformation = () => {
  return (
    <Wrapper>
      <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Billing Information
      </h3>
      <Flex>
        <div>
          <p>First name</p>
          <input type="text" placeholder="Your first name" />
        </div>
        <div>
          <p>Last name</p>
          <input type="text" placeholder="Your last name" />
        </div>
        <div>
          <p>Company Name (optional)</p>
          <input type="text" placeholder="Company name" />
        </div>
      </Flex>
      <StreetAddress>
        <p>Street Address</p>
        <input type="text" placeholder="Email" />
      </StreetAddress>
      <Flex>
        <div>
          <p>Country / Region</p>
          <select>
            <option>Select Country</option>
            <option value="country1">Country 1</option>
            <option value="country2">Country 2</option>
          </select>
        </div>
        <div>
          <p>States</p>
          <select>
            <option>Select State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
          </select>
        </div>
        <div>
          <p>Zip Code</p>
          <input type="text" placeholder="Zip Code" />
        </div>
      </Flex>
      <Flex>
        <div>
          <p>Email</p>
          <input
            type="text"
            placeholder="Email Address"
            style={{ width: "428px" }}
          />
        </div>
        <div>
          <p>Phone</p>
          <input
            type="text"
            placeholder="Phone number"
            style={{ width: "428px" }}
          />
        </div>
      </Flex>
      <Checkbox>
        <input
          style={{
            width: "20px",
            height: "20px",
          }}
          type="checkbox"
        />
        <p>Ship to a different address</p>
      </Checkbox>
    </Wrapper>
  );
};

export default BillingInformation;

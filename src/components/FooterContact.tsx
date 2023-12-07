import React from "react";
import FooterLogo from "../Images/Logo (4).svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 336px;
  gap: 16px;
`;

const FooterContact = () => {
  return (
    <Wrapper>
      <img style={{ width: "183px", height: "40px" }} src={FooterLogo} alt="" />
      <p style={{ color: "#808080", fontSize: "14px" }}>
        Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui,
        eget bibendum magna congue nec.
      </p>
      <div style={{ display: "flex", gap: "16px", color: "#808080" }}>
        <span style={{ borderBottom: "2px solid #20B526", color: "white" }}>
          (219) 555-0114
        </span>
        or
        <span
          style={{
            borderBottom: "2px solid #20B526",
            color: "white",
            paddingBottom: "5px",
          }}
        >
          Proxy@gmail.com
        </span>
      </div>
    </Wrapper>
  );
};

export default FooterContact;

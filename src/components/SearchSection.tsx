import React from "react";
import Logo from "../Images/Logo (3).svg";
import HeartIcon from "../Images/Heart (2).svg";
import BagIcon from "../Images/Bag (2).svg";
import styled from "styled-components";
import SearchIcon from "../Images/Search (1).svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 200px;
  align-items: center;
  margin-top: 25px;
`;

const Search = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 6px 0px 0px 6px;
  padding-left: 35px;
  border: 1px solid #e6e6e6;
  background-image: url("data:image/webp;base64,UklGRkQCAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSK4BAAABJyAQSOFmFxERA+QAbNtGbgNcGyBtgGsDpHD/nQJSAJT+jOi/Awdo48bpRK52GHjF8CqNzTEith/dtY5m7Ma++g02pp7CW5d5fiIu86xC1r9bp3Pl16f8eOXw5dWhUJ9E79bH38pvZN0XsLDw5mq6kGxm5Y4H3+m9VKABRTq5aAmyNck5ezMkzd7kOm13NM3m1BquWx7lUr+9eNGoKggzvaDv0Z44oWEzeHOhaNaEDikrv0kNUroqvepXvQM0qGogJQSDw1SmctO8qKrJhetwTyklqEpIwWXLSwwMluUaB6dury60jbrYazQVPb5d1N+eXClGKj28VIe8K7jdkXvlzuzaphw44FOubSDO2xIXqWApBJdJHFBDIayyBwfeCQw1iHhr6KV0z6WzrmzEAQxy3oasmkqCxkpaLZOLx9mQyiDzEyRuIgoQQUpVXHIA/0B55B7i4UB5yBw/Gyrvj1KbwGCg9GoYbTd5o+h5yhxZKVLj8+wcBS4Zq8bGAj1PK2UFK5hHdgomCXbS18f6gYwEB29jMxUWHLqGAH9ImC4Gy4Ug6zJgL5wcnWP+yowBVlA4IHAAAABwBwCdASpQAFAAPtlWpEyoJKOiPBDIAQAbCWkDJQZ5LYf+UBfkooPsCLKDSiQWviujWoVaRUnSd2J2whFXfl3z728mwAD+8jhG+uhwW7uOrJc/qmJ1dSu6m4DjbuYJKOhtG98Cv0N6OXrm8qJSlxgA");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 3% 50%;
  outline: none;
`;

const SearchButton = styled.button`
  background-color: #00b207;
  color: white;
  border: none;
  border-radius: 0px 6px 6px 0px;
  height: 45px;
  width: 100px;
`;

const VerticalLine = styled.div`
  width: 2px;
  height: 50px;
  background-color: #cccccc;
`;

const SearchSection = () => {
  return (
    <Wrapper>
      <img src={Logo} alt="" />
      <div>
        <Search type="text" placeholder="Search" />
        <SearchButton>Search</SearchButton>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <img src={HeartIcon} alt="heart icon" />
        <VerticalLine />
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            style={{ width: "34px", height: "34px" }}
            src={BagIcon}
            alt="bag icon"
          />
          <div>
            <p style={{ color: "#4D4D4D", fontSize: "13px" }}>Shopping cart:</p>
            <label style={{ fontWeight: "bold" }}>$57.00</label>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchSection;

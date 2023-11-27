import React from "react";
import styled from "styled-components";
import FilterIcon from "../Images/Filter 24px (1).svg";
import { useProductContext } from "../Context";
import RangeSlider from "./RangeSlider";

const FilterButton = styled.button`
  width: 130px;
  height: 45px;
  border-radius: 43px;
  background-color: #00b207;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Line = styled.div``;

const Filter = () => {
  const { categories } = useProductContext();
  return (
    <div>
      <FilterButton>
        Filter
        <img src={FilterIcon} alt="filter icon" />
      </FilterButton>
      <h2>All Categories</h2>
      {categories.map((category) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <input type="checkbox" />
          <p>{category}</p>
        </div>
      ))}

      <Line />
      <h2>Price</h2>
      <RangeSlider />
      <p>
        Price: <label> 50 - 1500</label>
      </p>
    </div>
  );
};

export default Filter;

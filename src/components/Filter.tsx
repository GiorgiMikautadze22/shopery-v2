import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilterIcon from "../Images/Filter 24px (1).svg";
import { useProductContext } from "../Context";
import RangeSlider from "./RangeSlider";
import { Product } from "../Types";

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

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e6e6e6;
`;

const Filter = () => {
  const {
    categories,
    electronics,
    jewelery,
    mensClothing,
    womansClothing,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    value,
  } = useProductContext();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <FilterButton onClick={() => filteredProducts()}>
        Filter
        <img src={FilterIcon} alt="filter icon" />
      </FilterButton>
      <h2 style={{ cursor: "pointer" }} onClick={() => setSelectedCategory("")}>
        All Categories
      </h2>
      {categories.map((category) => (
        <div key={category} style={{ display: "flex", gap: "10px" }}>
          <input
            type="checkbox"
            checked={selectedCategory === category}
            onChange={() => setSelectedCategory(category)}
          />
          <p style={{ cursor: "pointer" }}>{category}</p>
          {category === "electronics" ? (
            <p>({electronics.length})</p>
          ) : category === "jewelery" ? (
            <p>({jewelery.length})</p>
          ) : category === "men's clothing" ? (
            <p>({mensClothing.length})</p>
          ) : category === "women's clothing" ? (
            <p>({womansClothing.length})</p>
          ) : null}
        </div>
      ))}

      <Line />
      <h2>Price</h2>
      <RangeSlider />
      <p>
        Price:{" "}
        <span style={{ fontWeight: "600", marginTop: "10px" }}>
          {value[0]} - {value[1]}
        </span>
      </p>
      <Line />
    </div>
  );
};

export default Filter;

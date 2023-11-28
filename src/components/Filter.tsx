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

const Line = styled.div``;

const Filter = () => {
  const { categories, electronics, jewelery, mensClothing, womansClothing } =
    useProductContext();

  // const [electronics, setElectronics] = useState<Product[]>([]);
  // const [jewelery, setJewelery] = useState<Product[]>([]);
  // const [mensClothing, setMensClothing] = useState<Product[]>([]);
  // const [womansClothing, setWomansClothing] = useState<Product[]>([]);

  // useEffect(() => {
  //   categories.map((item) => {
  //     fetch(`https://fakestoreapi.com/products/category/${item}`)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         if (item === "electronics") {
  //           setElectronics(json);
  //         } else if (item === "jewelery") {
  //           setJewelery(json);
  //         } else if (item === "men's clothing") {
  //           setMensClothing(json);
  //         } else {
  //           setWomansClothing(json);
  //         }
  //       });
  //   });
  // }, [categories]);

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
        Price: <label> 50 - 1500</label>
      </p>
    </div>
  );
};

export default Filter;

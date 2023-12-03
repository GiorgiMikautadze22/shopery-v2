import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useProductContext } from "../Context";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const { value, setValue } = useProductContext();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color="primary"
      />
    </Box>
  );
}

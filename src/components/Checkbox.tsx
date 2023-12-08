import * as React from "react";
import Radio from "@mui/material/Radio";

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ alignItems: "center" }}>
        <Radio {...controlProps("Cash on Delivery")} color="success" />
        <p>Cash on Delivery</p>
      </div>
      <div style={{ alignItems: "center" }}>
        <Radio {...controlProps("Paypal")} color="success" />
        <p>Paypal</p>
      </div>
      <div style={{ alignItems: "center" }}>
        <Radio {...controlProps("Amazon Pay")} color="success" />
        <p>Amazon Pay</p>
      </div>
    </div>
  );
}

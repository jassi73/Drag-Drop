import { Stack, TextField } from "@mui/material";

import SelectTextFields from "./TextField";
import { useState } from "react";

const Product = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="container">
      <Stack className="productPicker">{props.task}</Stack>
      <div className="discount">
        {isClicked ? (
          <div className="discountInput">
            <TextField variant="filled"></TextField>
            {/* <input type="select" placeholder="%off" /> */}
            <SelectTextFields />
          </div>
        ) : (
          <button onClick={() => setIsClicked(true)}>Add Discount</button>
        )}
      </div>
    </div>
  );
};
export default Product;

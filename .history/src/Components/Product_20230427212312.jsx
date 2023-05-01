import { Stack, TextField, Typography } from "@mui/material";

import SelectTextFields from "./TextField";
import { useState } from "react";

const Product = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="container">
      <Stack
        direction="row"
        sx={{
          border: "1px solid lightgrey",
          borderRadius: "2px",
          padding: "8px",
          marginBottom: "8px",
          width: "30%",
          justifyContent: "space-between",
        }}
      >
        <Typography>{props.task}</Typography>

        <Stack>✏️</Stack>
      </Stack>
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

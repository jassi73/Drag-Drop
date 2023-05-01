import { Stack, TextField, Typography } from "@mui/material";

import SelectProductModal from "./Modal/SelectProductModal";
import SelectTextFields from "./TextField";
import { useState } from "react";

const Product = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSelectProductModal, setIsSelectProductModal] = useState(false);
  console.log("jassi", isSelectProductModal);
  const openSelectProductModal = () => {
    setIsSelectProductModal(true);
  };
  const handleClose = () => {
    setIsSelectProductModal(false);
    console.log("called");
  };

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

        <Stack sx={{ cursor: "pointer" }} onClick={openSelectProductModal}>
          ✏️
        </Stack>
      </Stack>
      <div className="discount">
        {isClicked ? (
          <div className="discountInput">
            <TextField variant="filled"></TextField>
            <SelectTextFields />
          </div>
        ) : (
          <button onClick={() => setIsClicked(true)}>Add Discount</button>
        )}
      </div>
      <SelectProductModal
        isSelectProductModal={isSelectProductModal}
        handleClose={handleClose}
      />
    </div>
  );
};
export default Product;

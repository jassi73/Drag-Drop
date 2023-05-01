import SelectTextFields from "./TextField";
import Stack from "@mui/joy/Stack";
import { useState } from "react";

const Product = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Stack className="container">
      <div className="productPicker">{props.task}</div>
      <div className="discount">
        {isClicked ? (
          <div className="discountInput">
            <input placeholder="10" />
            <SelectTextFields />
          </div>
        ) : (
          <button onClick={() => setIsClicked(true)}>Add Discount</button>
        )}
      </div>
    </Stack>
  );
};
export default Product;

import SelectTextFields from "./TextField";
import { TextField } from "@mui/material";
import { useState } from "react";

const Product = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="container">
      <div className="productPicker">{props.task}</div>
      <div className="discount">
        {isClicked ? (
          <div className="discountInput">
            <input placeholder="10" />
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

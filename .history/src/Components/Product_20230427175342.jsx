import { useState } from "react";

const Product = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="container">
      <div className="productPicker">{props.task}</div>
      <div className="discount">
        {isClicked ? (
          <div className="discountInput">
            <input placeholder="" />
            <input placeholder="%off" />
          </div>
        ) : (
          <button onClick={() => setIsClicked(true)}>Add Discount</button>
        )}
      </div>
    </div>
  );
};
export default Product;

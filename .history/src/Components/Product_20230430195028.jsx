import React from "react";
import Options from "./Options";

const Product = ({ product, updateVarientState, varientState }) => {
  return (
    <ul>
      <li className="product">
        <Checkbox
          // {...label}
          // defaultChecked
          className="checkmark"
          onChange={(e) => 
                updateVarientState(
               product.id,
               product.title,
               !varientState?.selected,
               !varientState?.selected ? product.variants : []
             )
           }}
          sx={{
            "&.Mui-checked": {
              color: "#008060",
            },
          }}
        />
        <img src={product?.image?.src} height="43" width="30" alt="img" />
        <span>{product?.title}</span>
      </li>
      {product?.variants &&
        product?.variants.length > 0 &&
        product?.variants.map((data, index) => {
          console.log("checked", dataa?.id);
          return (
               <Options
               key={data.id}
               data={data}
               toggleOptionselected={toggleOptionselected}
               optionState={varientState?.options?.find(
                 (val) => val.id === option.id
               )}
             />
          );
        })}
    </ul>
  );
};

export default Product;

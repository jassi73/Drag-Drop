import React from "react";

const Product = ({}) => {
  return (
    <ul>
      <li className="variantShow">
        <div className="variantInner">
          <Checkbox
            {...label}
            // defaultChecked
            className="checkmark"
            checked={data?.product_id === dataa[0]?.id}
            onChange={(e) => variantHandleChange(e, item, data)}
            sx={{
              "&.Mui-checked": {
                color: "#008060",
              },
            }}
          />

          <span>{data?.title}</span>
        </div>
        <div className="variantInner1">
          <span>{data?.price}</span>
          <span>{data?.inventory_quantity}</span>
        </div>
      </li>
    </ul>
  );
};

export default Product;

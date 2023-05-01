import React from "react";

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
               !varientState?.selected ? product.option_values : []
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
            <ul key={index}>
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
        })}
    </ul>
  );
};

export default Product;

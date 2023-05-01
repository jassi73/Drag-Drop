import { Checkbox } from "@mui/material";
import React from "react";

const Options = ({ data, toggleOptionselected, optionState }) => {
     console.log("optionstate", optionState)
  return (
    <ul>
      <li className="variantShow">
        <div className="variantInner">
          <Checkbox
            //   {...label}
            // defaultChecked
            className="checkmark"
            checked={optionState}
            onChange={() => toggleOptionselected(data, !optionState)}
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

export default Options;

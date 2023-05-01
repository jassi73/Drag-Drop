import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  TextField,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const SelectProductModal = ({ isSelectProductModal, handleClose, data }) => {
  const theme = useTheme();
  const [dataa, setDataa] = useState([]);
  const [isProductSelected, setProductSelected] = useState(false);
  const [isVariantSelected, setIsVariantSelected] = useState({
    checked: false,
    id: "",
  });
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const addProductToList = (e, item) => {
    const { checked } = e.target;
    const array = [];
    let selectedProduct = {};
    if (checked) {
      setProductSelected(checked);
      console.log(item);
      selectedProduct["id"] = item?.id;
      selectedProduct["title"] = item?.title;
      selectedProduct["variant"] = item?.variants;
      array.push(selectedProduct);
      setDataa([selectedProduct]);
      selectedProduct = {};
    } else {
      console.log("nothing");
    }
    console.log("selected product", selectedProduct, array);
  };

  const variantHandleChange = (e, item, data) => {
    const { checked } = e.target;
    if (isProductSelected) {
      setIsVariantSelected({
        ...isVariantSelected,
        checked: checked,
        id: data?.id,
      });
    } else {
      setProductSelected(true);
    }
  };
  console.log("dataa", dataa);
  return (
    <Dialog
      fullScreen={fullScreen}
      open={isSelectProductModal}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Choose Products"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className="inputBox">
            <img src="searchIcon.png" className="inputBoxIcon" alt="" />
            <input type="text" placeholder="Search products" />
          </div>
          <div className="productVariant">
            {data &&
              data.length &&
              data.map((item, i) => (
                <ul key={i}>
                  <li className="product">
                    <input
                      type="checkbox"
                      className="checkmark"
                      onChange={(e) => addProductToList(e, item)}
                    />
                    <img
                      src={item?.image?.src}
                      height="43"
                      width="30"
                      alt="img"
                    />
                    <span>{item?.title}</span>
                  </li>
                  {item?.variants &&
                    item?.variants.length > 0 &&
                    item?.variants.map((data, index) => (
                      <ul key={index}>
                        <li className="variantShow">
                          <div className="variantInner">
                            <input
                              type="checkbox"
                              checked={
                                isProductSelected ||
                                isVariantSelected?.id === data?.id
                              }
                              onChange={(e) =>
                                variantHandleChange(e, item, data)
                              }
                            />
                            <span>{data?.title}</span>
                          </div>
                          <div className="variantInner1">
                            <span>{data?.price}</span>
                            <span>{data?.inventory_quantity}</span>
                          </div>
                        </li>
                      </ul>
                    ))}
                </ul>
              ))}

            {/* <ul>
              <li className="product">
                <input type="checkbox" />
                <img src="Vector.png" height="15" width="15" alt="img" />
                <span>Product 1</span>
              </li>
              <ul>
                <li className="variantShow">
                  <div className="variantInner">
                    <input type="checkbox" />
                    <span>Test1</span>
                  </div>
                  <div className="variantInner1">
                    <span>Stock</span>
                    <span>available</span>
                  </div>
                </li>
                <li className="variantShow">
                  <div className="variantInner">
                    <input type="checkbox" />
                    <span>Test1</span>
                  </div>
                  <div className="variantInner1">
                    <span>Stock</span>
                    <span>available</span>
                  </div>
                </li>
              </ul>
            </ul> */}
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectProductModal;

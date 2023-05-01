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

import CheckboxList from "../ListItem";
import Duallist from "react-duallist";
import ListCheckBox from "../ListItem";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const SelectProductModal = ({ isSelectProductModal, handleClose, data }) => {
  const onCancel = () => handleClose();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const available = [
    { label: "Alabama", value: "AL" },
    { label: "California", value: "CA" },
  ];
  const selected = [
    { label: "Alabama", value: "AL" },
    { label: "California", value: "CA" },
  ];
  const addProductToList = (e, item) => {
    const selectedProduct = {};
    console.log(item);
  };
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
                    <img src="Vector.png" height="15" width="15" alt="img" />
                    <span>{item?.title}</span>
                  </li>
                  {item?.variants &&
                    item?.variants.length > 0 &&
                    item?.variants.map((data, index) => (
                      <ul key={index}>
                        <li className="variantShow">
                          <div className="variantInner">
                            <input type="checkbox" />
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

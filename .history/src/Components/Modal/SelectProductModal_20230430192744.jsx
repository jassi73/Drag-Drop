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
import { useCallback, useEffect, useRef, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import useFetch from "../../Hooks/useFetch";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const SelectProductModal = ({ isSelectProductModal, handleClose }) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [pageCount, setPageCount] = useState(1);
  const { data, loading, error } = useFetch(pageCount);
  const loader = useRef();
  const theme = useTheme();
  const [dataa, setDataa] = useState([]);
  const [filteredData, setFilteredData] = new useState();
  const [isProductSelected, setProductSelected] = useState(false);
  const [isVariantSelected, setIsVariantSelected] = useState({
    checked: false,
    id: "",
  });
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageCount((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

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
      setDataa([]);
    }
    console.log("selected product", selectedProduct, array);
  };

  const variantHandleChange = (e, item, data) => {
    const { checked } = e.target;
    if (isProductSelected) {
      setIsVariantSelected({
        ...isVariantSelected,
        checked: checked,
        id: data?.product_id,
      });
    } else {
      setProductSelected(true);
    }
  };

  const handleSearchProduct = (e) => {
    const query = e.target.value;
    var updatedList = [...data];
    updatedList = updatedList.filter((item) => {
      return item?.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredData(updatedList);
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
            <input
              type="text"
              placeholder="Search products"
              onChange={handleSearchProduct}
            />
          </div>
          <div className="productVariant" id="scrollableDiv">
            {filteredData && filteredData.length > 0
              ? filteredData &&
                filteredData.length &&
                filteredData.map((item, i) => (
                  <ul key={i}>
                    <li className="product">
                      <Checkbox
                        {...label}
                        // defaultChecked
                        className="checkmark"
                        onChange={(e) => addProductToList(e, item)}
                        sx={{
                          "&.Mui-checked": {
                            color: "#008060",
                          },
                        }}
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
                      item?.variants.map((data, index) => {
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
                                  onChange={(e) =>
                                    variantHandleChange(e, item, data)
                                  }
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
                ))
              : data &&
                data.length &&
                data.map((item, i) => (
                  <ul key={i}>
                    <li className="product">
                      <Checkbox
                        {...label}
                        // defaultChecked
                        className="checkmark"
                        onChange={(e) => addProductToList(e, item)}
                        sx={{
                          "&.Mui-checked": {
                            color: "#008060",
                          },
                        }}
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
                      item?.variants.map((data, index) => {
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
                                  onChange={(e) =>
                                    variantHandleChange(e, item, data)
                                  }
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
                ))}
            <div ref={loader} />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleClose} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectProductModal;

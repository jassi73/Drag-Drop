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
import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import useFetch from "../../Hooks/useFetch";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const SelectProductModal = ({ isSelectProductModal, handleClose }) => {
  const { data, loading, error } = useFetch(
    `https://stageapibc.monkcommerce.app/admin/shop/product?search=F&page=${page}`
  );
  const theme = useTheme();
  const [dataa, setDataa] = useState([]);
  const [filteredData, setFilteredData] = new useState();
  const [pageCount, setPageCount] = useState(1);
  const [isProductSelected, setProductSelected] = useState(false);
  const [isVariantSelected, setIsVariantSelected] = useState({
    checked: false,
    id: "",
  });

  useEffect(() => {}, []);
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

  const fetchMoreData = () => {
    setCount(count + 1);
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
          <div className="productVariant">
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
            <InfiniteScroll
              dataLength={data.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            ></InfiniteScroll>
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

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
import Product from "../Product";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const SelectProductModal = ({ isSelectProductModal, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [pageCount, setPageCount] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const loader = useRef();

  const [filteredData, setFilteredData] = new useState();
  const [selectedVarients, setSelectedVarients] = useState({});
  const [selectedData, setSeletedData] = useState([]);

  const getProducts = (query, page) => {
    fetch(
      `https://stageapibc.monkcommerce.app/admin/shop/product?search=${query}&page=${page}`
    )
      .then((data) => data.json())
      .then((res) => {
        setLoading(false);
        res && setFilteredData(res);
      })
      .catch((err) => {
        setLoading(true);
        alert(err);
      });
  };

  useEffect(() => {
    console.log("## selectedVarients", selectedVarients);
  }, [selectedVarients]);

  const updateVarientState = (id, title, newState, variants = []) => {
    setSelectedVarients((data) => ({
      ...data,
      [id]: { id, selected: newState, title, variants },
    }));
  };

  useEffect(() => {
    getProducts(query, pageCount);
  }, [query, pageCount]);
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

  const handleSearchProduct = (e) => {
    const query = e.target.value;
    setQuery(query);
    // var updatedList = [...filteredData];
    // updatedList = updatedList.filter((item) => {
    //   return item?.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    // });
    // setFilteredData(updatedList);
  };

  const addProduct = () => {
    const finalData = Object.values(selectedVarients).filter(
      (varient) => varient.selected
    );
    localStorage.setItem("items", JSON.stringify(finalData));
    handleClose();
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
            {!loading &&
              filteredData &&
              filteredData.length > 0 &&
              filteredData &&
              filteredData.length &&
              filteredData.map((item) => (
                <Product
                  key={item.id}
                  product={item}
                  updateVarientState={updateVarientState}
                  varientState={selectedVarients[item.id]}
                />
              ))}
            <div ref={loader} />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={addProduct} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectProductModal;

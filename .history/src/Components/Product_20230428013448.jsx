import { Stack, TextField, Typography } from "@mui/material";
import {Draggable} from "react-beautiful-dnd"
import ProductVariant from "./ProductVariant";
import SelectProductModal from "./Modal/SelectProductModal";
import SelectTextFields from "./TextField";
import { useState } from "react";

const Product = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(props.tasks);
  const [isSelectProductModal, setIsSelectProductModal] = useState(false);
  const [isVariantVisible, setIsVariantVisible] = useState(false);
  const openSelectProductModal = () => {
    setIsSelectProductModal(true);
  };
  const handleClose = () => {
    setIsSelectProductModal(false);
  };

  const showVariant = () => {
    setIsVariantVisible(!isVariantVisible);
  };

  return (
    <Draggable key={props.task.id} draggableId={props.task.id} index={this.props.index}>
    <div  className="container">
      <Stack
        direction="row"
        sx={{
          border: "1px solid lightgrey",
          borderRadius: "2px",
          padding: "8px",
          marginBottom: "8px",
          width: "30%",
          justifyContent: "space-between",
        }}
      >
        <Typography>{props.task.content}</Typography>

        <Stack sx={{ cursor: "pointer" }} onClick={openSelectProductModal}>
          ✏️
        </Stack>
      </Stack>
      <div className="discount">
        {isClicked ? (
          <Stack>
            <div className="discountInput">
              <TextField variant="filled"></TextField>
              <SelectTextFields />
            </div>
            <a href="#" onClick={() => showVariant()}>
              {isVariantVisible ? "hide Variant" : "show variant"}
            </a>
            {isVariantVisible &&
              props.tasks &&
              props.tasks.map((item, i) => (
                <ProductVariant key={i} task={item} />
              ))}
          </Stack>
        ) : (
          <>
            <button onClick={() => setIsClicked(true)}>Add Discount</button>
          </>
        )}
      </div>
    </Draggable>


      <SelectProductModal
        isSelectProductModal={isSelectProductModal}
        handleClose={handleClose}
      />
    </div>
  );
};
export default Product;

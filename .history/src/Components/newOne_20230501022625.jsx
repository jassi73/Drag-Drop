import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import SelectProductModal from "./Modal/SelectProductModal";
import Variant from "./Variant";
import { useState } from "react";

// import initialData from "./Components/data-table";

// import initialData from "./data-table";

const NewOne = ({ provided, index, item, setData, variants }) => {
  const state = JSON.parse(localStorage.getItem("addedProducts"));
  const variantState = variants;

  const [isDiscount, setIsDiscount] = useState(false);
  const [isVariantVisible, setIsVariantVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const discountVisible = () => setIsDiscount(true);

  const showVariant = () => setIsVariantVisible(!isVariantVisible);

  const openSelectProductModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  /**
   * The function reorders an array of variants based on drag and drop events and updates the state and
   * local storage accordingly.
   */
  const onDragEnd = (params, index) => {
    const srcI = params.source.index;
    const desI = params.destination.index;
    state[index]?.variants.splice(
      desI,
      0,
      state[index]?.variants.splice(srcI, 1)[0]
    );
    localStorage.setItem("addedProducts", JSON.stringify(state));
    setData(state);
  };

  //for deleting the product from the main list
  const onDelete = (id) => {
    const deleteProduct = state.filter((item) => item?.id !== id);
    localStorage.setItem("addedProducts", JSON.stringify(deleteProduct));
    setData(deleteProduct);
  };

  return (
    <DragDropContext key={9} onDragEnd={(e) => onDragEnd(e, index, item)}>
      <div className="mainDv">
        <ul>
          <li>
            <div className="innerDv">
              <img
                {...provided.dragHandleProps}
                src="/dragIcon.png"
                height="40"
                width="32"
                alt="png file"
              />
              {index + 1}.
              <div className="innerBox">
                <p className="overflow-ellipsis">{item?.title}</p>
                <a href="#" onClick={openSelectProductModal}>
                  <img src="/Vector.png" alt="png file" />
                </a>
              </div>
              <div className="btnBox">
                <a
                  href="#"
                  className={isDiscount ? "hide" : "dltBtn"}
                  onClick={discountVisible}
                >
                  Add Discount
                </a>
                <div className={isDiscount ? "inputBoxCs" : "hide"}>
                  <input type="text" className="form-control" />
                  <input type="text" className="form-control" />
                  <a href="#" onClick={() => onDelete(item?.id)}>
                    ❌
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            {item?.variants && item.variants.length > 0 && (
              <div className={isDiscount ? "showVerit" : "hide"}>
                <a href="#" onClick={showVariant}>
                  {isVariantVisible ? "Hide Variant" : "Show Variant"}
                </a>
              </div>
            )}
          </li>
          <Droppable droppableId="droppable-2">
            {(provided) => (
              <ul
                className={isVariantVisible ? "innerVerit" : "hide"}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {variantState &&
                  variantState &&
                  variantState.length > 0 &&
                  variantState.map((item, i) => (
                    <Draggable
                      key={item?.id}
                      draggableId={`draggable-${item?.id}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Variant
                            item={item}
                            productIndex={index}
                            varinatIndex={i}
                            setData={setData}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
              </ul>
            )}
          </Droppable>
        </ul>
      </div>
      <SelectProductModal
        isSelectProductModal={isModalOpen}
        handleClose={handleClose}
        setData={setData}
      />
    </DragDropContext>
  );
};

export default NewOne;

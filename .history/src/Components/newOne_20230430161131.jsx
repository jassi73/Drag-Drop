import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import SelectProductModal from "./Modal/SelectProductModal";
import Variant from "./Variant";
import useFetch from "../Hooks/useFetch";
import { useState } from "react";

// import initialData from "./Components/data-table";

// import initialData from "./data-table";

const NewOne = (props) => {
  const state = [
    { id: 5, content: "Take out the garbage" },
    { id: 6, content: "Watch my favorite show" },
    { id: 7, content: "Charge my phone" },
    { id: 8, content: "Cook dinner" },
  ];

  const [isDiscount, setIsDiscount] = useState(false);
  const [isVariantVisible, setIsVariantVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const discountVisible = () => setIsDiscount(true);

  const showVariant = () => setIsVariantVisible(!isVariantVisible);

  const openSelectProductModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const onDragEnd = (params) => {
    const srcI = params.source.index;
    const desI = params.destination.index;

    state.splice(desI, 0, state.splice(srcI, 1)[0]);
  };

  const onDelete = (id) => {
    state.splice(id - 1, 1);
  };
  return (
    <DragDropContext key={9} onDragEnd={onDragEnd}>
      <div className="mainDv">
        <ul>
          <li>
            <div className="innerDv">
              <img
                {...props.provided.dragHandleProps}
                src="/dragIcon.png"
                height="40"
                width="32"
                alt="png file"
              />
              {props.index + 1}.
              <div className="innerBox">
                <p className="overflow-ellipsis">{props.item?.title}</p>
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
                  <a href="#" onClick={() => onDelete(props.item?.id)}>
                    ❌
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={isDiscount ? "showVerit" : "hide"}>
              <a href="#" onClick={showVariant}>
                {isVariantVisible ? "Hide Variant" : "Show Variant"}
              </a>
            </div>
          </li>
          <Droppable droppableId="droppable-2">
            {(provided) => (
              <ul
                className={isVariantVisible ? "innerVerit" : "hide"}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {state.map((item, index) => (
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
                        <Variant item={item} />
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
      />
    </DragDropContext>
  );
};

export default NewOne;

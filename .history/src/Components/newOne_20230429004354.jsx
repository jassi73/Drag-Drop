import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import Variant from "./Variant";
import initialData from "./data-table";
import { useState } from "react";

const NewOne = (props) => {
  const state = [
    { id: 5, content: "Take out the garbage" },
    { id: 6, content: "Watch my favorite show" },
    { id: 7, content: "Charge my phone" },
    { id: 8, content: "Cook dinner" },
  ];
  const [isDiscount, setIsDiscount] = useState(false);
  const [isVariantVisible, setIsVariantVisible] = useState(false);
  const discountVisible = () => setIsDiscount(true);
  const showVariant = () => setIsVariantVisible(!isVariantVisible);
  const onDragEnd = (params) => {
    const srcI = params.source.index;
    const desI = params.destination.index;

    console.log(params);
    state.splice(desI, 0, state.splice(srcI, 1)[0]);
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
              <div className="innerBox">
                <p>{props.item?.content}</p>
                <a href="#">
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
                  <a href="#">❌</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={isDiscount ? "showVerit" : "hide"}>
              <a href="#" onClick={showVariant}>
                Show Veriant
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
                        <Variant item={item}  />
                      </div>
                    )}
                  </Draggable>
                ))}
              </ul>
            )}
          </Droppable>
        </ul>
      </div>
    </DragDropContext>
  );
};

export default NewOne;

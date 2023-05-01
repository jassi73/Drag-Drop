import "@atlaskit/css-reset";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

import NewOne from "./Components/newOne";

const App = () => {
  const initialState = [{ title: "Select the product" }];
  const [data, setData] = useState([]);
  const state = JSON.parse(localStorage.getItem("addedProducts"));

  const onDragEnd = (params) => {
    const srcI = params.source.index;
    const desI = params.destination.index;
    state.splice(desI, 0, state.splice(srcI, 1)[0]);
    localStorage.setItem("addedProducts", JSON.stringify(state));
  };

  useEffect(() => {}, [data]);

  const settingData = (data) => {
    setData((prev) => [...prev, data]);
  };

  return (
    <DragDropContext key={1} onDragEnd={onDragEnd}>
      <div className="main">
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {state && state.length > 0
                ? state.map((item, i) => (
                    <Draggable
                      key={item?.id}
                      draggableId={`draggable-${item?.id}`}
                      index={i}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <NewOne
                            setData={settingData}
                            key={i}
                            item={item}
                            provided={provided}
                            index={i}
                            variants={item?.variants}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))
                : initialState.map((item, i) => (
                    <NewOne
                      setData={settingData}
                      key={i}
                      item={item}
                      provided={provided}
                      index={i}
                      variants={item?.variants}
                    />
                  ))}
                  <div className="addProduct">
                  <a
                href="#"
              >
                Add Discount
              </a>
                  </div>
       

            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;

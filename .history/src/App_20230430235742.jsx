import "@atlaskit/css-reset";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import NewOne from "./Components/newOne";
import { useEffect } from "react";

const App = () => {
  const initialState = [{ title: "Select the product" }];
  const [data, setData] = useEffect([]);
  const state = JSON.parse(localStorage.getItem("addedProducts"));
  const onDragEnd = (params) => {
    const srcI = params.source.index;
    const desI = params.destination.index;
    state.splice(desI, 0, state.splice(srcI, 1)[0]);
  };
  useEffect(() => {
    setData((prev) => [...prve]);
  }, [data]);
  const settingData = (data) => {
    setData((prev) =>( ...prve, data));
  };
  console.log("state", state);

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
                            key={i}
                            item={item}
                            provided={provided}
                            index={i}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))
                : initialState.map((item, i) => (
                    <NewOne key={i} item={item} provided={provided} index={i} />
                  ))}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;

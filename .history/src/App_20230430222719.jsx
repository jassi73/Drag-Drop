import "@atlaskit/css-reset";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import NewOne from "./Components/newOne";

const App = () => {
  // const { data, loading, error } = useFetch(1);

  const state = JSON.parse(localStorage.getItem("addedProducts"));
  const onDragEnd = (params) => {
    const srcI = params.source.index;
    const desI = params.destination.index;
    state.splice(desI, 0, state.splice(srcI, 1)[0]);
  };
  console.log("state", state);

  return (
    <DragDropContext key={1} onDragEnd={onDragEnd}>
      <div className="main">
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {state &&
                state.length > 0 &&
                state.map((item, i) => (
                  <Draggable
                    key={item?.id}
                    draggableId={`draggable-${item?.id}`}
                    index={i}
                  >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <NewOne item={item} provided={provided} index={i} />
                      </div>
                    )}
                  </Draggable>
                ))}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;

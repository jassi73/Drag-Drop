import "@atlaskit/css-reset";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import NewOne from "./Components/newOne";
// import Column from "./Components/Column";
// import Product from "./Components/Product";
import initialData from "./Components/data-table";

const App = () => {
  const state = initialData;
  const onDragEnd = () => {};

  return (
    <DragDropContext key={1} onDragEnd={onDragEnd}>
      <div className="main">
        <h4>Products</h4>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {state.map((item, i) => (
                <Draggable
                  key={item?.id}
                  draggableId={`draggable-${item?.id}`}
                  index={i}
                >
                  {(provided) => (
                    <NewOne
                      innerRef={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      item={item}
                    />
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

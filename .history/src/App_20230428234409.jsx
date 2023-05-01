import "@atlaskit/css-reset";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import NewOne from "./Components/newOne";
// import Column from "./Components/Column";
import Product from "./Components/Product";
import initialData from "./Components/data-table";

const App = () => {
  const state = initialData;
  const onDragEnd = () => {};


    return (
      <DragDropContext key={1} onDragEnd={onDragEnd}>
        <div className="main">
          <h4>{column.title}</h4>
          <Droppable droppableId="droppable-1">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {state.map((item, i)=>(
                      <NewOne key={i} item={item}  />
                ))}
              
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  });
};

export default App;

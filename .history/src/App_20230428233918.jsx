import "@atlaskit/css-reset";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import NewOne from "./Components/newOne";
// import Column from "./Components/Column";
import Product from "./Components/Product";
import initialData from "./Components/data-table";

const App = () => {
  const state = initialData;
  const onDragEnd = () => {};
  return state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

    return (
      <DragDropContext key={1} onDragEnd={onDragEnd}>
        <div className="main">
          <h4>{column.title}</h4>
          <Droppable droppableId="droppable-1">
            {(provided)=>(
 <div ref={provided.innerRef}>
 <NewOne />
</div>
</Droppable>
</div>
            )}
           
      </DragDropContext>
    );
  });
};

export default App;

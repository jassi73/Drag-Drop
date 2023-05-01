import "@atlaskit/css-reset";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

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
      <DragDropContext key={column.title} onDragEnd={onDragEnd}>
        <div className="main">
          <h4>{column.title}</h4>
          {tasks.map((task, index) => (
            <Droppable key={index} droppableId={task.id}>
              {(provided) => (
                <div>
                  <Product
                    inneRef={provided.innerRef}
                    {...provided.droppableProps}
                    task={task}
                    tasks={tasks}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    );
  });
};

export default App;

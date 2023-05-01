import "@atlaskit/css-reset";

import Column from "./Components/Column";
import initialData from "./Components/data-table";
import Product from "./Components/Product";

const App = () => {
  const state = initialData;
  return state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

    return (
      {tasks.map((task) =>(
        <Product key={task.id} task={task.content} />

      ))}
    )
  });
};

export default App;

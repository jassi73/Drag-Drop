import "@atlaskit/css-reset";

import Column from "./Components/Column";
import initialData from "./Components/data-table";

const App = () => {
  const state = initialData;
  return state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={tasks} />;
  });
};

export default App;

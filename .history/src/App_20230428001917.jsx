import "@atlaskit/css-reset";

// import Column from "./Components/Column";
import Product from "./Components/Product";
import initialData from "./Components/data-table";

const App = () => {
  const state = initialData;
  return state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

    return (
      <div className="main">
        <h4>{column.title}</h4>
        {tasks.map((task, index) => (
          <Product key={index} task={task} tasks={tasks} />
        ))}
      </div>
    );
  });
};

export default App;

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
          <div key={index} className="task">
            <Product task={task.content} />
            <a
             style={{    display: "flex",
    justifyContent: "space-around"
    width: "75%"}}> show variants</a>
          </div>
        ))}
      </div>
    );
  });
};

export default App;

import "@atlaskit/css-reset";

// import Column from "./Components/Column";
import Product from "./Components/Product";
import initialData from "./Components/data-table";

const Title = styled.h3`
  padding: 8px;
`;
const App = () => {
  const state = initialData;
  return state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

    return (
      <>
        <Title>{column.title}</Title>
        {tasks.map((task) => (
          <Product key={task.id} task={task.content} />
        ))}
      </>
    );
  });
};

export default App;

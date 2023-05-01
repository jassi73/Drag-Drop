import Product from "./Product";

const Column = (props) => {
  const { tasks, column } = props;

  return (
    <div>
      <h4>{column.title}</h4>
      <TaskList>
        {tasks.map((task) => (
          <Product key={task.id} task={task.content} />
          // <Product key={task.id} task={task.id} />
        ))}
      </TaskList>
    </div>
  );
};
export default Column;

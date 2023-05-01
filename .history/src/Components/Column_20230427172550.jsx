import Product from "./Product";

const Column = (props) => {
  const { tasks, column } = props;

  return (
    <div>
      <h4>{column.title}</h4>
      <div>
        {tasks.map((task) => (
          <Product key={task.id} task={task.content} />
          // <Product key={task.id} task={task.id} />
        ))}
      </div>
    </div>
  );
};
export default Column;

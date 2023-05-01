import Product from "./Product";

const Column = (props) => {
  const { tasks, column } = props;

  return (
    <Container>
      <Title>{column.title}</Title>
      <TaskList>
        {tasks.map((task) => (
          <Product key={task.id} task={task.content} />
          // <Product key={task.id} task={task.id} />
        ))}
      </TaskList>
    </Container>
  );
};
export default Column;

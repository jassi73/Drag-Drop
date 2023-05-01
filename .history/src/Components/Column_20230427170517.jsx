import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Column = (props) => {
  const { tasks, column } = props;

  return (
    <Container>
      <Title>{column.title}</Title>
      <TaskList>
        {tasks.map((task) => (
          <Product key={task.id} task={task.content} />
          <Product key={task.id} task={task._id} />
        ))}
      </TaskList>
    </Container>
  );
};
export default Column;

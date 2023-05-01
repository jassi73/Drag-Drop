import Product from './Product';
import styled from 'styled-components';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Column = () => {

     return (
          <Container>
               <Title>{this.props.column.title}</Title>
               <TaskList>
                    {this.props.tasks.map(task => <Product key={task.id} task={task} />)}
               </TaskList>
          </Container>
     )
}
export default Column;


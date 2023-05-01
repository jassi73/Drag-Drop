import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

const Product = (props) => {
  return <Container>{props.task}</Container>;
};
export default Product;

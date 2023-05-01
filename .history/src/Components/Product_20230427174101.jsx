const Product = (props) => {
  return (
    <div className="container">
      <div className="productPicker">{props.task}</div>
      <div>
        <div className="discount">
          <input placeholder="enter discount" />
          <input placeholder="type" />
        </div>
        <button>Add Discount</button>
      </div>
    </div>
  );
};
export default Product;

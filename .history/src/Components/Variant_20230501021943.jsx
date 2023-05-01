const Variant = ({ item, productIndex, varinatIndex }) => {
  const handleVariantDelete = (id, index) => {
    const state = JSON.parse(localStorage.getItem("addedProducts"));
    
      state[index]?.variants &&
      state[index]?.variants.length > 0 &&
      state[index]?.variants.splice(varinatIndex,1)
      
      console.log("aa ", state)
  }
  console.log("filtered", productIndex, varinatIndex);

  return (
    <li>
      <div className="innerDv">
        <img src="/dragIcon.png" height="40" width="32" alt="png file" />
        <div className="innerBox">
          <p>{item?.title}</p>
          <a href="#"> {/* <img src="/Vector.png" alt="png file" /> */}</a>
        </div>
        <div className="btnBox">
          <div className="inputBoxCs">
            <input type="text" className="form-control" />
            <input type="text" className="form-control" />
            <a
              href="#"
              onClick={() => handleVariantDelete(item?.id, productIndex)}
            >
              ❌
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Variant;

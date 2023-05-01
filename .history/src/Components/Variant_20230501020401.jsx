const Variant = ({ item, productIndex }) => {
  const handleVariantDelete = (id, index) => {
    const state = JSON.parse(localStorage.getItem("addedProducts"));
    const data =
      state[index]?.variants &&
      state[index]?.variants.length > 0 &&
      state[index]?.variants.filter((item) => console.log(item?.id, id));
    console.log("filtered", data, id);
  };

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

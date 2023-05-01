const Variant = ({ item, productIndex, varinatIndex, setData }) => {
  const handleVariantDelete = (id, index, varinatIndex) => {
    const state = JSON.parse(localStorage.getItem("addedProducts"));
    state[index]?.variants &&
      state[index]?.variants.length > 0 &&
      state[index]?.variants.splice(varinatIndex, 1);
    localStorage.setItem("addedProducts", JSON.stringify(state));
    setData(state);
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
              onClick={() =>
                handleVariantDelete(item?.id, productIndex, varinatIndex)
              }
            >
              <img src="/close.png" height="18" width="21" alt="png file" />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Variant;

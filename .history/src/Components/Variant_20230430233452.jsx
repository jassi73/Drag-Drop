const Variant = (props) => {
  return (
    <li>
      <div className="innerDv">
        <img src="/dragIcon.png" height="40" width="32" alt="png file" />
        <div className="innerBox">
          <p>{props.item?.title}</p>
          <a href="#"> {/* <img src="/Vector.png" alt="png file" /> */}</a>
        </div>
        <div className="btnBox">
          <div className="inputBoxCs">
            <input type="text" className="form-control" />
            <input type="text" className="form-control" />
            <a href="#">❌</a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Variant;

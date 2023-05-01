const NewOne = () => {
  return (
    <div className="mainDv">
      <ul>
        <li>
          <div className="innerDv">
            <div className="innerBox">
              <p>Dummy Text</p>
              <a href="#">
                <img src="/Vector.png" />
              </a>
            </div>
            <div className="btnBox">
              <a href="#" className="dltBtn">
                Add Discount
              </a>
              <div className="inputBoxCs" style={{ display: "none" }}>
                <input type="text" className="form-control" />
                <input type="text" className="form-control" />
                <a href="#">❌</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="showVerit" style={{ display: "none" }}>
            <a href="#">Show Veriant</a>
          </div>
        </li>
        <ul className="innerVerit">
          <li>
            <div className="innerDv">
              <div className="innerBox">
                <p>Dummy Text</p>
                <a href="#">edit</a>
              </div>
              <div className="btnBox">
                <a href="#" className="dltBtn">
                  Add Discount
                </a>
                <div className="inputBoxCs" style={{ display: "none" }}>
                  <input type="text" className="form-control" />
                  <input type="text" className="form-control" />
                  <a href="#">❌</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="innerDv">
              <div className="innerBox">
                <p>Dummy Text</p>
                <a href="#">edit</a>
              </div>
              <div className="btnBox">
                <a href="#" className="dltBtn">
                  Add Discount
                </a>
                <div className="inputBoxCs" style={{ display: "none" }}>
                  <input type="text" className="form-control" />
                  <input type="text" className="form-control" />
                  <a href="#">❌</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default NewOne;

const NewOne = () => {
  return (
    <div className="mainDv">
      <ul>
        <li>
          <div className="innerDv">
            <div className="innerBox">
              <p>Dummy Text</p>
              <a href="#">edit</a>
            </div>
            <div className="">
              <a href="#" className="dltBtn">
                delete
              </a>
              <div className="inputBoxCs">
                <input type="text" className="form-control" />
                <input type="text" className="form-control" />
                <a href="#">❌</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="showVerit">Show Veriant</div>
        </li>
      </ul>
    </div>
  );
};

export default NewOne;

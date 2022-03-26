import React, { useState } from "react";

export default function HookUseState() {
  let [state, setState] = useState({ like: 1 }); //useState(stateDefault)
  let [like, setLike] = useState(1);
  let [color, setColor] = useState(`./img/imgBlackCar.jpg`);

  return (
    <div className="container">
      <div className="card text-white bg-white w-25">
        <img
          className="card-img-top"
          src="https://i.pravatar.cc?u=27"
          alt="..."
        />
        <div className="card-body text-center">
          <p className="card-text text-danger">{like} ♥</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
        </div>
      </div>
      <hr />
      <div className="row mt-2">
        <div className="col-4">
          <img className="w-100" src={color} alt="" />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <span className="mr-2">Xe đen</span>
              <button
                className="btn btn-dark"
                onClick={() => {
                  setColor("./img/imgBlackCar.jpg");
                }}
              >
                Chọn
              </button>
            </div>
            <div className="col-4">
              <span className="mr-2">Xe đỏ</span>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setColor("./img/imgRedCar.jpg");
                }}
              >
                Chọn
              </button>
            </div>
            <div className="col-4">
              <span className="mr-2">Xe bạc</span>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setColor("./img/imgSilverCar.jpg");
                }}
              >
                Chọn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function BT_ChonXeUseState() {
  let [color, setColor] = useState(`./img/imgBlackCar.jpg`);
  return (
    <div className="container">
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

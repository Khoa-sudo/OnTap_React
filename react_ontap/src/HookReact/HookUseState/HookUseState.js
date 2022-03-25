import React, { useState } from "react";

export default function HookUseState() {
  let [state, setState] = useState({ like: 1 }); //useState(stateDefault)
  let [like,setLike] = useState(1);
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
    </div>
  );
}

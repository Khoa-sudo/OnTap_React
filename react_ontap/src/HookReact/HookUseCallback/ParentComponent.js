import React, { PureComponent, useCallback, useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  const tangSoLuong = () => {
    setNumber(number + 1);
  };
  const usCallBackTangSoLuong = useCallback(tangSoLuong,[number])
  return (
    <div className="container">
      <h3 className="mt-2">Demo useCallback</h3>
      <hr />
      <p>Number: {number}</p>
      {/* <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button> */}
      <hr />
      <p>Like: {like}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like
      </button>
      <hr />
      <ChildComponent number={number} tangSoLuong={usCallBackTangSoLuong} />
    </div>
  );
}

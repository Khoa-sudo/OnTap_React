import React, { memo } from "react";

function ChildComponent(props) {
  console.log("children component render");
  return (
    <div>
      <h3>ChildComponent</h3>
      <h3>Number child: {props.number}</h3>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.tangSoLuong(props.number + 1);
        }}
      >
        Tăng số lượng
      </button>
    </div>
  );
}

//giống như connect, chăn cho component bị render lại khi có update
export default memo(ChildComponent);

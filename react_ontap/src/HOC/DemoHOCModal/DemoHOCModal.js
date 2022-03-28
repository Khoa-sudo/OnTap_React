import React, { useState } from "react";
import ModalHOC from "./ModalHOC";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import { useDispatch } from "react-redux";

export default function DemoHOCModal(props) {
  const [component, setComponent] = useState(<Register />);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3 className="mt-3 text-center display-4">Demo HOC</h3>
      <button
        onClick={() => {
          const action = {
            type: "OPEN_FORM",
            component: <Register />,
            handleSubmit: () => {
              console.log("Đăng kí submit");
            },
          };
          dispatch(action);
        }}
        type="button"
        className="btn btn-primary btn-lg mr-2"
        data-toggle="modal"
        data-target="#modelId"
      >
        Đăng ký
      </button>
      <button
        onClick={() => {
          const action = {
            type: "OPEN_FORM",
            component: <Login />,
            handleSubmit: () => {
              console.log("Đăng nhập submit");
            },
          };
          dispatch(action);
        }}
        type="button"
        className="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#modelId"
      >
        Đăng nhập
      </button>
      <ModalHOC component={component} />
    </div>
  );
}

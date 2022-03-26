import React, { useEffect, useState } from "react";
import ToDoAppRFC from "./ToDoAppRFC";

export default function HookUseEffect() {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(0);
  //   const timeout = setInterval(() => {
  //     console.log(1);
  //   }, 1000);

  useEffect(() => {
    // Chạy sau khi giao diện được tạo
    // Thay thế componentDidUpdate và componentDidMount tương ứng react class component
    // console.log("componentDidMount & componentDidUpdate");
  });
  useEffect(() => {
    //Chạy 1 lần duy nhất sau khi render
    //Thay thế componentDidMount lấy dữ liệu từ backend về
    console.log("ComponentDidMount");
    return () => {
      //Xóa các hàm chạy ngầm khi component mất đi
      console.log("willUnmount");
      //clearInterval(timeout);
    };
  }, []);
  useEffect(() => {
    //Kiểm tra giá trị number thay đổi thì sẽ chạy lại hàm này (giống componentDidUpdate)
    console.log("componentDidUpdate number đã thay đổi");
  }, [number]); //Giá trị thay đổi thì hàm này mới chạy lại (so sánh shallow compare)
  console.log("render");
  return (
    <div className="container mt-5">
      <h4>Number: {number}</h4>
      <button
        className="mt-2 btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Plus
      </button>
      <hr />
      <h4>Like: {like}</h4>
      <button
        className="btn btn-danger"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like
      </button>

      <hr />
      <ToDoAppRFC/>
    </div>
  );
}

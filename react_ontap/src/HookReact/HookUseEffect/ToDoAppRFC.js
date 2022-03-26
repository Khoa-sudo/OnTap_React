import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ToDoAppRFC() {
  const [arrTask, setArrTask] = useState([]);
  //Cách 1: Sử dụng callback cho vấn đề bất đồng bộ
  //   useEffect(() => {
  //     let promise = axios({
  //       url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
  //       method: "GET",
  //     });
  //     //Sau khi gọi api thành công thì set vào arrTask
  //     promise.then((result) => {
  //       setArrTask(result.data);
  //       console.log(result.data);
  //     });
  //     promise.catch((error) => {
  //       console.log("error", error.response.data);
  //     });
  //     console.log(123)
  //   }, []);

  useEffect(async () => {
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
      });
      await setArrTask(result.data);
      console.log(result, "result");
    } catch (err) {
      console.log("err", err);
    }
    console.log(123);
  }, []);
  return (
    <div className="container">
      <h3 className="text-center display-4">To do app</h3>
      <div className="d-flex justify-content-center">
        <table className="table w-50 text-center">
          <tbody>
            {arrTask.map((task, index) => {
              return (
                <tr key={index}>
                  <td>{task.taskName}</td>
                  <td>
                    {task.status ? (
                      <span className="badge badge-success">completed</span>
                    ) : (
                      <span className="badge badge-danger">incompleted</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

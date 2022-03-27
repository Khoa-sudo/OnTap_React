import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTaskAction } from "../../redux/actions/toDoListAction";
export default function ToDoList() {
  // const [arrTask, setArrTask] = useState([]);
  const [task, setTask] = useState({ taskName: "", status: false });

  //Lấy dữ liệu arrTask từ toDoListReducer
  const { arrTask } = useSelector((rootReducer) => rootReducer.toDoListReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    //dispatch 1 action là function
    /**
     * action có 2 loại:
     * + Loại 1: {type:"",payload:data}
     * + Loại 2: function
     */
    let action = GetAllTaskAction();
    dispatch(action);
  }, []);
  console.log("task", task);
  const handleChangeInput = (e) => {
    let { value, name } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //call API de lấy task về
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h3 className="text-center display-4">To do list</h3>
          <div className="input-group mb-3">
            <input
              name="taskName"
              onChange={handleChangeInput}
              type="text"
              className="form-control"
              placeholder="task name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="input-group-button btn btn-success"
                id="basic-addon2"
              >
                Add task
              </button>
            </div>
          </div>

          <table className="table">
            <tbody>
              {arrTask
                .filter(
                  (task) => task.status === true && task.taskName.trim() !== ""
                )
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-success">completed</span>
                      </td>
                      <td>
                        <button className="btn btn-success">done</button>
                        <button className="btn btn-danger ml-2">delete</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>

            <tfoot>
              {arrTask
                .filter(
                  (task) => task.status === false && task.taskName.trim() !== ""
                )
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-danger">incompleted</span>
                      </td>
                      <td>
                        <button className="btn btn-warning">undo</button>
                        <button className="btn btn-danger ml-2">delete</button>
                      </td>
                    </tr>
                  );
                })}
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

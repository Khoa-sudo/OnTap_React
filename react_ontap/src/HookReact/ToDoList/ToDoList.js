import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTaskAction,
  rejectTaskAction,
  doneTaskAction,
  addTaskApiAction,
  getAllTaskAction,
} from "../../redux/actions/toDoListAction";

export default function ToDoList() {
  // const [arrTask, setArrTask] = useState([]);
  const [task, setTask] = useState({ taskName: "", status: false });

  //Lấy dữ liệu arrTask từ toDoListReducer
  const { arrTask } = useSelector((rootReducer) => rootReducer.toDoListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch 1 action là function
    /**
     * action có 2 loại:
     * + Loại 1: {type:"",payload:data}
     * + Loại 2: function
     */
    let action = getAllTaskAction();
    dispatch(action);
  }, []);
  const handleChangeInput = (e) => {
    let { value, name } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // call api
    //Khi gọi hàm addTaskApiAction => Hàm chưa gọi
    const action = addTaskApiAction(task);

    dispatch(action);

    //Nếu làm theo cách bình thuòng
    //Gọi axios thêm
    //lấy dữ liệu về => dispatch lên reducer xử lý
    //Gọi axios getAll
    // dispatch giá trị sau khi getAll cho reducer xử lý
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h3 className="text-center display-4">To do list</h3>

          <form className="input-group mb-3" onSubmit={handleSubmit}>
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
          </form>

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
                        <button
                          onClick={() => {
                            const action = rejectTaskAction(task.taskName);
                            dispatch(action);
                          }}
                          className="btn btn-warning"
                        >
                          undo
                        </button>
                        <button
                          onClick={() => {
                            const action = deleteTaskAction(task.taskName);
                            dispatch(action);
                          }}
                          className="btn btn-danger ml-2"
                        >
                          delete
                        </button>
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
                        <button
                          onClick={() => {
                            const action = doneTaskAction(task.taskName);
                            dispatch(action);
                          }}
                          className="btn btn-success"
                        >
                          done
                        </button>

                        <button
                          onClick={() => {
                            const action = deleteTaskAction(task.taskName);
                            dispatch(action);
                          }}
                          className="btn btn-danger ml-2"
                        >
                          delete
                        </button>
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

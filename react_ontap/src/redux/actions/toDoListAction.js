import axios from "axios";

//closure function

export const GetAllTaskAction = () => {
  return async (dispatch, getState) => {
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
      });
      //Sau khi lấy dữ liệu từ backend về => dispatch dữ liệu đó lên redux
      const action = {
        type: "GET_ALL_TASK",
        arrTask: result.data,
      };
      //Thực thi...
      dispatch(action);
    } catch (err) {
      console.log("err", err);
    }
  };
};

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { GioHangReducer } from "./reducers/GioHangReducer";
import { QuanLySinhVienReducer } from "./reducers/QuanLySinhVienReducer";
import { baiTapGameXucXacReducer } from "./reducers/baiTapGameXucXacReducer";
import { FakeBookAppReducer } from "./reducers/FakeBookAppReducer";
import { toDoListReducer } from "./reducers/toDoListReducer";

import reduxThunk from "redux-thunk";
import { modalReducer } from "./reducers/modalReducer";

//store tổng ứng dụng
const rootReducer = combineReducers({
  //Nơi sẽ chứa các Reducer cho nghiệp vụ (store con)
  GioHangReducer,
  QuanLySinhVienReducer,
  baiTapGameXucXacReducer,
  FakeBookAppReducer,
  toDoListReducer,
  modalReducer
});
let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(
  middleWare,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, composeCustom);

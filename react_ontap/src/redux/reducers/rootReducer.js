import { applyMiddleware, combineReducers,compose, createStore } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import { QuanLySinhVienReducer } from "../reducers/QuanLySinhVienReducer";
import { baiTapGameXucXacReducer } from "../reducers/baiTapGameXucXacReducer";
import { FakeBookAppReducer } from "./FakeBookAppReducer";
import { toDoListReducer } from "./toDoListReducer";

import reduxThunk from 'redux-thunk';

//store tổng ứng dụng
export const rootReducer = combineReducers({
  //Nơi sẽ chứa các Reducer cho nghiệp vụ (store con)
  GioHangReducer,
  QuanLySinhVienReducer,
  baiTapGameXucXacReducer,
  FakeBookAppReducer,
  toDoListReducer
});
let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(rootReducer,composeCustom);
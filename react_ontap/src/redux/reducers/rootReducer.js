import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import { QuanLySinhVienReducer } from "../reducers/QuanLySinhVienReducer";


//store tổng ứng dụng
export const rootReducer = combineReducers({
    //Nơi sẽ chứa các Reducer cho nghiệp vụ (store con)
    GioHangReducer,
    QuanLySinhVienReducer
})
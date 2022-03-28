import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import BaiTapDungLayout from "./BaiTapDungLayout/BaiTapDungLayout";
import SinhVien from "./DataBinding/SinhVien";
import Event from "./DataBinding/Event";
import DieuKien from "./CauTrucDieuKhien/DieuKien";
import BaiTapState from "./CauTrucDieuKhien/BaiTapState";
import DemoVongLap from "./CauTrucLap/DemoVongLap";
import DuyetDanhSachPhim from "./BapTapDungMap/DuyetDanhSachPhim";
import DemoProps from "./Props/DemoProps";
import BaiTapTruyenFunction from "./Props/BaiTapTruyenFunction/BaiTapTruyenFunction";
import BaiTapGioHang from "./Props/BaiTapGioHang/BaiTapGioHang";
import BaiTapGameXucXac from "./BaiTapGameXucXac/BaiTapGameXucXac";
import BTGioHangRedux from "./components/BaiTapRedux/BaiTapGioHang/BTGioHangRedux";
import BaiTapForm from "./BaiTapForm/BaiTapForm";
import ReactLifeCycle from "./ReactLifeCycle/ReactLifeCycle";
import AxiosDemo from "./AxiosDemo/AxiosDemo";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import Detail from "./pages/Detail/Detail";
import AdminIndex from "./pages/Admin/AdminIndex/AdminIndex";
import HookUseState from "./HookReact/HookUseState/HookUseState";
import HookUseEffect from "./HookReact/HookUseEffect/HookUseEffect";
import ParentComponent from "./HookReact/HookUseCallback/ParentComponent";
import HookUseMemoRFC from "./HookReact/HookUseMemo/HookUseMemoRFC";
import HookRedux from "./HookReact/HookRedux/HookRedux";
import ToDoList from "./HookReact/ToDoList/ToDoList";
import DemoHOCModal from "./HOC/DemoHOCModal/DemoHOCModal";
import ModalHOC from "./HOC/DemoHOCModal/ModalHOC";

function App() {
  return (
    <BrowserRouter>
      <HeaderHome />

      <Switch>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/detail/:id"} component={Detail} />
        <Route exact path={"/admin"} component={AdminIndex} />
        <Route exact path={"/hookusestate"} component={HookUseState} />
        <Route exact path={"/hookuseeffect"} component={HookUseEffect} />
        <Route exact path={"/hookusecallback"} component={ParentComponent} />
        <Route exact path={"/hookusememo"} component={HookUseMemoRFC} />
        <Route exact path={"/hookredux"} component={HookRedux} />
        <Route exact path={"/todolist"} component={ToDoList} />
        <Route exact path={"/demohocmodal"} component={DemoHOCModal} />


        <Route exact path={"/"} component={Home} />
      </Switch>

      {/* Xài toàn bộ ứng dụng */}
      <ModalHOC/>
    </BrowserRouter>
  );
}

export default App;

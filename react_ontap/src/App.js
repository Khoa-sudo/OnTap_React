import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import BaiTapDungLayout from './BaiTapDungLayout/BaiTapDungLayout';
import SinhVien from './DataBinding/SinhVien';
import Event from './DataBinding/Event';
import DieuKien from './CauTrucDieuKhien/DieuKien';
import BaiTapState from './CauTrucDieuKhien/BaiTapState';
import DemoVongLap from './CauTrucLap/DemoVongLap';
import DuyetDanhSachPhim from './BapTapDungMap/DuyetDanhSachPhim';
import DemoProps from './Props/DemoProps';
import BaiTapTruyenFunction from './Props/BaiTapTruyenFunction/BaiTapTruyenFunction';
import BaiTapGioHang from './Props/BaiTapGioHang/BaiTapGioHang';
import BaiTapGameXucXac from './BaiTapGameXucXac/BaiTapGameXucXac';
import BTGioHangRedux from './components/BaiTapRedux/BaiTapGioHang/BTGioHangRedux';
import BaiTapForm from './BaiTapForm/BaiTapForm';

function App() {
  return (
    <div className="App">
      {/* <BaiTapDungLayout/> */}
      {/* <SinhVien/> */}
      {/* <Event/> */}
      {/* <DieuKien/> */}
      {/* <BaiTapState/> */}
      {/* <DemoVongLap/> */}
      {/* <DuyetDanhSachPhim/> */}
      {/* <DemoProps/> */}
      {/* <BaiTapTruyenFunction/> */}
      {/* <BaiTapGioHang/> */}
      {/* <BaiTapGameXucXac/> */}
      {/* <BTGioHangRedux/> */}
      <BaiTapForm/>
    </div>
  );
}

export default App;

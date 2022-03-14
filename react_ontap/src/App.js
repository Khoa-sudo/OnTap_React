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

function App() {
  return (
    <div className="App">
      <BaiTapDungLayout/>
      {/* <SinhVien/> */}
      {/* <Event/> */}
      {/* <DieuKien/> */}
      {/* <BaiTapState/> */}
      {/* <DemoVongLap/> */}
      {/* <DuyetDanhSachPhim/> */}
      {/* <DemoProps/> */}
    </div>
  );
}

export default App;

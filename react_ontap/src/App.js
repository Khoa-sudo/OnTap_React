import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import BaiTapDungLayout from './BaiTapDungLayout/BaiTapDungLayout';
import SinhVien from './DataBinding/SinhVien';
import Event from './DataBinding/Event';
import DieuKien from './CauTrucDieuKhien/DieuKien';

function App() {
  return (
    <div className="App">
      {/* <BaiTapDungLayout/> */}
      {/* <SinhVien/> */}
      {/* <Event/> */}
      <DieuKien/>
    </div>
  );
}

export default App;

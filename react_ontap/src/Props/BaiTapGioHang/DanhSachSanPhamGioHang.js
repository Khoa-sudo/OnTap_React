import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";

export default class DanhSachSanPhamGioHang extends Component {
  // rendleDanhSachSanPham = () => {
  //     return danhSachDienThoai.map((dt, index) => {
  //         return (
  //             <SanPhamGioHang dt={dt} key={index} />
  //         )
  //     })
  // }
  render() {
    const { mangSanPham, themGioHang } = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((sanPham, index) => {
            return (
              <div className="col-4">
                <SanPhamGioHang
                  themGioHang={themGioHang}
                  sanPham={sanPham}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import ModelGioHang from "./ModelGioHang";
import dataPhones from "../../data/dataPhones.json";

export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          manHinh: "AMOLED, 6.2, Full HD+",
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 5700000,
          hinhAnh: "./img/vsphone.jpg",
          soLuong: 1,
        },
      ],
    };
  }

  //Lấy dữ liệu tại component BaiTapGioHang
  themGioHang = (sanPhamChon) => {
    console.log(sanPhamChon);
    //B1: từ sp được chọn tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };

    //Kiểm tra sp Chọn có trong giỏ hàng chưa
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      //Sản phẩm được click đã có trong this.state.gioHang
      gioHangCapNhat[index].soLuong += 1;
    } else {
      //Sản phẩm được click chưa có trong this.state.gioHang
      gioHangCapNhat.push(spGioHang);
    }
    //Set state để component render lại
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  //Đặt sự kiện xoá giỏ hàng tại BTGioHang
  xoaGioHang = (maSP) => {
    //Tìm trong giỏ hàng có sp chứa mã sp được click thì xoá
    //   var gioHangCapNhat = [...this.state.gioHang];
    //   let index = gioHangCapNhat.findIndex(sp=>sp.maSP === maSP);
    //   if(index !== 1){
    //       gioHangCapNhat.splice(index,1)
    //   }

    var gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);
    //Cập nhật lại state giỏ hàng và render giao diện
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  tangGiamSoLuong = (maSP,tangGiam) => {
      var gioHangCapNhat = [...this.state.gioHang];
      let index = gioHangCapNhat.findIndex(sp=>sp.maSP===maSP)
      //Xử lý tăng giảm

      if(tangGiam){
          gioHangCapNhat[index].soLuong +=1;
      }else {
          if(gioHangCapNhat[index].soLuong>1){
              gioHangCapNhat[index].soLuong -= 1;
          }
      }
      this.setState({
          gioHang:gioHangCapNhat
      })
  }

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3 className="text-center">Bài tập giỏ hàng</h3>
        <ModelGioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <div className="text-right">
          <span
            className="text-danger"
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang
          themGioHang={this.themGioHang}
          mangSanPham={dataPhones}
        />
      </div>
    );
  }
}

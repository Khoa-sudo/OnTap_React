import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div>
        <div className="card text-white bg-primary">
          <img
            className="card-img-top"
            src={sanPham.hinhAnh}
            width={200}
            height={400}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
            <button
              onClick={() => {
                this.props.themGioHang(sanPham);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//Xây dựng hàm tạo ra prop là hàm xử lý sự kiện => đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    //Tạo ra props component
    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh: sanPham.hinhAnh,
        soLuong: 1,
        giaBan: sanPham.giaBan,
      };
      //Tạo action đưa dự liệu lên reducer
      const action = {
        type: "THEM_GIO_HANG", // bắt buộc đặt type
        spGioHang: spGioHang, //Nội dung gửi lên reducer
      };
      console.log(sanPham);
      //Dùng hàm dispatch đưa dư liệu action lên reducer
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPhamRedux);

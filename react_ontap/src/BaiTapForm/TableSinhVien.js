import React, { Component } from "react";
import { connect } from "react-redux";
import { QuanLySinhVienReducer } from "../redux/reducers/QuanLySinhVienReducer";

class TableSinhVien extends Component {
  renderSinhVien = () => {
    return this.props.mangSinhVien.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
        </tr>
      );
    });
  };
  render() {
    // const { mangSinhVien } = this.props;
    // console.log(this.props.mangSinhVien);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Mã SV</th>
              <th>Tên SV</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

//state đại diện cho rootReducers
const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};
export default connect(mapStateToProps, null)(TableSinhVien);

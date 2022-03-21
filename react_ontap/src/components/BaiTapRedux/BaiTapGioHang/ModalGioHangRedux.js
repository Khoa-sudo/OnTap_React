import React, { Component } from 'react'

//Kết nối redux
import { connect } from "react-redux";
class ModalGioHangRedux extends Component {
  renderGioHang  = () => {
    //this.props.gioHang là thuộc tính nhận từ redux
    return this.props.gioHang.map((spGH,index)=>{
      return <tr key={index}>
        <td>{spGH.maSP}</td>
        <td>{spGH.tenSP}</td>
        <td><img src={spGH.hinhAnh} width={80} height={80} alt={spGH.hinhAnh} /></td>
        <td>{spGH.soLuong}</td>
        <td>{spGH.giaBan}</td>
        <td>{spGH.soLuong * spGH.giaBan}</td>
        <td><span onClick={()=>{this.props.xoaGioHangIndex(index)}} className='btn btn-danger'>Xoá</span></td>
        <td><span onClick={()=>{this.props.xoaGioHangMaSP(spGH.maSP)}} className='btn btn-danger'>Xoá theo maSP</span></td>
      </tr>
    })
  }
  render() {
    //this.props.gioHang là thuộc tính nhận từ Redux
    return (
      <div className='container'>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sp</th>
              <th>Tên sp</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.renderGioHang()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => { //state: là store tổng => truy xuất đến GioHangReducer => biến state trên GioHangReducer
  return{
    gioHang:state.GioHangReducer.gioHang //=> tạo ra 1 props của component ModalGioHangRedux
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    xoaGioHangIndex:(index) => {
      const action ={
        type:"XOA_GIO_HANG",
        index
      }
      // console.log(action);
      //Đưa action lên reducer
      dispatch(action);
    },
    xoaGioHangMaSP: (maSP) => {
      const action = {
        type:'XOA_GIO_HANG_MSP',
        maSP
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalGioHangRedux)


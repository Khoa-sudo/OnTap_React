import React, { Component } from 'react'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
import ModalGioHangRedux from './ModalGioHangRedux'

export default class BTGioHangRedux extends Component {
  render() {
    return (
      <div>
          <h3>Danh sách giỏ hàng</h3>
          <ModalGioHangRedux/>
          <DanhSachSanPhamRedux/>
      </div>
    )
  }
}

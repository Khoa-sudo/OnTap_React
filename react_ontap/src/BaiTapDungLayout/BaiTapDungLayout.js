import React, { Component } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import ProductList from './ProductList/ProductList'
import Sider from './Sider/Sider'
import "./css/style.css"
import Modal from './Modal/Modal'

export default class BaiTapDungLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sanPhamModal: {
        maSP: 1,
        tenSP: "Black Berry",
        hinhAnh: "./img/sp_blackberry.png",
        gia: 1000
      } //Tạo nguồn dữ liệu thay đổi
    }
  }

  //Dữ liệu cần nhận ở đâu thì sẽ tạo callback function tại component đó
  xemChiTiet = (sanPhamChiTiet) => {
    this.setState({
      sanPhamModal:sanPhamChiTiet
    })
  }
  mangSanPham = [
    {
      "maSP": 1,
      "tenSP": "Black Berry",
      "hinhAnh": "./img/sp_blackberry.png",
      "gia": 1000
    },
    {
      "maSP": 2,
      "tenSP": "Iphone X",
      "hinhAnh": "./img/sp_iphoneX.png",
      "gia": 2000
    },
    {
      "maSP": 3,
      "tenSP": "Note 7",
      "hinhAnh": "./img/sp_note7.png",
      "gia": 3000
    },
    {
      "maSP": 3,
      "tenSP": "Vivo 850",
      "hinhAnh": "./img/sp_vivo850.png",
      "gia": 3000
    }
  ]

  render() {
    console.log(this.state);
    const { sanPhamModal } = this.state;
    return (
      <div>
        <Header />
        <Sider />
        <ProductList mangSanPham={this.mangSanPham} xemChiTiet={this.xemChiTiet}/>
        <Footer />
        <Modal dtModal={sanPhamModal}/>
      </div>
    )
  }
}

import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

export default class ProductList extends Component {


  renderSanPham = () => {
    //Lấy giá trị từ mangSanPham ở component cha truyền vào thông qua thuộc tính this.props
    let { mangSanPham } = this.props;
    return mangSanPham.map((sanPham, index) => {
      return (
        <ProductItem key={index} sanPhamOut={sanPham}>
        </ProductItem>
      )
    })
  }
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          {this.renderSanPham()}
        </div>
      </section>
    );
  }
}

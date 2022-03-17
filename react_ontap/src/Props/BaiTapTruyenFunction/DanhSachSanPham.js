import React, { Component } from 'react'
import phoneData from '../../data/dataPhones.json'
import SanPham from './SanPham'


export default class DanhSachSanPham extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sanPhamChiTiet: phoneData[0]
        }
    }
    //truyền xemChiTiet vào bên trong SanPham
    xemChiTiet = (sanPham) => {
        console.log(sanPham);
        this.setState({
            sanPhamChiTiet:sanPham
        })
    }
    renderSanPham = () => {
        //Lấy props mảng sản phẩm từ component bên ngoài vào
        return phoneData.map((sanPham, index) => {
            return (
                <SanPham key={index} dienThoai={sanPham} xemChiTiet={this.xemChiTiet}/>
            )
        })
    }
    render() {
        let { sanPhamChiTiet } = this.state;
        // console.log(this.state.sanPhamChiTiet);
        return (
            <div className='container'>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <h3>{this.state.sanPhamChiTiet.tenSP}</h3>
                        <img src={this.state.sanPhamChiTiet.hinhAnh} width={250} height={300} alt="" />
                    </div>
                    <div className="col-6">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Màn hình</th>
                                    <td>{sanPhamChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{sanPhamChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{sanPhamChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{sanPhamChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <td>{sanPhamChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <td>{sanPhamChiTiet.rom}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

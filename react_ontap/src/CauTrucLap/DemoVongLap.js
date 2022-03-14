import React, { Component } from 'react'

export default class DemoVongLap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                { maSP: 1, tenSP: 'Iphone X', gia: 1000 },
                { maSP: 2, tenSP: 'Samsung Galaxy Note 10', gia: 800 },
                { maSP: 3, tenSP: 'Huawei P30 Pro', gia: 900 }
            ]
        }
    }

    renderSanPhamCach2 = () => {
        return this.state.mangSanPham.map((sanPham, index) => {
            return (
                <tr key={index}>
                    <td>{sanPham.maSP}</td>
                    <td>{sanPham.tenSP}</td>
                    <td>{sanPham.gia}</td>
                </tr>
            )
        })
    }

    //Viết phương thức render các sản phẩm thành các tag tr
    renderSanPham = () => {
        //Cách 1: Vòng lặp thông thường
        let contentTable = [];
        for (let i = 0; i < this.state.mangSanPham.length; i++) {
            const sanPham = this.state.mangSanPham[i];
            console.log(sanPham);
            contentTable.push(<tr key={i}>
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td>{sanPham.gia}</td>
            </tr>)
        }
        return contentTable;
    }

    render() {
        return (
            <div className='container'>
                <h3>Demo vòng lặp React</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSanPhamCach2()}
                    </tbody>
                </table>
            </div>
        )
    }
}

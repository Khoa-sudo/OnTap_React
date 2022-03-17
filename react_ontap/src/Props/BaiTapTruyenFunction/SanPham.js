import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {dienThoai} = this.props;
        return (
            <div className="col-4">
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={dienThoai.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{dienThoai.tenSP}</h4>
                        <button onClick={() => {
                           {this.props.xemChiTiet(dienThoai)}
                        }} className="btn btn-success">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}

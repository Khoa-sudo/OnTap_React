import React, { Component } from 'react'

export default class SinhVien extends Component {

    //Thuộc tính 
    hoTen = "Banh Thi Lem";
    lop = 'FE_70';
    // tenTrungTam='CYBERSOFT'

    //Phương thức
    renderThongTinSinhVien = (tenTrungTam) => {
        return (
            <ul>
                <li>Họ tên: {this.hoTen}</li>
                <li>Lớp: {this.lop}</li>
                <li>Trung tâm: {tenTrungTam}</li>
            </ul>
        )
    }

    //Phương thức render là phương thức thuộc class SinhVien
    render() {

        //Biến của hàm render
        const tenTrungTam = "Cybersoft";
        return (
            <div className='container text-dark'>
                {this.renderThongTinSinhVien(tenTrungTam)}
            </div>
        )
    }
}

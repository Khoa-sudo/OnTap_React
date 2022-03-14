import React, { Component } from 'react'
import data from '../../src/data/data.json';

export default class DuyetDanhSachPhim extends Component {


    constructor(props) {
        super(props);
        this.state = {
            mangPhim: data

        }
    }


    renderDanhSachPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return (
                <div key={index} className="card col-4 text-white bg-dark">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.biDanh} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTo}</p>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    {this.renderDanhSachPhim()}
                </div>
            </div>
        )
    }
}

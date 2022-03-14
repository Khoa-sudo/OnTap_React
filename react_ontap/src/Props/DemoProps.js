//Props là thuộc tính mặc định của component 
import React, { Component } from 'react'
import data from '../data/data.json';
import Phim_RCC from './Phim_RCC';
import Phim_RFC from './Phim_RFC';

export default class DemoProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangPhim:data
        }
    }
    renderPhim = () =>{
        return this.state.mangPhim.map((phim,index)=>{
            return (
                <div key={index} className="col-4">
                    {/* <Phim_RFC phim_input={phim} /> */}
                    <Phim_RCC phim_input = {phim}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='container'>
                <div className="row">{this.renderPhim()}</div>
            </div>
        )
    }
}

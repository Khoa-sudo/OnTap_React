import React, { Component } from 'react'

export default class Event extends Component {

    //Phương thức
    handleShowMessage = (thongBao) => {
        alert(thongBao)
    }

    render() {
        let thongBao = "Xin chào Khoa!"
        return (
            <div className='container'>
                {/* <button onClick={this.handleShowMessage}>Show message</button> */}
                <button onClick={() => this.handleShowMessage(thongBao)}>Show Hello</button>
            </div>
        )
    }
}

import React, { Component } from 'react'


export default class Product extends Component {
    //rcc là 1 lớp đối tượng
    //Thuộc tính


    //Phương thức

    render() {

        //Nội dung thẻ định nghĩa trong hàm render
        return (
            <div className="container">
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src="holder.js/100x180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>
        )
    }
}

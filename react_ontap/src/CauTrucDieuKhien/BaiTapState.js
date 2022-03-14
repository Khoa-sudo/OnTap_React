import React, { Component } from "react";

export default class BaiTapState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "./img/imgBlackCar.jpg",
        };
    }
    changeColor = (color) => {
        let imgClick = '';
        switch (color) {
            case 'red':
                imgClick = './img/imgRedCar.jpg'
                break;
            case 'silver':
                imgClick = './img/imgSilverCar.jpg'
                break;
            case 'black':
                imgClick = './img/imgBlackCar.jpg'
                break;       
        }
        //Gọi phương thức setState để truyền imgClick mới từ sự kiện click của button => render lại giao diện với source mới        
        this.setState({
            img:imgClick
        })
    }
    render() {
        const styleButton = {
            color:'white',
            marginRight:'5px',
            backgroundColor:'black'
        }
        return (
            <div className="container">
                <h2>Change Color</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Please choose your favorite car's color</h3>
                        <img src={this.state.img} style={{ width: "100%" }} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3>Change Color</h3>
                        <button onClick={() => this.changeColor('red')} className="btn btn-danger mr-2">Red Color</button>
                        <button onClick={() => this.changeColor('silver')} className="btn btn-secondary mr-2">Silver Color</button>
                        <button onClick={() => this.changeColor('black')} className="btn mr-2" style={styleButton}>Black Color</button>
                    </div>
                </div>
            </div>
        );
    }
}

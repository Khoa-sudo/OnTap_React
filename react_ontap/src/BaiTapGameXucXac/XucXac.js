import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {

  renderMangXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return (

        <img
          key={index}
          src={xucXac.img}
          alt=""
          srcSet=""
          width={60}
          height={60}
        />
        
      );
    });
  };
  renderKetQua = () =>{
    let tongDiem = this.props.mangXucXac.reduce((diem,xx,index)=>{
      return diem+=xx.soDiem;
    },0);
    //Tạo biến tài xỉu
    let ketQua = tongDiem > 11 ? 'Tài' : 'Xỉu'

    return `${tongDiem} - ${ketQua}`
  }
  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-4 text-right">
          <button
            className="bg-danger btn"
            onClick={() => {
              //Tạo ra 1 action đưa lên Redux
              const action = {
                type: "DAT_CUOC",
                banChon: true,
              };
              //Dùng this.props.dispatch đưa action lên redux
              this.props.dispatch(action);
            }}
          >
            <div
              className="display-4 text-white p-5"
              style={{ borderRadius: "10px", border: "none" }}
            >
              TÀI
            </div>
          </button>
        </div>
        <div className="col-4 text-center">
          {this.renderMangXucXac()}
          <div className="text-center display-4">{this.renderKetQua()}</div>
          </div>
        <div className="col-4 text-left">
          <button
            className="bg-danger btn"
            onClick={() => {
              //Tạo ra 1 action đưa lên Redux
              const action = {
                type: "DAT_CUOC",
                banChon: false,
              };
              //Dùng this.props.dispatch đưa action lên redux
              this.props.dispatch(action);
            }}
          >
            <div
              className="display-4 text-white p-5"
              style={{ borderRadius: "10px", border: "none" }}
            >
              XỈU
            </div>
          </button>
        </div>
      </div>
    );
  }
}

//Viết hàm mapStateToProps để lấy dữ liệu mangXucXac về component
const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.baiTapGameXucXacReducer.mangXucXac,
  };
};
/**
 * 2 cách gửi dữ liệu lên redux
 * Cách 1: Định tham số thứ 2 cho hàm connect là hàm mapDispatchToProp
 * Cách 2: Sử dụng this.props.dispatch khi connect thì component đã có sẵn hàm này
 * Chỉ chọn 1 trong 2
 */
export default connect(mapStateToProps)(XucXac);

import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    let { banChon, soBanThang, tongSoBanChoi } =
      this.props.baiTapGameXucXacReducer;
    console.log("props", this.props);
    return (
      <div className="text-center display-4">
        <div>
          Bạn chọn :{" "}
          <span className="text-success">{banChon ? "TÀI" : "XỈU"}</span>
        </div>
        <div>
          Số bàn thắng : <span className="text-primary">{soBanThang}</span>
        </div>
        <div>
          Tổng số bàn chơi :{" "}
          <span className="text-warning">{tongSoBanChoi}</span>
        </div>
        <button
          className="btn btn-success"
          onClick={() => {
            const action = {
              type: "PLAY_GAME",
              //mangXucXac:[{}]
            };
            //Gửi dữ liệu action lên redux
            this.props.dispatch(action);
          }}
        >
          <div className="p-2" style={{ fontSize: 25 }}>
            PLAY GAME
          </div>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    baiTapGameXucXacReducer: rootReducer.baiTapGameXucXacReducer,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);

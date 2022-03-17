import React, { Component } from "react";

export default class ModelGioHang extends Component {
  render() {
    const { gioHang } = this.props;
    return (
      <div>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div
                className="modal-content"
                style={{ maxWidth: "1000px", width: "1000px" }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">Giỏ hàng</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gioHang.map((spGH, index) => {
                        return (
                          <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td>{spGH.hinhAnh}</td>
                            <td>{spGH.tenSP}</td>
                            <td>{spGH.soLuong}</td>
                            <td>{spGH.giaBan}</td>
                            <td>{spGH.soLuong * spGH.giaBan}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

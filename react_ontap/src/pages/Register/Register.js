import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class Register extends Component {
  handleSubmit = (e) => {
    this.setState({
      submited: false,
    });
    e.preventDefault();
  };
  state = {
    submited: true,
  };

  render() {
    return (
      <form action="" className="container" onSubmit={this.handleSubmit}>
        <h3 className="text-center text-primary">Đăng ký</h3>
        <div className="form-group">
          <p>Tài khoản</p>
          <input type="text" name="taiKhoan" className="form-control" />
        </div>
        <div className="form-group">
          <p>Họ tên</p>
          <input type="text" name="hoTen" className="form-control" />
        </div>
        <div className="form-group">
          <p>Password</p>
          <input type="password" name="matKhau" className="form-control" />
        </div>
        <div className="form-group">
          <p>Email</p>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <p>Số điện thoại</p>
          <input type="text" name="soDienThoai" className="form-control" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Đăng ký
          </button>
        </div>
        <Prompt
          when={this.state.submited}
          message={location=>('Bạn thật sự muốn rời khỏi trang?')}
        />
      </form>
    );
  }
}

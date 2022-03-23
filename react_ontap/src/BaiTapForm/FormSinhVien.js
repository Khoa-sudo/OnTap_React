import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    valid: false,
  };

  handleChange = (e) => {
    //Lấy giá trị mỗi lần value input thay đổi bởi người dùng
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;
    let errorMessage = "";

    //Kiểm tra rỗng
    if (value.trim() === "") {
      // Kiểm tra bất kì control input nào người dùng nhập vào là rỗng
      errorMessage = name + " không được bỏ trống";
    }

    if (type === "email") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = name + " không đúng định dạng";
      }
    }
    if (name === "soDienThoai") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = name + " không đúng định dạng";
      }
    }
    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorMessage };

    this.setState(
      {
        ...this.state,
        values: values,
        errors: errors,
      },
      () => {
        console.log(this.state);
        this.checkValid();
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); //Cản sự kiện submit reload trang của browser. Nếu ct reload lại sẽ mất dữ liệu
    this.props.themSinhVien(this.state.values);
  };

  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" && this.state.values[key] === "") {
        valid = false;
      }
    }
    this.setState({
      ...this.state,
      valid: valid,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            Thông tin sinh viên
          </div>
          <div className="card-body">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    type="text"
                    name="maSV"
                    className="form-control"
                    value={this.state.values.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    type="text"
                    name="hoTen"
                    className="form-control"
                    value={this.state.values.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    className="form-control"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    name="soDienThoai"
                    type="text"
                    pattern="^(0|[1-9][0-9]*)$"
                    className="form-control"
                    value={this.state.values.soDienThoai}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-right">
                  {/* Sử dụng type Submit thay vì onClick vì khi submit thì người dùng nhập vào rồi enter thì form sẽ tự submit luôn */}
                  {this.state.valid ? (
                    <button className="btn btn-success" type="submit">
                      Thêm sinh viên
                    </button>
                  ) : (
                    <button className="btn btn-success" type="submit" disabled>
                      Thêm sinh viên
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      console.log(action);
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSinhVien);

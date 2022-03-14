import React, { Component } from 'react'

export default class DieuKien extends Component {
    constructor(props) {
        super(props);

        //this.state là thuộc tính có sẵn của component
        //chứa các thuộc tính có khả năng thay đổi bởi 1 sự kiến

        this.state = {
            //Thuộc tính
            isLogin: false,
            userName: ''
        }
    }



    // Cách 1: Dùng phương thức kết hợp if để xác định nội dung render
    // renderContent = () => {
    //     this.userName='Khoa'
    //     if (this.isLogin) {
    //         return <div>Xin chào bạn {this.userName}
    //             <button>Logout</button>
    //         </div>
    //     }
    //     return <div><button>Login</button></div>

    // }

    login = () => {
        //Giao diện không được render lại ==> phải đổi state thông qua setState  
        //this.setState(): là phương thức kế thừa từ class component
        //===> thay đổi giá trị state và gọi hàm render

        
        this.setState({
            isLogin: true,
            userName: 'Khoa'
        }, () => {
            //setState là phương thức bất đồng bộ
            //thêm hàm callback de ra đúng giá trị sau khi đã thực thi lệnh            
            console.log(this.state);
        })

        //Không có setState thì giao diện không thay đổi
        // this.state.isLogin = true;
        // this.state.userName = 'Khoa';


    }
    logout = () => {
        this.setState({
            isLogin: false,
            userName: ''
        }, () => {
            console.log(this.state);
        })
    }

    render() {

        return (
            <div>
                {/* {this.renderContent()} */}
                {this.state.isLogin ? <div>Hello {this.state.userName}<button onClick={this.logout}>Logout</button></div> : <div><button onClick={this.login}>Login</button></div>}
            </div>
        )
    }
}

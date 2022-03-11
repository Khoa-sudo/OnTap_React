import React, { Component } from 'react'

export default class DieuKien extends Component {

    //Thuộc tính
    isLogin = true;
    userName = 'Khoa';

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

    render() {

        return (
            <div>
                {/* {this.renderContent()} */}
                {this.isLogin === true ? <div>Xin chào bạn {this.userName}<button>Logout</button></div> : <div><button>Login</button></div>}
            </div>
        )
    }
}

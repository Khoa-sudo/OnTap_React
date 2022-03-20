import React, { Component } from 'react'

export default class XucXac extends Component {
  render() {
    return (
      <div className='row'>
          <div className="col-4 text-right">
              <button className='bg-danger btn'>
                  <div className="display-4 text-white p-5" style={{borderRadius:'10px',border:'none'}}>TÀI</div>
              </button>
          </div>
          <div className="col-4 text-center">
              <img src="./img/gameXucXac/1.png" width={50} height={50} alt="" />
              <img src="./img/gameXucXac/1.png" width={50} height={50} alt="" />
              <img src="./img/gameXucXac/1.png" width={50} height={50} alt="" />

          </div>
          <div className="col-4 text-left">
              <button className='bg-danger btn'>
                  <div className="display-4 text-white p-5" style={{borderRadius:'10px',border:'none'}}>TÀI</div>
              </button>
          </div>
      </div>
    )
  }
}

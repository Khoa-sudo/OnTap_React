import React, { Component } from 'react'

export default class Phim_RCC extends Component {


  render() {
    const {phim_input} = this.props;
    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" src="holder.js/100px180/" alt />
        <div className="card-body">
          <h4 className="card-title">{phim_input.tenPhim}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>

    )
  }
}

import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import style from './BaiTapGameXucXac.module.css'

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className={`${style.fontGame} container`} style={{ backgroundImage: 'url(./img/gameXucXac/bgGame.png)', width: '100vw', height: '100vh' }}>
                <h3 className="text-center display-4 pt-5">Bài Tập Game Xúc Xắc</h3>


                <XucXac />

                <KetQua />
            </div>
        )
    }
}

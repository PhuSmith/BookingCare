import React, { Component } from 'react';
import './Banner.scss';

export default class Banner extends Component {
  render() {
    return (
      <div className="home-banner">
        <div className="content-up">
          <div className="title1">NỀN TẢNG Y TẾ</div>
          <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
          <div className="search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Tìm chuyên khoa" />
          </div>
        </div>
        <div className="content-down">
          <div className="options">
            <div className="option-child">
              <div className="icon-child">
                <i className="far fa-hospital"></i>
              </div>
              <div className="text-child">Khám chuyên khoa</div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="text-child">Khám từ xa</div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-procedures"></i>
              </div>
              <div className="text-child">Khám tổng quát</div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-flask"></i>
              </div>
              <div className="text-child">Xét nghiệm y học</div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="text-child">Sức khỏe tinh thần</div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-briefcase-medical"></i>
              </div>
              <div className="text-child">Khám nha khoa</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

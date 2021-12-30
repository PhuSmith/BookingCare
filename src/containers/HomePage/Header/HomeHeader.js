import React, { Component } from 'react';
import logo from '../../../assets/logo.svg';
import './HomeHeader.scss';

export default class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header-container container">
        <div className="home-header-content">
          <div className="left-content">
            <i className="fas fa-bars"></i>
            <div className="header-logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="center-content">
            <div className="child-content">
              <div>
                <b>Chuyên khoa</b>
              </div>
              <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
            </div>
            <div className="child-content">
              <div>
                <b>Cơ sở y tế</b>
              </div>
              <div className="subs-title">Chọn bệnh viện phòng khám</div>
            </div>
            <div className="child-content">
              <div>
                <b>Bác sĩ</b>
              </div>
              <div className="subs-title">Chọn bác sĩ giỏi</div>
            </div>
            <div className="child-content">
              <div>
                <b>Gói khám</b>
              </div>
              <div className="subs-title">Khám sức khỏe tổng quát</div>
            </div>
          </div>
          <div className="right-content">
            <div className="support">
              <i className="fas fa-question-circle"></i>Hỗ trợ
            </div>
            <div className="language-vi">VN</div>
            <div className="language-en">EN</div>
          </div>
        </div>
      </div>
    );
  }
}

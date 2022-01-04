import React, { Component } from 'react';
import Slider from 'react-slick';
import './OutstandingDoctor.scss';

export default class OutstandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container container">
          <div className="section-header">
            <h2 className="title-section">Bác sĩ nổi bật tuần qua</h2>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-content">
            <Slider {...this.props.settings}>
              <div className="section-item">
                <div className="outer-bg">
                  <div className="bg-img section-outstanding-doctor" />
                </div>
                <div className="position text-center">
                  <h3>Giáo sư, Tiến sĩ PhuSmith</h3>
                  <p>Cơ xương khớp</p>
                </div>
              </div>
              <div className="section-item">
                <div className="outer-bg">
                  <div className="bg-img section-outstanding-doctor" />
                </div>
                <div className="position text-center">
                  <h3>Giáo sư, Tiến sĩ PhuSmith</h3>
                  <p>Cơ xương khớp 2</p>
                </div>
              </div>
              <div className="section-item">
                <div className="outer-bg">
                  <div className="bg-img section-outstanding-doctor" />
                </div>
                <div className="position text-center">
                  <h3>Giáo sư, Tiến sĩ PhuSmith</h3>
                  <p>Cơ xương khớp 3</p>
                </div>
              </div>
              <div className="section-item">
                <div className="outer-bg">
                  <div className="bg-img section-outstanding-doctor" />
                </div>
                <div className="position text-center">
                  <h3>Giáo sư, Tiến sĩ PhuSmith</h3>
                  <p>Cơ xương khớp 4</p>
                </div>
              </div>
              <div className="section-item">
                <div className="outer-bg">
                  <div className="bg-img section-outstanding-doctor" />
                </div>
                <div className="position text-center">
                  <h3>Giáo sư, Tiến sĩ PhuSmith</h3>
                  <p>Cơ xương khớp 5</p>
                </div>
              </div>
              <div className="section-item">
                <div className="outer-bg">
                  <div className="bg-img section-outstanding-doctor" />
                </div>
                <div className="position text-center">
                  <h3>Giáo sư, Tiến sĩ PhuSmith</h3>
                  <p>Cơ xương khớp 6</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

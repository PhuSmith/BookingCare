import React, { Component } from 'react';
import Slider from 'react-slick';
import './Specialty.scss';

export default class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container container">
          <div className="section-header">
            <h2 className="title-section">Chuyên khoa phổ biến</h2>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-content">
            <Slider {...this.props.settings}>
              <div className="section-item">
                <div className="bg-img section-specialty" />
                <h3>Cơ xương khớp 1</h3>
              </div>
              <div className="section-item">
                <div className="bg-img section-specialty" />
                <h3>Cơ xương khớp 2</h3>
              </div>
              <div className="section-item">
                <div className="bg-img section-specialty" />
                <h3>Cơ xương khớp 3</h3>
              </div>
              <div className="section-item">
                <div className="bg-img section-specialty" />
                <h3>Cơ xương khớp 4</h3>
              </div>
              <div className="section-item">
                <div className="bg-img section-specialty" />
                <h3>Cơ xương khớp 5</h3>
              </div>
              <div className="section-item">
                <div className="bg-img section-specialty" />
                <h3>Cơ xương khớp 6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
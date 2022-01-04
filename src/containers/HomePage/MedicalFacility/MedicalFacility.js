import React, { Component } from 'react';
import Slider from 'react-slick';
import './MedicalFacility.scss';

export default class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-container container">
          <div className="section-header">
            <h2 className="title-section">Cơ sở y tế nổi bật</h2>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-content">
            <Slider {...this.props.settings}>
              <div className="section-item">
                <div className="bg-img section-medical-facility" />
                <h3>Hệ thống Y tế Thu Cúc 1</h3>
              </div>
              <div className="section-item">
                <div className="bg-img section-medical-facility" />
                <h3>Hệ thống Y tế Thu Cúc 2</h3>
              </div>
              <div className="section-item">
                <div className="bg-img section-medical-facility" />
                <h3>Hệ thống Y tế Thu Cúc 3</h3>
              </div>
              <div className="section-item">
                <div className="bg-img section-medical-facility" />
                <h3>Hệ thống Y tế Thu Cúc 4</h3>
              </div>
              <div className="section-item">
                <div className="bg-img section-medical-facility" />
                <h3>Hệ thống Y tế Thu Cúc 5</h3>
              </div>
              <div className="section-item">
                <div className="bg-img section-medical-facility" />
                <h3>Hệ thống Y tế Thu Cúc 6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

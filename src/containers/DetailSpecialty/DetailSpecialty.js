import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../HomePage/Header/HomeHeader';
import DoctorSchedule from '../DetailDoctorPage/DoctorSchedule/DoctorSchedule';
import DoctorExtraInfor from '../DetailDoctorPage/DoctorExtraInfor/DoctorExtraInfor';
import ProfileDoctor from '../DetailDoctorPage/ProfileDoctor/ProfileDoctor';
import {
  getAllDetailSpecialtyByIdService,
  getAllCodeService,
} from '../../services/userService';
import './DetailSpecialty.scss';
import { LANGUAGES } from '../../utils';

class DetailSpecialty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctorId: [],
      dataDetailSpecialty: {},
      listProvince: [],
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    let res = await getAllDetailSpecialtyByIdService({
      id,
      location: 'ALL',
    });

    let resProvince = await getAllCodeService('PROVINCE');

    if (res && res.errCode === 0 && resProvince && resProvince.errCode === 0) {
      let arrDoctorId = [];
      res?.data?.doctorSpecialty?.forEach((item) => {
        arrDoctorId.push(item.doctorId);
      });

      let dataProvince = resProvince.data;
      if (dataProvince && dataProvince.length > 0) {
        dataProvince.unshift({
          createdAt: null,
          keyMap: 'ALL',
          type: 'PROVINCE',
          valueVi: 'Toàn quốc',
          valueEn: 'ALL',
        });
      }

      this.setState({
        dataDetailSpecialty: res.data,
        arrDoctorId: arrDoctorId,
        listProvince: dataProvince ? dataProvince : [],
      });
    }
  }

  handleOnChangeSelect = async (e) => {
    const { id } = this.props.match.params;
    let location = e.target.value;

    let res = await getAllDetailSpecialtyByIdService({
      id,
      location,
    });

    if (res && res.errCode === 0) {
      let arrDoctorId = [];
      res?.data?.doctorSpecialty?.forEach((item) => {
        arrDoctorId.push(item.doctorId);
      });

      this.setState({
        dataDetailSpecialty: res.data,
        arrDoctorId: arrDoctorId,
      });
    }
  };

  render() {
    const { arrDoctorId, dataDetailSpecialty, listProvince } = this.state;
    const { language } = this.props;
    return (
      <div className="detail-specialty-container">
        <HomeHeader />
        <div className="detail-specialty-body">
          <div className="description-specialty">
            <div
              className="container"
              dangerouslySetInnerHTML={{
                __html: dataDetailSpecialty?.descriptionHTML,
              }}
            ></div>
          </div>
          <div className="search-sp-doctor">
            <select onChange={this.handleOnChangeSelect}>
              {listProvince?.map((item, index) => {
                return (
                  <option key={index} value={item.keyMap}>
                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                  </option>
                );
              })}
            </select>
          </div>
          {arrDoctorId?.map((item, index) => {
            return (
              <div className="each-doctor" key={item}>
                <div className="dt-content-left">
                  <div className="profile-doctor">
                    <ProfileDoctor
                      doctorId={item}
                      isShowDescriptionDoctor={true}
                      isShowLinkDetail={true}
                      isShowPrice={false}
                      // dataTime={dataTime}
                    />
                  </div>
                </div>
                <div className="dt-content-right">
                  <div className="doctor-schedule">
                    <DoctorSchedule doctorId={item} />
                  </div>
                  <div className="doctor-extra-infor">
                    <DoctorExtraInfor doctorId={item} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.app.language,
});

export default connect(mapStateToProps)(DetailSpecialty);

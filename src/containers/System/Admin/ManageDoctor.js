import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import Select from 'react-select';
import 'react-markdown-editor-lite/lib/index.css';
import './ManageDoctor.scss';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: '',
      contentHTML: '',
      selectedDoctor: '',
      description: '',
      listDoctors: [],
    };
  }

  componentDidMount() {
    this.props.getAllDoctors();
  }

  static getDerivedStateFromProps(newProps, currentState) {
    if (newProps.allDoctors !== currentState.listDoctors) {
      const buildDataInputSelect = (inputData) => {
        let result = [];
        const { language } = newProps;
        if (inputData && inputData.length > 0) {
          inputData.map((item, index) => {
            let object = {};
            let labelVi = `${item.lastName} ${item.firstName}`;
            let labelEn = `${item.firstName} ${item.lastName}`;
            object.label = language === LANGUAGES.VI ? labelVi : labelEn;
            object.value = item.id;
            result.push(object);
          });
        }
        return result;
      };
      let dataSelect = buildDataInputSelect(newProps.allDoctors);
      return { ...currentState, listDoctors: dataSelect };
    }
    return currentState;
  }

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };

  handleSaveContentMarkdown() {
    this.props.saveDetailDoctor({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedDoctor.value,
    });
  }

  handleChange = (selectedDoctor) => {
    this.setState({ selectedDoctor });
  };

  handleOnchangeDesc = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  render() {
    const { selectedDoctor, description, listDoctors } = this.state;
    return (
      <div className="manage-doctor-container">
        <div className="manage-doctor-title">Tạo thêm thông tin doctors</div>
        <div className="more-infor">
          <div className="content-left form-group">
            <label>Chọn bác sĩ</label>
            <Select
              value={selectedDoctor}
              onChange={this.handleChange}
              options={listDoctors}
            />
          </div>
          <div className="content-right">
            <label>Thông tin giới thiệu:</label>
            <textarea
              className="form-control"
              rows="4"
              value={description}
              onChange={(e) => this.handleOnchangeDesc(e)}
            >
              kjfksdjfls
            </textarea>
          </div>
        </div>
        <div className="manage-doctor-editor">
          <MdEditor
            style={{ height: '500px' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />
        </div>
        <button
          className="save-content-doctor"
          onClick={() => this.handleSaveContentMarkdown()}
        >
          Lưu thông tin
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    allDoctors: state.admin.allDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDoctors: () => {
      dispatch(actions.getAllDoctorsApi());
    },
    saveDetailDoctor: (data) => {
      dispatch(actions.saveDetailDoctorApi(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);

import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Icon,
  InputNumber,
  DatePicker,
  Upload,
  Modal,
} from 'antd';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TEAM_CREATE_REQUEST } from '../store/reducers/teamCreate';
import swal from 'sweetalert';

const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

const TeamCreateContainer = props => {
  const [teamtitle, setTeamtitle] = useState('');
  const [teamDescription, setTeamdescription] = useState('');
  const [teamMaxpersonnel, setTeammaxpersonnel] = useState(0);
  const [teamEnddate, setTeamendate] = useState('');
  const [previewVisible, setPreviewvisible] = useState(false);
  const [previewImage, setPreviewimage] = useState('');
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const { access } = useSelector(state => state.user);

  const { TextArea } = Input;

  const onChangeTeamTitle = e => {
    setTeamtitle(e.target.value);
  };
  const onChangeTeamDescription = e => {
    setTeamdescription(e.target.value);
  };
  const onChangeTeamMaxPersonnel = value => {
    setTeammaxpersonnel(value);
  };
  const onChangeTeamEndDate = value => {
    setTeamendate(value.format('YYYY-MM-DD HH:mm:ss'));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('title', teamtitle);
    formdata.append('description', teamDescription);
    formdata.append('max_personnel', teamMaxpersonnel);
    formdata.append('end_date', teamEnddate);
    formdata.append('access', access);
    formdata.append('image', image);

    await dispatch({
      type: TEAM_CREATE_REQUEST,
      payload: {
        formdata,
      },
    });

    swal('팀생성 완료!', 'success').then(() => {
      window.location.href = '/';
    });
  };

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const handleCancel = () => setPreviewvisible(false);

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewimage(file.url || file.preview);
    setPreviewvisible(true);
  };

  const handleChange = ({ file, fileList }) => {
    setImage(file.originFileObj);
  };
  const buttonItemLayout = {
    wrapperCol: { span: 28 },
  };
  const config = {
    rules: [
      { type: 'object', required: true, message: '마감 기한을 정해주세요.' },
    ],
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
      <section id="register-content">
        <div className="container">
          <div className="display-flex flex-direction-column align-items-center content-title-aria">
            <div className="text-bold register-title .mb-20">팀 생성</div>
            <div style={{ width: '50%' }}>
              <Form
                layout="horizontal"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <Form.Item label="팀 이름">
                  {getFieldDecorator('title', {
                    rules: [
                      {
                        required: true,
                        message: '팀 이름을 입력하세요.',
                      },
                    ],
                  })(
                    <Input
                      size="large"
                      placeholder="team title"
                      onChange={onChangeTeamTitle}
                    />,
                  )}
                </Form.Item>

                <Form.Item label="팀 세부설명">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: '팀 세부설명을 입력하세요.',
                      },
                    ],
                  })(
                    <TextArea
                      placeholder="team description"
                      autoSize={{ minRows: 5, maxRows: 20 }}
                      onChange={onChangeTeamDescription}
                    />,
                  )}
                </Form.Item>
                <Form.Item label="팀 최대인원">
                  {getFieldDecorator('max personnel', {
                    rules: [
                      {
                        required: true,
                        message: '팀 최대인원을 입력하세요.',
                      },
                    ],
                  })(
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={2}
                      onChange={onChangeTeamMaxPersonnel}
                    />,
                  )}
                </Form.Item>
                <Form.Item label="마감 기한">
                  {getFieldDecorator(
                    'date-picker',
                    config,
                  )(<DatePicker onChange={onChangeTeamEndDate} mode="date" />)}
                </Form.Item>
                <div className="clearfix">
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {image === '' ? null : uploadButton}
                  </Upload>
                  <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: '100%' }}
                      src={previewImage}
                    />
                  </Modal>
                </div>
                <Form.Item {...buttonItemLayout}>
                  <Button
                    size="large"
                    className="login-button"
                    htmlType="submit"
                    block
                  >
                    <Icon type="team" className="login-icon" />
                    팀 생성
                    <span className="right-space" />
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(Form.create()(TeamCreateContainer));

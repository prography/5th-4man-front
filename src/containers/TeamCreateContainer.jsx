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
import { useSelector } from 'react-redux';
import * as PostAPI from 'lib/api/post';
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
  const [previewVisible, setPreviewvisible] = useState(false);
  const [previewImage, setPreviewimage] = useState('');
  const [image, setImage] = useState('');
  const { access } = useSelector(state => state.user);
  const { getFieldDecorator } = props.form;
  const { TextArea } = Input;

  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFields(async (err, values) => {
      if (!err) {
        const formdata = new FormData();
        formdata.append('title', values.title);
        formdata.append('description', values.description);
        formdata.append('max_personnel', values.max_personnel);
        formdata.append(
          'end_date',
          values.end_date.format('YYYY-MM-DD HH:mm:ss'),
        );
        formdata.append('access', access);
        formdata.append('image', image);

        const data = await PostAPI.createTeam(formdata);

        swal('팀생성 완료!', 'success').then(() => {
          window.location.href = `/team/${data.data.id}`;
        });
      }
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
                        message: '팀 이름은 필수로 입력해주세요.',
                      },
                      {
                        max: 50,
                        min: 5,
                        message: '5 - 50자 내로 작성해주세요.',
                      },
                    ],
                  })(<Input size="large" placeholder="team title" />)}
                </Form.Item>

                <Form.Item label="팀 세부설명">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: '팀 세부설명은 필수로 입력해주세요.',
                      },
                      {
                        max: 2000,
                        min: 50,
                        message: '50 - 2000글자 이하로 입력하세요.',
                      },
                    ],
                  })(
                    <TextArea
                      placeholder="team description"
                      autoSize={{ minRows: 5, maxRows: 20 }}
                    />,
                  )}
                </Form.Item>
                <Form.Item label="팀 최대인원">
                  {getFieldDecorator('max_personnel', {
                    initialValue: 1,
                    rules: [
                      {
                        required: true,
                        message: '팀 최대인원을 입력하세요.',
                      },
                    ],
                  })(<InputNumber min={1} max={10} />)}
                </Form.Item>
                <Form.Item label="마감 기한">
                  {getFieldDecorator('end_date', {
                    rules: [
                      {
                        type: 'object',
                        required: true,
                        message: '마감 기한을 정해주세요.',
                      },
                    ],
                  })(<DatePicker mode="date" format="YYYY-MM-DD" />)}
                </Form.Item>
                <div className="clearfix">
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {image === '' ? uploadButton : ''}
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

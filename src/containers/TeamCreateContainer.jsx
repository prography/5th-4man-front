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
  Tag,
  AutoComplete,
  Divider,
} from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as api from 'lib/api/post';
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
  const [image, setImage] = useState(null);
  const [selectTags, setSelectTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [input, setInput] = useState('');

  const { access } = useSelector(state => state.user);
  const { getFieldDecorator } = props.form;
  const { TextArea } = Input;

  const addItem = async () => {
    const params = {
      name: input,
    };
    await api.insertTag(params);

    if (searchTags.length < 6) {
      setSearchTags(
        [...searchTags, input].filter(
          (item, index) => [...searchTags, input].indexOf(item) === index,
        ),
      );

      setInput('');
    }
  };

  const handleTagSearch = async value => {
    setInput(value);
    try {
      if (value !== '') {
        const getTag = await api.getTagData(value);

        if (getTag.data.length === 0) {
          setSelectTags([]);
        } else {
          let selectTagList = [];
          for (let i = 0; i < getTag.data.length; i += 1) {
            selectTagList = [...selectTags, getTag.data[i].name].filter(
              (item, index) =>
                [...selectTags, getTag.data[i].name].indexOf(item) === index,
            );
          }

          setSelectTags(selectTagList);
        }
      }
    } catch (err) {}
  };

  const onSelect = selectedItems => {
    setSearchTags(
      [...searchTags, selectedItems].filter(
        (item, index) => [...searchTags, selectedItems].indexOf(item) === index,
      ),
    );
  };

  const handleClose = removedTag => {
    setSearchTags(searchTags.filter(tag => tag !== removedTag));
  };

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
        formdata.append('tags', searchTags);
        const data = await api.createTeam(formdata);
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

  const handleChange = ({ file }) => {
    setImage(file.originFileObj);

    if (file.status === 'removed') {
      setImage(null);
    }
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

                <Form.Item label="태그">
                  {searchTags.map((tag, index) => {
                    const isLongTag = tag.length > 6;
                    const tagElem = (
                      <Tag
                        key={index}
                        color="#5f76f3"
                        closable
                        onClose={e => {
                          e.preventDefault();
                          handleClose(tag);
                        }}
                        style={{ borderRadius: '30px' }}
                      >
                        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                      </Tag>
                    );

                    return tagElem;
                  })}
                  <AutoComplete
                    value={input}
                    dataSource={selectTags === [] ? [] : selectTags}
                    style={{ width: '100%', padding: '10px 0' }}
                    onChange={handleTagSearch}
                    onSelect={onSelect}
                    notFoundContent={[]}
                    autoFocus={false}
                    dropdownRender={
                      input !== ''
                        ? menu => (
                            <div>
                              {menu}
                              <Divider style={{ margin: '4px 0' }} />
                              <div
                                style={{
                                  padding: '4px 8px',
                                  cursor: 'pointer',
                                }}
                                onMouseDown={e => e.preventDefault()}
                                onClick={addItem}
                              >
                                <Icon type="plus" /> 새로 추가 : {input}
                              </div>
                            </div>
                          )
                        : menu => <div></div>
                    }
                  >
                    <Input
                      prefix={
                        <Icon
                          type="search"
                          style={{ color: 'rgba(0,0,0,.45)' }}
                        />
                      }
                      style={{ width: '100%' }}
                      size="large"
                      maxLength={10}
                      placeholder="예 : 프론트엔드"
                    />
                  </AutoComplete>
                </Form.Item>

                <Form.Item label="이미지 업로드">
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    onPreview={handlePreview}
                    onChange={handleChange}
                    accept="image/*"
                  >
                    {image === null ? uploadButton : null}
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
                </Form.Item>
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

import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button, Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ADD_REGISTER_REQUEST } from '../store/reducers/user';

const AddedForm = props => {
  const [introduce, setIntroduce] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { history } = props;

  const dispatch = useDispatch();
  const { userId, access } = useSelector(state => state.user);

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeIntroduce = e => {
    setIntroduce(e.target.value);
  };
  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleSubmit = useCallback(e => {
    e.preventDefault();

    dispatch({
      type: ADD_REGISTER_REQUEST,
      payload: { email, introduce, name, userId, access },
    });
    history.push('/');
  }, []);

  const buttonItemLayout = {
    wrapperCol: { span: 28 },
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
      {' '}
      <div className="text-bold register-title .mb-20">추가 정보</div>
      <div style={{ width: '50%' }}>
        <Form layout="horizontal" onSubmit={handleSubmit}>
          <Form.Item label="이메일">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: '이메일 형식이 아닙니다.',
                },
                {
                  required: true,
                  message: '이메일을 입력하세요.',
                },
              ],
            })(
              <Input
                size="large"
                placeholder="example@gmail.com"
                onChange={onChangeEmail}
              />,
            )}
          </Form.Item>
          <Form.Item label="한줄 소개" hasFeedback>
            <Input
              size="large"
              placeholder="안녕하세요."
              onChange={onChangeIntroduce}
            />
          </Form.Item>
          <Form.Item label="이름" hasFeedback>
            <Input size="large" placeholder="홍길동" onChange={onChangeName} />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                <a href="">이용약관</a> 및 개인정보 처리방침 동의 (필수)
              </Checkbox>,
            )}
          </Form.Item>

          <Form.Item {...buttonItemLayout}>
            <Button
              size="large"
              className="email-button"
              htmlType="submit"
              block
            >
              <Icon type="mail" className="email-icon" />
              저장하기
              <span className="right-space" />
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default withRouter(Form.create()(AddedForm));

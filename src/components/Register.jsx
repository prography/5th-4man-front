import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button, Icon } from 'antd';
import { useDispatch } from 'react-redux';
import {
  LOG_IN_GITHUB_CODE_REQUEST,
  SIGN_UP_REQUEST,
} from '../store/reducers/user';

const Register = props => {
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleConfirmBlur = e => {
    const { value } = e.target;
    setConfirmDirty({ confirmDirty: confirmDirty || !!value });
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('비밀번호가 다릅니다.');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const buttonItemLayout = {
    wrapperCol: { span: 28 },
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch({ type: SIGN_UP_REQUEST, payload: { email, password, name } });
    },
    [email, password, name],
  );
  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangeName = e => {
    setName(e.target.value);
  };

  const onLoginGithub = () => {
    dispatch({ type: LOG_IN_GITHUB_CODE_REQUEST });
  };
  const { getFieldDecorator } = props.form;
  return (
    <>
      {' '}
      <div className="text-bold register-title .mb-20">회원가입</div>
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
          <Form.Item label="비밀번호">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '비밀번호를 입력하세요.',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            })(
              <Input.Password
                size="large"
                placeholder="*******"
                onChange={onChangePassword}
              />,
            )}
          </Form.Item>
          <Form.Item label="비밀번호 확인" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '비밀번호를 확인하세요.',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            })(
              <Input.Password
                onBlur={handleConfirmBlur}
                size="large"
                placeholder="*******"
              />,
            )}
          </Form.Item>
          <Form.Item label="이름" hasFeedback>
            <Input size="large" placeholder="홍길동" onChange={onChangeName} />,
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
              가입하기
              <span className="right-space" />
            </Button>
            <div className="button-border">
              <Button
                className="github-button"
                size="large"
                onClick={onLoginGithub}
                block
              >
                <Icon type="github" className="github-icon" />
                깃허브로 시작하기
                <span className="right-space" />
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Form.create()(Register);

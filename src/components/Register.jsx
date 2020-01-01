import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, Icon } from 'antd';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as userActions from '../store/reducers/user';
import * as PostAPI from 'lib/api/post';
import swal from 'sweetalert';

const Register = props => {
  const [confirmDirty, setConfirmDirty] = useState(false);
  const dispatch = useDispatch();

  const buttonItemLayout = {
    wrapperCol: { span: 28 },
  };

  const validateToUserName = async (rule, value, callback) => {
    const { form } = props;

    const params = {
      username: form.getFieldValue('username'),
    };

    const data = await PostAPI.idCheck(params);
    if (data.data.username) {
      callback('로그인 중복입니다.');
    } else {
      callback();
    }
  };

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

  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFields(async (err, values) => {
      if (!err) {
        const params = {
          values,
        };

        await dispatch(userActions.getSignUpAction(params));

        swal('회원가입 성공!', '개같하에 오신것을 환영합니다.', 'success').then(
          () => {
            window.location.href = '/';
          },
        );
      }
    });
  };

  const onLoginGithub = () => {
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=a7863c21770a0dd4c503';
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
      {' '}
      <div className="text-bold register-title .mb-20">회원가입</div>
      <div style={{ width: '50%' }}>
        <Form layout="horizontal" onSubmit={handleSubmit}>
          <Form.Item hasFeedback label="로그인 아이디">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: '아이디를 입력하세요.',
                },
                {
                  validator: validateToUserName,
                },
                {
                  pattern: /^[a-z]{1}[a-z0-9]{4,15}$/i,
                  message: '로그인 형식을 입력하세요.',
                },
              ],
            })(<Input size="large" placeholder="login id" />)}
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
                {
                  pattern: /(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i,
                  message:
                    '비밀번호는 6자 이상의 영문, 숫자, 특수문자가 필요합니다.',
                },
              ],
            })(<Input.Password size="large" placeholder="*******" />)}
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
          <Form.Item label="이메일">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: '이메일이 올바르지 않습니다.',
                },
                {
                  required: true,
                  message: '이메일은 필수로 입력해주세요.',
                },
              ],
            })(<Input size="large" placeholder="example@gmail.com" />)}
          </Form.Item>
          <Form.Item label="한줄 소개" hasFeedback>
            {getFieldDecorator('introduction', {
              rules: [
                {
                  max: 200,
                  message: '한줄 소개는 200자 내로 작성해주세요.',
                },
              ],
            })(<Input size="large" placeholder="안녕하세요." />)}
          </Form.Item>
          <Form.Item label="이름" hasFeedback>
            {getFieldDecorator('nickname', {
              rules: [
                {
                  pattern: /^[a-zA-Z가-힣]{1}[a-zA-Z0-9가-힣]{1,9}$/i,
                  message: '이름은 특수문자 제외 한글자 이상이어야 합니다.',
                },
              ],
            })(<Input size="large" placeholder="홍길동" />)}
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
              className="login-button"
              htmlType="submit"
              block
            >
              <Icon type="login" className="login-icon" />
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

export default withRouter(Form.create()(Register));

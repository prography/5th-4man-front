import React from 'react';
import { Form, Input, Checkbox, Button, Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as userActions from '../store/reducers/user';
import swal from 'sweetalert';

const AddedForm = props => {
  const dispatch = useDispatch();
  const { userId, access } = useSelector(state => state.user);

  const handleSubmit = async e => {
    e.preventDefault();

    props.form.validateFields(async (err, values) => {
      if (!err) {
        const params = {
          email: values.email,
          introduction: values.introduction,
          nickname: values.nickname,
          userId,
          access,
        };

        await dispatch(userActions.getAddRegisterAction(params));

        swal('회원가입 성공!', '개같하에 오신것을 환영합니다.', 'success').then(
          () => {
            window.location.href = '/';
          },
        );
      }
    });
  };

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
                <a href="#">이용약관</a> 및 개인정보 처리방침 동의 (필수)
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Icon, Form } from 'antd';
import * as PostAPI from 'lib/api/post';

import swal from 'sweetalert';
import { CLOSE_MODAL } from '../store/reducers/modal';

const Application = ({ form }) => {
  const { team } = useSelector(state => state.teamDetail);

  const { getFieldDecorator } = form;

  const { TextArea } = Input;

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields(async (err, values) => {
      if (!err) {
        const params = { team: team.id, ...values };
        const { access } = JSON.parse(localStorage.getItem('token'));

        await PostAPI.teamApplication(params, access);

        swal('신청완료', '신청 이력을 확인하시겠습니까?', 'success', {
          buttons: {
            cancel: {
              text: '취소',
              visible: true,
            },
            confirm: {
              text: '확인',
            },
          },
        }).then(confirm => {
          if (confirm) {
            window.location.href = '/mypage';
          }
        });
      }
    });
  };

  return (
    <div className="modal-body application-modal">
      <Form className="application-form" onSubmit={handleSubmit}>
        <Form.Item label="자기소개/지원동기">
          {getFieldDecorator('reason', {
            rules: [
              {
                required: true,
                message: '지원동기는 필수로 입력해주세요.',
              },
              {
                max: 500,
                message: '지원동기는 500자 내로 작성해주세요.',
              },
            ],
          })(
            <TextArea
              placeholder="팀장이 회원님에 대해 알 수 있도록 자기소개와 지원동기를 작성해주세요."
              autoSize={{ minRows: 6 }}
            />,
          )}
        </Form.Item>
        <Form.Item label="이메일">
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: '이메일은 필수로 입력해주세요.',
              },
              {
                type: 'email',
                message: '이메일이 올바르지 않습니다.',
              },
            ],
          })(
            <Input
              placeholder="이메일을 작성해주세요."
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
            />,
          )}
        </Form.Item>
        <Form.Item label="깃허브 아이디">
          {getFieldDecorator('github_account', {
            rules: [
              {
                required: true,
                message: '깃허브아이디는 필수로 입력해주세요.',
              },
              {
                pattern: /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i,
                message: '깃허브 아이디가 올바르지 않습니다.',
              },
            ],
          })(
            <Input
              placeholder="깃허브 아이디를 작성해주세요."
              prefix={
                <Icon type="github" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              size="large"
            />,
          )}
        </Form.Item>
        <button type="submit" className="apply-btn display-block">
          신청하기
        </button>
      </Form>
    </div>
  );
};

const ApplicationForm = Form.create({ name: 'application' })(Application);

export default ApplicationForm;

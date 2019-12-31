import React, { useState } from 'react';
import { Input, Icon, Form } from 'antd';

const Application = ({ form }) => {
  const [reason, setReason] = useState('');
  const { getFieldDecorator } = form;

  const { TextArea } = Input;

  const onChange = e => {
    setReason(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  return (
    <div className="modal-body application-modal">
      <Form className="application-form" onSubmit={handleSubmit}>
        <div className="mb-20">
          <Form.Item>
            {getFieldDecorator('reason', {
              rules: [
                { required: true, message: '지원동기는 필수로 입력해야 합니다!' },
              ],
            })(
              <TextArea
                placeholder="팀장이 회원님에 대해 알 수 있도록 자기소개와 지원동기를 작성해주세요."
                allowClear
                onChange={onChange}
                value={reason}
                autoSize={{ minRows: 6 }}
              />
            )}
          </Form.Item>
        </div>
        <div className="mb-20">
          <Input
            placeholder="깃허브 아이디를 작성해주세요."
            prefix={<Icon type="github" style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
          />
        </div>
        <div className="mb-20">
          <Input
            placeholder="이메일을 작성해주세요."
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
          />
        </div>
        <button type="submit" className="apply-btn display-block">
          신청하기
        </button>
      </Form>
    </div>
  );
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  Application,
);

export default WrappedNormalLoginForm;

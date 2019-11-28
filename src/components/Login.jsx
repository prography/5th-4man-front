import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, Icon } from 'antd';
import swal from 'sweetalert';
import { LOG_IN_REQUEST } from '../store/reducers/user';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onLoginGithub = () => {
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=a7863c21770a0dd4c503';
  };
  const onLogin = () => {
    dispatch({ type: LOG_IN_REQUEST, payload: { username, password } });
    swal('로그인 되었습니다!', 'success');
  };
  const onChangeUsername = e => {
    setUsername(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="login-contents">
        <p className="login-title">개같하로 개발 같이 하기</p>
        <p className="login-content">
          15초만에 간편하게 가입하고
          <br /> 나에게 맞는 팀을 확인하세요!
        </p>
        <Input
          tpye="text"
          className="email-input"
          value={username}
          name="email"
          onChange={onChangeUsername}
          placeholder="아이디를 입력해주세요."
          size="large"
        />
        <Input.Password
          className="password-input"
          value={password}
          name="password"
          onChange={onChangePassword}
          placeholder="패스워드를 입력해주세요."
          size="large"
        />
        <Button size="large" className="email-button" block onClick={onLogin}>
          <Icon type="mail" className="email-icon" />
          이메일로 시작하기
          <span id="right-space" />
        </Button>
        <div className="button-border">
          <Button
            className="github-button"
            size="large"
            block
            onClick={onLoginGithub}
          >
            <Icon type="github" className="github-icon" />
            깃허브로 시작하기
            <span className="right-space" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;

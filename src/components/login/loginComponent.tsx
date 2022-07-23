import styled from '@emotion/styled';
import _ from 'lodash';
import React, { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const LoginFormWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LoginBox = styled.div`
  width: 400px;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > p {
    font-size: 24px;
    letter-spacing: -1.5px;
    margin-bottom: 20px;
  }
`;

const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  background: #eee;
  border: none;
  padding: 0 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  background: darkgray;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  letter-spacing: -1.5px;
  cursor: pointer;
`;

const LoginComponent = () => {
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useLogin();
  const loginInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoginId(e.target.value);
  };

  const passwordInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const loginOnClick = () => {
    if (_.isEmpty(loginId) && _.isEmpty(password)) {
      alert('아이디 비밀번호를 확인 해주세요.');
    } else {
      login({ loginId, password });
    }
  };

  const loginOnKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      if (_.isEmpty(loginId) && _.isEmpty(password)) {
        alert('아이디 비밀번호를 확인 해주세요.');
      } else {
        login({ loginId, password });
      }
    }
  };
  return (
    <LoginFormWrap>
      <LoginBox>
        <p>로그인</p>
        <LoginInput
          placeholder="아이디"
          type="email"
          onChange={e => loginInputOnChange(e)}
        />
        <LoginInput
          placeholder="비밀번호"
          type="password"
          onChange={e => passwordInputOnChange(e)}
        />
        <LoginButton
          onClick={() => loginOnClick()}
          onKeyPress={e => loginOnKeyPress(e)}
        >
          로그인
        </LoginButton>
      </LoginBox>
    </LoginFormWrap>
  );
};
export default LoginComponent;

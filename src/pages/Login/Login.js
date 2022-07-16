import React, { useState, useEffect } from 'react';
import './style/Login.css';
import './style/Btn8.css';
import LoginCariusel from './components/LoginCariusel';
import LoginMember from './components/LoginMember';
import LoginAdmin from './components/LoginAdmin';
import Register from './components/Register';

const Login = () => {
  // 會員登入 管理員登入 切換CSS動畫
  const [loginCard, setLoginCard] = useState('');
  // 會員註冊 切換動畫 切換CSS動畫
  const [registerNone, setRegisterNone] = useState('d-none');
  const [loginLogoText, setLoginLogoText] = useState('Login');

  return (
    <>
      <div className="w-100 vh-100 d-flex align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div className="px-0 LoginBox">
            <LoginCariusel />
            <div className={`col-12 col-xl-6 h-100 LoginCard ${loginCard}`}>
              <LoginMember
                setLoginCard={setLoginCard}
                setRegisterNone={setRegisterNone}
                loginLogoText={loginLogoText}
                setLoginLogoText={setLoginLogoText}
              />
              <LoginAdmin
                setLoginCard={setLoginCard}
                loginLogoText={loginLogoText}
              />
              <Register
                registerNone={registerNone}
                setRegisterNone={setRegisterNone}
                setLoginCard={setLoginCard}
                loginLogoText={loginLogoText}
                setLoginLogoText={setLoginLogoText}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

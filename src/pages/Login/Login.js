import React, { useState, useEffect } from 'react';
import './style/Login.css';
import './style/Btn8.css';
import LoginCariusel from './components/LoginCariusel';
import LoginMember from './components/LoginMember';
import LoginAdmin from './components/LoginAdmin';
import Register from './components/RegisterTry';

const Login = () => {
  // 會員登入 管理員登入 切換動畫
  const [loginCard, setLoginCard] = useState('');

  return (
    <>
      <div className="w-100 vh-100 d-flex align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div className="px-0 LoginBox">
            <LoginCariusel />
            <div className={`col-12 col-xl-6 h-100 LoginCard ${loginCard}`}>
              <LoginMember setLoginCard={setLoginCard} />
              <LoginAdmin setLoginCard={setLoginCard} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

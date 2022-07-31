import React from 'react';
import '../styles/LoginMember.scss';
import LoginLogo from './LoginLogo';

const LoginMember = () => {
  return (
    <>
      <div className="h-100 w-100">
        <div className="h-20 w-100">
          <LoginLogo />
        </div>
        <form action="" className="h-40 w-100 text-white text-center">
          <h3>Account</h3>
          <input type="text" />
          <p>錯誤訊息</p>
          <h3>Password</h3>
          <input type="text" />
          <p>錯誤訊息</p>
          <button>登入</button>
        </form>
        <div className="h-20 w-100"></div>
        <div className="h-20 w-100"></div>
      </div>
    </>
  );
};

export default LoginMember;

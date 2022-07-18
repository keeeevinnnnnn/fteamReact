import React from 'react';
import LoginLogo from './LoginLogo';

const LoginAdmin = ({ setLoginCard, loginLogoText }) => {
  return (
    <>
      <div className="h-100 w-100 d-flex justify-content-center LoginBack">
        <div className="LoginInputsBox col-12">
          <LoginLogo loginLogoText={loginLogoText} />
          <form action="" className="LoginForm">
            <div className="LoginFormBox">
              <label className="w-100 text-center mt-3 LoginFormAccountPassword">
                Admin Account
              </label>
              <div className="d-flex justify-content-center mt-3">
                <input
                  type="text"
                  placeholder="Admin Account"
                  className="text-center"
                />
              </div>
              <label className="w-100 text-center mt-5 LoginFormAccountPassword">
                Admin Password
              </label>
              <div className="d-flex justify-content-center mt-3 d-flex align-items-center">
                <input
                  type="password"
                  placeholder="Admin Password"
                  className="text-center passwordInput"
                />
                <img
                  src="../../imgs/GaryComponents/eyes_off.png"
                  alt=""
                  className="cursorpointer passwordEyes"
                />
              </div>
            </div>
            <div className="mt-5 d-flex justify-content-center">
              <button className="custom-btn btn-8">
                <span>LOGIN</span>
              </button>
            </div>
            <div className="col-12 d-flex justify-content-center ForgotAdmin">
              <p
                className="cursorpointer mt-5"
                onClick={() => {
                  setLoginCard('');
                }}
              >
                Member
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;

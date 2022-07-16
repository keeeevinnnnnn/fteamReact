import React from 'react';
import LoginLogo from './LoginLogo';

const LoginAdmin = ({ setLoginCard }) => {
  return (
    <>
      <div className="h-100 w-100 d-flex justify-content-center LoginBack">
        <div className="LoginInputsBox col-12">
          <LoginLogo />
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
              <div className="d-flex justify-content-center mt-3">
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
          </form>
          <div className="d-flex pt-4 ForgotAdmin">
            <div className="col-12 d-flex justify-content-center">
              <p
                className="cursorpointer"
                onClick={() => {
                  setLoginCard('');
                }}
              >
                Member
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;

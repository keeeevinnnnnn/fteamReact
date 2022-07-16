import React from 'react';
import LoginLogo from './LoginLogo';

const Register = ({ setLoginCard }) => {
  return (
    <>
      <div className="h-100 w-100 d-flex justify-content-center LoginFront">
        <div className="LoginInputsBox col-12">
          <LoginLogo />
          <form action="" className="LoginForm">
            <div className="LoginFormBox d-flex d-flex justify-content-around flex-wrap">
              <div className="col-9 col-xl-5 d-flex justify-content-between mb-3">
                <label className="text-center LoginFormAccountPassword">
                  Name
                </label>
                <input type="text" className="text-center w-50" />
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-between mb-3">
                <label className="text-center LoginFormAccountPassword">
                  Nickname
                </label>
                <input type="text" className="text-center w-50" />
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-between mb-3">
                <label className="text-center LoginFormAccountPassword">
                  Mobile
                </label>
                <input type="text" className="text-center w-50" />
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-between mb-3">
                <label className="text-center LoginFormAccountPassword">
                  Birthday
                </label>
                <input type="date" className="text-center w-50" />
              </div>
              <div className="col-8 mb-3">
                <label className="text-center LoginFormAccountPassword w-25">
                  Account
                </label>
                <input type="text" className="text-center w-50" />
              </div>
              <div className="col-8 mb-3">
                <label className="text-center LoginFormAccountPassword w-25">
                  Password
                </label>
                <input type="password" className="text-center w-50" />
              </div>
              <div className="col-8 d-flex align-items-center mb-3">
                <label className="w-25 text-center LoginFormAccountPassword">
                  Confirm Password
                </label>
                <input type="password" className="text-center w-50 " />
              </div>
              <div className="col-8 mb-3">
                <label className="text-center LoginFormAccountPassword w-25">
                  Email
                </label>
                <input type="text" className="text-center w-50" />
              </div>
            </div>
            <div className="LoginSignUp">
              <div className="mt-4 d-flex justify-content-center">
                <button className="custom-btn btn-8">
                  <span>CONFIRM</span>
                </button>
              </div>
            </div>
          </form>
          <div className="d-flex  ForgotAdmin pt-4">
            <div className="col-12 d-flex justify-content-center">
              <p
                className="cursorpointer"
                onClick={() => {
                  setLoginCard('LoginCardRotate');
                }}
              >
                Back To Login
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

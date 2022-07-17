import React from 'react';
import LoginLogo from './LoginLogo';

const Register = ({
  setLoginCard,
  registerNone,
  loginLogoText,
  setLoginLogoText,
}) => {
  return (
    <>
      <div
        className={`h-100 w-100 d-flex justify-content-center LoginBack ${registerNone}`}
      >
        <div className="LoginInputsBox col-12">
          <LoginLogo loginLogoText={loginLogoText} />
          <form action="" className="LoginForm">
            <div className="LoginFormBox d-flex justify-content-around flex-wrap">
              <div className="col-12 d-flex justify-content-center align-items-center mb-3">
                <label className="text-center LoginFormAccountPassword rwdNoneBlock">
                  Avatar
                </label>
                <div className="w-25 d-flex justify-content-center">
                  <img
                    src="https://cdn.bella.tw/files-20220604/FT5OGggVIAAHxhF.jpeg"
                    alt=""
                    className="w-50 loginAvatar rwdNoneBlock"
                  />
                </div>
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-around mb-3">
                <label className="text-center LoginFormAccountPassword">
                  Name
                </label>
                <input type="text" className="text-center w-50" />
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-around mb-3">
                <label className="text-center LoginFormAccountPassword rwdNoneBlock">
                  Nickname
                </label>
                <input type="text" className="text-center w-50 rwdNoneBlock" />
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-around mb-3">
                <label className="text-center LoginFormAccountPassword rwdNoneBlock">
                  Mobile
                </label>
                <input type="text" className="text-center w-50 rwdNoneBlock" />
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-around mb-3">
                <label className="text-center LoginFormAccountPassword rwdNoneBlock">
                  Birthday
                </label>
                <input type="date" className="text-center w-50 rwdNoneBlock" />
              </div>
              <div className="col-8 mb-3 d-flex justify-content-around">
                <label className="text-center LoginFormAccountPassword col-6 col-xl-3">
                  Account
                </label>
                <input type="text" className="text-center w-50" />
              </div>
              <div className="col-8 d-flex mb-3 d-flex justify-content-around">
                <label className="text-center LoginFormAccountPassword col-6 col-xl-3">
                  Password
                </label>
                <div className="w-50">
                  <input type="password" className="text-center w-100 mb-3" />
                  <input type="password" className="text-center w-100" />
                </div>
              </div>
              <div className="col-8 mb-3 d-flex justify-content-around">
                <label className="text-center LoginFormAccountPassword col-6 col-xl-3">
                  Email
                </label>
                <input type="text" className="text-center w-50" />
              </div>
              <div className="col-8 mb-3 d-flex justify-content-around">
                <label className="text-center LoginFormAccountPassword col-6 col-xl-3 rwdNoneBlock">
                  Address
                </label>
                <textarea
                  type="text"
                  className="text-center w-50 rwdNoneBlock"
                />
              </div>
              <div className="col-12 d-flex justify-content-center pt-3">
                <button className="custom-btn btn-8">
                  <span>CONFIRM</span>
                </button>
              </div>
            </div>
          </form>
          <div className="d-flex  ForgotAdmin pt-5">
            <div className="col-12 d-flex justify-content-center">
              <p
                className="cursorpointer"
                onClick={() => {
                  setLoginCard('');
                  setLoginLogoText('Login');
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

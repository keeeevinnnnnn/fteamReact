import React, { useState, useEffect } from 'react';
// 文字動畫
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
// 輪播牆
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Login.scss';
import './Btn8.scss';

const Login = ({ sideBar, setSideBar }) => {
  useEffect(() => {
    setSideBar('');
  }, []);
  return (
    <>
      <div className={`w-100 vh-100 d-flex align-items-end ${sideBar}`}>
        <div className="work-area col-12 col-md-10 p-0">
          <div className="px-0 LoginBox">
            <div className="col-xl-6 h-100 LoginCarousel">
              <Carousel
                thumbWidth="0px"
                infiniteLoop="true"
                autoPlay="true"
                interval="3000"
                axis="horizontal"
                stopOnHover=""
                showThumbs=""
                showIndicators=""
                showStatus=""
                showArrows=""
              >
                <div>
                  <img
                    style={{
                      objectFit: 'cover',
                      height: 'calc(100vh - 88px)',
                    }}
                    src="../../imgs/Logoin/Rectangle.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{
                      objectFit: 'cover',
                      height: 'calc(100vh - 88px)',
                    }}
                    src="../../imgs/Logoin/588e6470267c297a2478709e0e788a95.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{
                      objectFit: 'cover',
                      height: 'calc(100vh - 88px)',
                    }}
                    src="../../imgs/Logoin/cf8d25ed01695253f9e3a81ecc2a108b.jpg"
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
            <div className="col-12 col-xl-6 h-100 d-flex justify-content-center LoginInputsBox">
              <div className="h-100">
                <div className="LoginLogoBox pt-3">
                  <Texty
                    className="text-center LoginLogoBoxText"
                    delay={600}
                    interval={200}
                    repeat={-1}
                  >
                    Login
                  </Texty>
                </div>
                <form action="" className="LoginForm">
                  <div className="LoginFormBox">
                    <p className="text-center mt-3 LoginFormAccountPassword">
                      Account
                    </p>
                    <div className="d-flex justify-content-center">
                      <input
                        type="text"
                        placeholder="User Account"
                        className="text-center"
                      />
                    </div>
                    <p className="text-center mt-3 LoginFormAccountPassword">
                      Password
                    </p>
                    <div className="d-flex justify-content-center">
                      <input
                        type="password"
                        placeholder="User Password"
                        className="text-center"
                      />
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-around mt-4 FbLineGoogle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                      className="col-1 cursorpointer"
                    >
                      <path
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="col-1 cursorpointer"
                    >
                      <path
                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="col-1 cursorpointer"
                    >
                      <path
                        d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="LoginSignUp">
                    <div className="mt-4 d-flex justify-content-center">
                      <button className="custom-btn btn-8">
                        <span>LOGIN</span>
                      </button>
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                      <button className="custom-btn btn-8">
                        <span>SIGN UP</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="d-flex  ForgotAdmin pt-4">
                  <div className="col-6 d-flex justify-content-center">
                    <p className="cursorpointer">Forgot?</p>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    <p className="cursorpointer">Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

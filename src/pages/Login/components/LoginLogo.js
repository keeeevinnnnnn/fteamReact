import React from 'react';
// 文字動畫
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import '../styles/LoginLogo.scss'

const LoginLogo = ({ loginLogoText }) => {
  return (
    <>
      <div className="LoginLogoBox">
        <Texty
          className="text-center LoginLogoBoxText"
          interval={50}
          repeat={-1}
        >
          {loginLogoText}
        </Texty>
      </div>
    </>
  );
};

export default LoginLogo;

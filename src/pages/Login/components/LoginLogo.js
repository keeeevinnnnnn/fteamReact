import React from 'react';
// 文字動畫
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

const LoginLogo = ({ loginLogoText }) => {
  return (
    <>
      <div className="LoginLogoBox pt-3">
        <Texty
          className="text-center LoginLogoBoxText"
          delay={600}
          interval={200}
          repeat={-1}
        >
          {loginLogoText}
        </Texty>
      </div>
    </>
  );
};

export default LoginLogo;

import React, { useEffect, useRef } from 'react';
// 文字動畫
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import '../styles/LoginLogo.scss';
import { gsap } from 'gsap';

const LoginLogo = ({ loginLogoText, logoMove }) => {
  console.log(logoMove);
  const loginLogoRef = useRef(null);
  useEffect(() => {
    gsap.from(loginLogoRef.current, {
      opacity: 0,
      y: -150,
      duration: 1.5,
      // ease: 'expo',
      ease: 'bounce',
    });
  }, [logoMove]);
  return (
    <>
      <div className="LoginLogoBox d-flex align-items-center">
        <div className="text-center LoginLogoBoxText" ref={loginLogoRef}>
          {loginLogoText}
        </div>
      </div>
    </>
  );
};

export default LoginLogo;

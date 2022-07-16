import React from 'react';
// 輪播牆
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const LoginCariusel = () => {
  return (
    <>
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
    </>
  );
};

export default LoginCariusel;

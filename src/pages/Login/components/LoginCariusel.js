import React from 'react';
import { Autoplay } from 'swiper';
import { EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

// 圖片陣列 方便map用
const datas = [
  { src: '../../imgs/Logoin/Rectangle.png' },
  { src: '../../imgs/Logoin/cfbcff9f1af9abea43111d2f52f342fc.jpg' },
  { src: '../../imgs/Logoin/cf8d25ed01695253f9e3a81ecc2a108b.jpg' },
];

const LoginCariusel = () => {
  return (
    <>
      <div className="col-xl-6 h-100 LoginCarousel">
        <Swiper
          speed={3000}
          grabCursor={true}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          modules={[EffectCube, Autoplay]}
          effect="cube"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {datas.map((data) => (
            <SwiperSlide key={data.src}>
              <img
                style={{
                  objectFit: 'cover',
                  height: 'calc(100vh - 88px)',
                  width: '100%',
                }}
                src={data.src}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LoginCariusel;

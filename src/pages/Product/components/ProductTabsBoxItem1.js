import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductTabsBoxItem1 = (props) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="col-12">
        <div className="whoSeeName">
          <h5>Customers who viewed this product also viewed</h5>
        </div>
        <div className="whoSeeImgBox">
          <Slider {...settings}>
            <div>
              <img src="/imgs/Products/phpo5Yfwm.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/Products/phpo5Yfwm.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/Products/phpo5Yfwm.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/Products/phpo5Yfwm.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/Products/phpo5Yfwm.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/Products/phpo5Yfwm.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductTabsBoxItem1;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductTabsBoxItem1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
              <img src="/imgs/Products/637894482038170000.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/Products/637894482038170000.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/Products/637894482038170000.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/Products/637894482038170000.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/Products/637894482038170000.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/Products/637894482038170000.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductTabsBoxItem1;

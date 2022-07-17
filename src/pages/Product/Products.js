import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <>
      <div className="od-bg w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0 d-flex">
          <div className="row mainPicRow">
            <div className="col-6 mainPic">
              <div className="mainPicText">
                <h2>PRODUCT</h2>
              </div>

              <div className="mainPicText-h2">
                <h2 data-content="PRODUCT">PRODUCT</h2>
              </div>

              <div className="mainPicMore">
                <h2>MORE</h2>
              </div>

              <img
                src="/imgs/Products/pexels-jeremy-bishop-2397647.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

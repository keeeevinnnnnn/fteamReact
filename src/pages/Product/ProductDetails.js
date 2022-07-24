import React, { useState } from 'react';
import ProductTabsBox from './components/ProductTabsBox';
import './styles/ProductDetails.scss';

const ProductDetails = () => {
  const [heart, setHeart] = useState(false);
  return (
    <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="work-area col-10 pb-5 pe-5 text-danger">
        <div className="row mb-5 p-0 m-0 vh-50">
          <div className="col-7 productDetailsImg">
            <img src="/imgs/Products/phpo5Yfwm.jpg" alt="" />
          </div>
          <div className="col-5 productDetail">
            <div className="productDetailBody mb-3">
              <h5 className="detail-name">Edward's case is well done</h5>
              <p className="detail-brand">SOUR VX</p>
              <p className="detail-price">
                <span>$ 6599</span>
              </p>
            </div>

            <div className="detail-int-cart mb-3">
              <button>
                <span>Add to Bag</span>
              </button>
            </div>
            <div className="detail-int-heart mb-5">
              <button
                onClick={() => {
                  setHeart(!heart);
                }}
              >
                <span>Favorite</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    style={{
                      display: heart === false ? '' : 'none',
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{
                      display: heart === false ? 'none' : '',
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="detail-info">
              <h5 className="mb-3">Product details</h5>
              <p>
                The 2020 Z-Smooth wheel has changed the formula to be more
                elastic when sliding to support the stability of carving, You
                can control stably even when driving on a tiled floor Of course,
                what attracts the editor the most is the avant-garde and
                fashionable street battlefield in the 1970s.
              </p>
            </div>
          </div>
        </div>

        <div className="row p-0 m-0 ProductTabsBox vh-50">
          <ProductTabsBox />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React from 'react';
import './CartsCard.css';
const CartsCard = () => {
  return (
    <>
      <div className="carts-card">
        <div className="w-100 h-100">
          {/* top grid */}
          <div className="w-100 h-75 d-flex">
            {/* product-img */}
            <div className="w-75 h-100 d-flex">
              <div className="w-50 h-100 d-flex justify-content-center align-items-center">
                <div className="cart-img-wrap">
                  <img
                    className=" w-100 h-100"
                    src={
                      'https://internetfusion.imgix.net/1618097.jpeg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=550&h=550'
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="w-50 h-100 d-flex flex-column justify-content-center">
                {/* info data */}
                <p className="m-0">Brand Skate</p>
                <p className="m-0 mb-4">Red</p>
              </div>
            </div>

            {/* product-price */}
            <div className="w-25 h-100 d-flex align-items-end carts-price-section">
              <a href={'#/'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </a>
              <p className="w-100 text-center">$ {'4990'}</p>
            </div>
          </div>
          {/* bottom grid */}
          <div className="w-100 h-25 d-flex justify-content-center align-items-center">
            <div className=" w-50 h-75 d-flex justify-content-around">
              {/* minus */}
              <div className="cart-minus-icon cursorpointer w-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="cart-count-text">
                <span>1</span>
              </div>

              {/* plus */}
              <div className="cart-plus-icon cursorpointer w-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartsCard;

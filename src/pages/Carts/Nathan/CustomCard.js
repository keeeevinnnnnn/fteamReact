import axios from 'axios';
import React from 'react';

const CustomCard = (props) => {
  const { singleItem, singleInd, customCartItems, setCustomCartItems } = props;
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
                    src={`http://localhost:3000/productImages/${singleItem.back_img}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-50 h-100 d-flex flex-column justify-content-center carts-item-text-wrap">
                {/* info data */}
                <p className="m-0">{singleItem.custom_product_name}</p>
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
              <p className="w-100 text-center mb-md-0 carts-price">
                $ {singleItem.item_price}
              </p>
            </div>
          </div>
          {/* bottom grid */}
          <div className="w-100 h-25 d-flex justify-content-center align-items-center">
            <div className="w-50 h-75 d-flex justify-content-center mb-md-3">
              {/* minus */}
              <div
                // onClick={() => {
                //   console.log('minus');
                // }}
                className="cart-minus-icon cursorpointer mx-3 mx-md-5"
              >
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
                <span>{singleItem.quantity}</span>
              </div>

              {/* plus */}
              <div
                onClick={() => {
                  console.log(customCartItems[singleInd]);
                }}
                className="cart-plus-icon cursorpointer mx-3 mx-md-5"
              >
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

export default CustomCard;

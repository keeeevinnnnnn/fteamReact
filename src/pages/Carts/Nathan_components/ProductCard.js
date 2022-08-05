/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React from 'react';
import './ProductCard.scss';
import { confirm } from './ConfirmComponent';
const ProductCard = (props) => {
  const {
    singleItem,
    singleInd,
    productCartItems,
    setProductCartItems,
    productDep,
    setProductDep,
  } = props;
  // 拿到單價 & 新數量(更新價錢用)
  const singlePrice = singleItem.item_price / singleItem.quantity;
  const newMinusQty = singleItem.quantity - 1;
  const newPlusQty = singleItem.quantity + 1;
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
                    src={`http://localhost:3000/productImages/${singleItem.img}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-50 h-100 d-flex flex-column justify-content-start carts-item-text-wrap">
                {/* info data */}
                <p className="m-0 mt-3 product-name-text">{singleItem.name}</p>
              </div>
            </div>

            {/* product-price-section */}
            <div className="w-25 h-100 d-flex align-items-end carts-price-section">
              {/* close icon delete ajax */}
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (confirm('確定要刪除此商品嗎？') === true) {
                    axios
                      .delete(
                        `http://localhost:3000/carts?sid=${singleItem.item_id}&type=${singleItem.item_type}&memID=${singleItem.member_id}`
                      )
                      .then((res) => {
                        console.log(res.data);
                        if (res.data.success) {
                          setProductDep(productDep + 1);
                          alert('刪除成功!');
                        }
                      });
                  }
                }}
              >
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
                onClick={() => {
                  if (singleItem.quantity - 1 !== 0) {
                    axios
                      .put('http://localhost:3000/carts', {
                        sid: singleItem.item_id,
                        type: singleItem.item_type,
                        quantity: singleItem.quantity - 1,
                        price: singlePrice * newMinusQty,
                        memID: singleItem.member_id,
                      })
                      .then((res) => {
                        if (res.data.success) {
                          setProductDep(productDep + 1);
                        }
                      });
                  } else {
                    if (confirm('確定要刪除此商品嗎？') === true) {
                      axios
                        .delete(
                          `http://localhost:3000/carts?sid=${singleItem.item_id}&type=${singleItem.item_type}&memID=${singleItem.member_id}`
                        )
                        .then((res) => {
                          console.log(res.data);
                          if (res.data.success) {
                            setProductDep(productDep + 1);
                            alert('刪除成功!');
                          }
                        });
                    }
                  }
                }}
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
                  axios
                    .put('http://localhost:3000/carts', {
                      sid: singleItem.item_id,
                      type: singleItem.item_type,
                      quantity: singleItem.quantity + 1,
                      price: singlePrice * newPlusQty,
                      memID: singleItem.member_id,
                    })
                    .then((res) => {
                      if (res.data.success) {
                        setProductDep(productDep + 1);
                      }
                    });
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

export default ProductCard;

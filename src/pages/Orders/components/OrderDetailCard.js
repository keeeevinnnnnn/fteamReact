import React from 'react';
import Scroll from 'react-scroll';

const OrderDetailCard = () => {
  return (
    <div className="w-100 h-100">
      <Scroll.Element className="orders-detail-card-scroll">
        <div className="w-100 d-flex mt-md-3 mt-2 detail-single-item-wrap">
          <div className="w-50 h-100 d-flex flex-column justify-content-between">
            {/* 商品名稱 */}
            <div className="w-100 h-33 fw-bold px-3">{'Board'}</div>
            {/* 商品類型 */}
            <div className="w-100 h-33 fw-bold px-3">Type</div>
            <div className="w-100 h-33 fw-bold px-3">Qty : {'3'}</div>
          </div>
          <div className="w-50 h-100 d-flex flex-column justify-content-between">
            <div className="w-100 h-33 px-3"></div>
            {/* item_type */}
            <div className="w-100 h-33 text-end px-3">{'product'}</div>
            <div className="w-100 h-33 text-end px-3">$ {'7990'}</div>
          </div>
        </div>
        <div className="w-100 d-flex mt-md-3 mt-2 detail-single-item-wrap">
          <div className="w-50 h-100 d-flex flex-column justify-content-between">
            {/* 商品名稱 */}
            <div className="w-100 h-33 fw-bold px-3">{'Board'}</div>
            {/* 商品類型 */}
            <div className="w-100 h-33 fw-bold px-3">Type</div>
            <div className="w-100 h-33 fw-bold px-3">Qty : {'3'}</div>
          </div>
          <div className="w-50 h-100 d-flex flex-column justify-content-between">
            <div className="w-100 h-33 px-3"></div>
            {/* item_type */}
            <div className="w-100 h-33 text-end px-3">{'product'}</div>
            <div className="w-100 h-33 text-end px-3">$ {'7990'}</div>
          </div>
        </div>
        <div className="w-100 d-flex mt-md-3 mt-2 detail-single-item-wrap">
          <div className="w-50 h-100 d-flex flex-column justify-content-between">
            {/* 商品名稱 */}
            <div className="w-100 h-33 fw-bold px-3">{'Board'}</div>
            {/* 商品類型 */}
            <div className="w-100 h-33 fw-bold px-3">Type</div>
            <div className="w-100 h-33 fw-bold px-3">Qty : {'3'}</div>
          </div>
          <div className="w-50 h-100 d-flex flex-column justify-content-between">
            <div className="w-100 h-33 px-3"></div>
            {/* item_type */}
            <div className="w-100 h-33 text-end px-3">{'product'}</div>
            <div className="w-100 h-33 text-end px-3">$ {'7990'}</div>
          </div>
        </div>
      </Scroll.Element>
    </div>
  );
};

export default OrderDetailCard;

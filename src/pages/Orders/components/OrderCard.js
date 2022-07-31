import React, { useState } from 'react';
import '../Orders.scss';
import OrderDetailCard from './OrderDetailCard';
const OrderCard = (props) => {
  const { singleOrder } = props;
  const [showDetail, setShowDetail] = useState(false);
  const isShowDetailHandler = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div className="order-card-wrap" onClick={isShowDetailHandler}>
      <div className="order-card-main w-95 d-flex flex-column justify-content-center">
        <div className="w-100 h-45 d-flex">
          <div className="col-6 h-100 d-flex justify-content-start align-items-end py-2">
            {/* created_at */}
            {singleOrder.order_date.slice(0, 10) +
              ' ' +
              singleOrder.order_date.slice(11, 16)}
          </div>
          <div className="col-6 h-100 d-flex justify-content-end align-items-end py-2 fw-bold">
            {/* oreder_number */}
            No.{singleOrder.sid}
          </div>
        </div>
        <div className={`w-100 ${showDetail ? '' : 'hr-div'}`}>
          <div
            style={{
              opacity: showDetail ? '1' : '0',
              height: showDetail ? '300px' : '1px',
              transition: showDetail ? '.3s' : 'none',
            }}
            className="order-card-detail w-100"
          >
            <OrderDetailCard />
          </div>
        </div>
        <div className="w-100 h-45 d-flex">
          <div className="col-6 h-100 d-flex justify-content-start align-items-start py-2">
            Total
          </div>
          <div className="col-6 h-100 d-flex justify-content-end align-items-start py-2 fw-bold">
            {/* total_price */}$ {singleOrder.total}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

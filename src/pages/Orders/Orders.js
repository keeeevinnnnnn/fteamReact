import React from 'react';
import '../Orders/Orders.scss';
import OrderMuiTabs from './components/OrderMuiTabs';
import Scroll from 'react-scroll';
const Orders = () => {
  return (
    <>
      <div className="carts-bg w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0 d-flex">
          <div className="col-12 col-md-10 h-100">
            <div className="w-100 h-10">
              <OrderMuiTabs />
            </div>
            <div className="w-100 h-80">
              <Scroll.Element className="orders-card-scroll"></Scroll.Element>
            </div>
            <div className="w-100 h-10"></div>
          </div>
          <div className="d-none col-md-2  h-100"></div>
        </div>
      </div>
    </>
  );
};

export default Orders;

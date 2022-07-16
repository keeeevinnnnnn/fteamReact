import React from 'react';
import CartsCard from '../../components/Nathan/CartsCard';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Carts.css';
const Carts = () => {
  return (
    <>
      <div className="carts-bg w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0 d-flex">
          <div className="col-12 col-md-10 h-100">
            <div className="tabs-section w-100">
              <div className="carts-tabs-wrap w-100 h-100 p-4">
                <select className="carts-selection w-100 h-100">
                  <option value="">PRODUCTS</option>
                  <option value="">CUSTOMIZED</option>
                  <option value="">LESSON</option>
                </select>
              </div>
            </div>
            <div className="carts-card-section w-100">
              <div className="carts-card-wrap w-100 h-100 p-4 bg-black">
                <ScrollToBottom mode="bottom" className=" w-100 h-100">
                  <CartsCard />
                  <CartsCard />
                  <CartsCard />
                </ScrollToBottom>
              </div>
            </div>
            <div className="total-count-section w-100">
              <div className="total-count-wrap w-100 h-100 p-4">das</div>
            </div>
          </div>
          <div className="d-none col-md-2  h-100"></div>
        </div>
      </div>
    </>
  );
};

export default Carts;

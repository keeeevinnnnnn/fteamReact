import React, { useState, Fragment } from 'react';
import CartsCard from './Nathan/CartsCard';
import Scroll from 'react-scroll';
import './Carts.scss';
import OffcanvasTest from './Nathan/OffcanvasTest';
import MuiTabs from './Nathan/MuiTabs';
const Carts = () => {
  const cartItemArr = ['PRODUCTS', 'CUSTOMIZED', 'LESSONS'];
  const [selectItem, setSelectItem] = useState('PRODUCTS');
  return (
    <>
      <div className="carts-bg w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0 d-flex">
          <div className="col-12 col-md-10 h-100">
            <div className="tabs-section w-100">
              <div className="w-100 h-100 d-none d-md-block">
                <MuiTabs
                  selectItem={selectItem}
                  setSelectItem={setSelectItem}
                />
              </div>
              <div className="carts-tabs-wrap w-100 h-100 p-4 d-md-none">
                <select
                  onChange={(e) => {
                    setSelectItem(e.target.value);
                  }}
                  value={selectItem}
                  className="carts-selection w-100 h-100"
                >
                  {cartItemArr.map((v, i) => {
                    return (
                      <Fragment key={i}>
                        <option value={v}>{v}</option>
                      </Fragment>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="carts-card-section w-100">
              <div className="carts-card-wrap w-100 h-100 px-4 px-md-0">
                <div className="card-scroll-list-wrap">
                  <div
                    style={{
                      left:
                        selectItem === 'PRODUCTS'
                          ? '-0%'
                          : selectItem === 'CUSTOMIZED'
                            ? '-100%'
                            : '-200%',
                    }}
                    className="card-scroll-list"
                  >
                    <Scroll.Element className="products-card-scroll">
                      <CartsCard />
                      <CartsCard />
                      <CartsCard />
                      <CartsCard />
                    </Scroll.Element>
                    <Scroll.Element className="customized-card-scroll">
                      <CartsCard />
                    </Scroll.Element>
                    <Scroll.Element className="lesson-card-scroll">
                      <CartsCard />
                    </Scroll.Element>
                  </div>
                </div>
              </div>
            </div>
            <div className="total-count-section w-100">
              <div className="total-count-wrap h-100">
                <div className="total-top-grid w-100 d-flex">
                  <div className="cart-total-title col-4 h-100 d-flex justify-content-center align-items-center">
                    <span>TOTAL</span>
                  </div>
                  <div className="cart-total-title col-4 h-100 d-flex justify-content-center align-items-center">
                    <span>ITEMS</span>
                  </div>
                  <div className="cart-total-title col-4 h-100 d-flex justify-content-center align-items-center"></div>
                </div>
                <div className="total-bottom-grid w-100 d-flex">
                  <div className="cart-total-text col-4 h-100 d-flex justify-content-center align-items-center">
                    {/* total price */}
                    <span>$ {'4990'}</span>
                  </div>
                  <div className="cart-total-text col-4 h-100 d-flex justify-content-center align-items-center">
                    {/* total counts */}
                    <span>{'4'}</span>
                  </div>
                  <div className="col-4 h-100 d-flex justify-content-start align-items-center btn-check-wrap">
                    <OffcanvasTest />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none col-md-2  h-100"></div>
        </div>
      </div>
    </>
  );
};

export default Carts;

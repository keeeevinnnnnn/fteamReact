import React, { useState, Fragment, useEffect } from 'react';
import ProductCard from './Nathan/ProductCard';
import Scroll from 'react-scroll';
import './Carts.scss';
import OffcanvasTest from './Nathan/OffcanvasTest';
import MuiTabs from './Nathan/MuiTabs';
import axios from 'axios';
import CustomCard from './Nathan/CustomCard';
import LessonCard from './Nathan/LessonCard';
const Carts = () => {
  // render 依賴項
  const [dep, setDep] = useState(0);
  // 3台購物車的data
  const [productCartItems, setProductCartItems] = useState([]);
  const [customCartItems, setCustomCartItems] = useState([]);
  const [lessonCartItems, setLessonCartItems] = useState([]);

  // 3台購物車的數量
  const [productTotalQty, setProductTotalQty] = useState(0);
  const [lessonTotalQty, setLessonTotalQty] = useState(0);
  const [customTotalQty, setCustomTotalQty] = useState(0);

  // 3台購物車的價錢
  const [productTotalPrice, setProductTotalPrice] = useState(0);
  const [lessonTotalPrice, setLessonTotalPrice] = useState(0);
  const [customTotalPrice, setCustomTotalPrice] = useState(0);

  // 獲取購物車內的資料
  useEffect(() => {
    console.log(123);
    // product
    axios.get('http://localhost:3000/carts?type=product').then((response) => {
      // console.log(response.data.result);
      setProductCartItems(response.data.result);
      // get product total price
      setProductTotalPrice(
        response.data.result.length !== 0
          ? response.data.result.reduce((init, obj) => {
            return init + obj.item_price;
          }, 0)
          : 0
      );
      // get product qty
      setProductTotalQty(
        response.data.result.length !== 0
          ? response.data.result.reduce((init, obj) => {
            return init + obj.quantity;
          }, 0)
          : 0
      );
    });
    // lesson
    axios.get('http://localhost:3000/carts?type=lesson').then((response) => {
      // console.log(response.data.result);
      setLessonCartItems(response.data.result);
      // get lesson total price
      setLessonTotalPrice(
        response.data.result.length !== 0
          ? response.data.result.reduce((init, obj) => {
            return init + obj.item_price;
          }, 0)
          : 0
      );
      // get lesson qty
      setLessonTotalQty(
        response.data.result.length !== 0
          ? response.data.result.reduce((init, obj) => {
            return init + obj.quantity;
          }, 0)
          : 0
      );
    });
    // custom
    axios.get('http://localhost:3000/carts?type=custom').then((response) => {
      // console.log(response.data.result);
      setCustomCartItems(response.data.result);
      // get custom total price
      setCustomTotalPrice(
        response.data.result.length !== 0
          ? response.data.result.reduce((init, obj) => {
            return init + obj.item_price;
          }, 0)
          : 0
      );
      // get custom qty
      setCustomTotalQty(
        response.data.result.length !== 0
          ? response.data.result.reduce((init, obj) => {
            return init + obj.quantity;
          }, 0)
          : 0
      );
    });
  }, [dep]);

  // Tabs所有選項
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
                      {productCartItems.map((v, i) => {
                        return (
                          <ProductCard
                            key={v.sid}
                            singleItem={v}
                            singleInd={i}
                            productCartItems={productCartItems}
                            setProductCartItems={setProductCartItems}
                            dep={dep}
                            setDep={setDep}
                          />
                        );
                      })}
                    </Scroll.Element>
                    <Scroll.Element className="customized-card-scroll">
                      {customCartItems.map((v, i) => {
                        return (
                          <CustomCard
                            key={v.sid}
                            singleItem={v}
                            singleInd={i}
                            customCartItems={customCartItems}
                            setCustomCartItems={setCustomCartItems}
                            dep={dep}
                            setDep={setDep}
                          />
                        );
                      })}
                    </Scroll.Element>
                    <Scroll.Element className="lesson-card-scroll">
                      {lessonCartItems.map((v, i) => {
                        return (
                          <LessonCard
                            key={v.sid}
                            singleItem={v}
                            customCartItems={customCartItems}
                            setLessonCartItems={setLessonCartItems}
                            dep={dep}
                            setDep={setDep}
                          />
                        );
                      })}
                    </Scroll.Element>
                  </div>
                </div>
              </div>
            </div>
            <div className="total-count-section w-100">
              <div className="total-count-wrap h-100 m-0">
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
                    <span>
                      ${productTotalPrice + lessonTotalPrice + customTotalPrice}
                    </span>
                  </div>
                  <div className="cart-total-text col-4 h-100 d-flex justify-content-center align-items-center">
                    {/* total counts */}
                    <span>
                      {productTotalQty + lessonTotalQty + customTotalQty}
                    </span>
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

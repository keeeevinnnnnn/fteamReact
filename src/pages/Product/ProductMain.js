import React, { useState, useEffect, useCallback } from 'react';
import FilterBox from './components/FilterBox';
import ToolBox from './components/ToolBox';
import './styles/ProductMain.scss';
import axios from './commons/axios';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const ProductMain = () => {
  // 原始資料
  //  {
  //     sid:0,
  //     img:'',
  //     name:'',
  //     brand:'',
  //     price:0,
  //  }
  const [data, setData] = useState({});
  // post發給後端，先給預設參數，api要加上判斷如果不等於null才執行我要的sql語法
  // API還有兩個參數預設 : 1. orderField = "sid";  2. sort='ASC';
  const [filter, setFilter] = useState({
    categoryId: 0,
    brand: [],
    color: [],
    price: 0,
    orderfield: '',
    sort: '',
    page: 1,
    where: '',
    priceRange: [],
  });
  const [messages, setMessages] = useState([]);

  // 如果不使用 useCallback 不影響功能但會有以下黃字建議 : The 'getPageData' function makes the dependencies of useEffect Hook (at line 43) change on every render. Move it inside the useEffect callback. Alternatively, wrap the definition of 'getPageData' in its own useCallback() Hook.
  const getPageData = useCallback(
    async (event) => {
      if (event) {
        event.preventDefault();
      }

      axios.post('/product', { filter }).then((res) => {
        setData(res.data);
      });
      console.log('filter=', filter);
    },
    [filter]
  );

  useEffect(() => {
    getPageData(null);
  }, [getPageData]);

  console.log('messages==', messages);

  return (
    <div className="bg w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="work-area col-10 text-danger">
        <ToolBox filter={filter} setFilter={setFilter} />
        <FilterBox
          filter={filter}
          setFilter={setFilter}
          messages={messages}
          setMessages={setMessages}
        />

        <div className="d-flex productText p-0 m-0">
          {messages.length >= 1
            ? messages.map((msg) => {
                return (
                  <React.Fragment>
                    <button
                      className="button-38"
                      onClick={() => {
                        setMessages(
                          messages.filter((v) => {
                            return v !== msg;
                          })
                        );

                        if (filter.brand.includes(msg)) {
                          const brandLikeList = filter.brand.filter((v, i) => {
                            return v !== msg;
                          });
                          setFilter({ ...filter, brand: brandLikeList });
                        }

                        if (filter.color.includes(msg)) {
                          const colorLikeList = filter.color.filter((v, i) => {
                            return v !== msg;
                          });
                          setFilter({ ...filter, color: colorLikeList });
                        }

                        if (filter.orderfield.includes('name')) {
                          setFilter({
                            ...filter,
                            orderfield: '',
                            sort: '',
                          });
                        }
                        if (filter.orderfield.includes('price')) {
                          setFilter({
                            ...filter,
                            orderfield: '',
                            sort: '',
                          });
                        }
                      }}
                    >
                      {msg}
                    </button>
                  </React.Fragment>
                );
              })
            : null}

          <button
            className="button-38"
            style={{ display: messages.length === 0 ? 'none' : '' }}
            onClick={() => {
              setFilter({
                ...filter,
                categoryId: 0,
                brand: [],
                color: [],
                price: 0,
                orderfield: '',
                sort: '',
                page: 1,
                where: '',
                priceRange: [],
              });
              setMessages([]);
            }}
          >
            Reset All Filters
          </button>
        </div>

        <div className="row product-list p-0 m-0">
          <TransitionGroup component={null}>
            {data && data.rows
              ? data.rows.map((r) => {
                  return (
                    <CSSTransition
                      classNames="product-item"
                      timeout={300}
                      key={r.id}
                    >
                      <ProductList
                        sid={r.sid}
                        img={r.img}
                        name={r.name}
                        brand={r.brand}
                        price={r.price}
                      />
                    </CSSTransition>
                  );
                })
              : null}
          </TransitionGroup>
        </div>

        <div className="row paginationBox p-0 m-0">
          <div className="col-4">
            {data && data.totalPages ? (
              <Pagination
                page={data.page}
                totalPages={data.totalPages}
                setFilter={setFilter}
                filter={filter}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMain;

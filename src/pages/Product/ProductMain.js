import React, { useState, useEffect } from 'react';
import FilterBox from './components/FilterBox';
import ToolBox from './components/ToolBox';
import './styles/ProductMain.scss';
import axios from './commons/axios';
import ProductList from './components/ProductList';
import { useLocation } from 'react-router-dom';
import Pagination from './components/Pagination';
const ProductMain = () => {
  // 原始資料
  const [data, setData] = useState({});
  const location = useLocation();
  const usp = new URLSearchParams(location.search);
  // post發給後端，先給預設參數，api要加上判斷如果不等於null才執行我要的sql語法
  // API還有兩個參數預設 : 1. orderField = "sid";  2. sort='asc';
  const [filter, setFilter] = useState({
    categoryId: null,
    brand: null,
    color: null,
    price: null,
    orderfield: null,
    sort: null,
    page: 1,
  });

  const getPageData = async (event, gotoPage) => {
    if (event) {
      event.preventDefault();
    }
    setFilter({ ...filter, page: gotoPage });

    axios.post('/product', { filter }).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getPageData(null, +usp.get('page') || 1, filter);
  }, [location]);

  return (
    <div className="bg w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="work-area col-10 text-danger">
        <ToolBox filter={filter} setFilter={setFilter} />
        <FilterBox filter={filter} setFilter={setFilter} />
        <div className="row product-list p-0 m-0">
          {data && data.rows
            ? data.rows.map((r) => {
                return (
                  <ProductList
                    sid={r.sid}
                    img={r.img}
                    name={r.name}
                    brand={r.brand}
                    price={r.price}
                  />
                );
              })
            : null}
        </div>

        <div className="row paginationBox p-0 m-0">
          <div className="col-4">
            {data && data.totalPages ? (
              <Pagination page={data.page} totalPages={data.totalPages} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMain;

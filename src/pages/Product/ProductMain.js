import React, { useState, useEffect, useRef } from 'react';
import FilterBox from './components/FilterBox';
import ToolBox from './components/ToolBox';
import './styles/ProductMain.scss';
import axios from './commons/axios';
import ProductList from './components/ProductList';
import { Link, useLocation } from 'react-router-dom';
import Pagination from './components/Pagination';
const ProductMain = () => {
  // 原始資料
  const [data, setData] = useState({});
  const location = useLocation();
  const usp = new URLSearchParams(location.search);

  const getPageData = async (event, gotoPage) => {
    if (event) {
      event.preventDefault();
    }
    axios.get(`/product?page=${gotoPage}`).then((res) => {
      setData(res.data);
    });
  };

  // 全域變數，去接子層 toolBoxFilter的第三個參數
  const [type, setType] = useState(null);

  const toolBoxFilter = async (event, gotoPage, type) => {
    if (event) {
      event.preventDefault();
    }
    setType(type);
    axios.get(`/product/${type}?page=${gotoPage}`).then((res) => {
      setData(res.data);
    });
  };

  // 第一次更新不執行
  const firstUpdate = useRef(true);
  useEffect(() => {
    getPageData(null, +usp.get('page') || 1);
    // 原始資料
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      toolBoxFilter(null, +usp.get('page') || 1, type);
    }
  }, [location]);

  return (
    <div className="bg w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="work-area col-10 text-danger">
        <ToolBox setData={setData} toolBoxFilter={toolBoxFilter} />
        <FilterBox />
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

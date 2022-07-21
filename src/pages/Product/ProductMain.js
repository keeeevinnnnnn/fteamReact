import React, { useState, useEffect } from 'react';
import FilterBox from './components/FilterBox';
import ToolBox from './components/ToolBox';
import './styles/ProductMain.scss';
import axios from './commons/axios';
import ProductList from './components/ProductList';
import { Link, useLocation } from 'react-router-dom';
import Pagination from './components/Pagination';
const ProductMain = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const usp = new URLSearchParams(location.search);
  const getPageData = async (event, gotoPage) => {
    if (event) {
      event.preventDefault();
    }
    console.log({ gotoPage });

    axios.get(`/product?page=${gotoPage}`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getPageData(null, +usp.get('page') || 1);
  }, [location]);
  return (
    <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="work-area col-10 pb-5 pe-5 text-danger">
        <ToolBox />
        <FilterBox />
        <div className="row product-list">
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

        <div className="row paginationBox">
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

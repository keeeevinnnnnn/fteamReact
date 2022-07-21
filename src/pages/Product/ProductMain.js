import React, { useState, useEffect } from 'react';
import FilterBox from './components/FilterBox';
import ToolBox from './components/ToolBox';
import './styles/ProductMain.scss';
import axios from './commons/axios';
import ProductList from './components/ProductList';
const ProductMain = () => {
  const [data, setData] = useState({});
  const getData = async () => {
    axios.get('/product').then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
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
        </div>
      </div>
    </>
  );
};

export default ProductMain;

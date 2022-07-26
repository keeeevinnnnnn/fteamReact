import React, { useState, useEffect, useCallback, useRef } from 'react';
import FilterBox from './components/FilterBox';
import ToolBox from './components/ToolBox';
import './styles/ProductMain.scss';
import axios from './commons/axios';
import ProductList from './components/ProductList';
import { useSearchParams } from 'react-router-dom';
import Pagination from './components/Pagination';
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
  // loaction 到 url page=? 頁面
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  // post發給後端，先給預設參數，api要加上判斷如果不等於null才執行我要的sql語法
  // API還有兩個參數預設 : 1. orderField = "sid";  2. sort='asc';
  const [filter, setFilter] = useState({
    categoryId: 0,
    brand: '',
    color: '',
    price: 0,
    orderfield: '',
    sort: '',
    // page: 1,
  });

  console.log('page=', page);

  const getPageData = useCallback(
    async (event, gotoPage) => {
      if (event) {
        event.preventDefault();
      }
      // setFilter({ ...filter, page: gotoPage }); <--- 會造成無窮迴圈
      //
      axios
        .post('/product', { filter: { ...filter, page: gotoPage } })
        .then((res) => {
          setData(res.data);
        });
      console.log('filter=', filter);
    },
    [filter]
  );

  useEffect(() => {
    getPageData(null, page);
  }, [getPageData, page]);

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

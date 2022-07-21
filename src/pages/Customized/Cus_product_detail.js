import React from 'react';
import { Link } from 'react-router-dom';

function Cus_product_detail() {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          這是細節頁
          <Link to={'/customized/explore'}>
            <button className="viv-btn">Explore</button>
          </Link>
          <button className="viv-btn">錢錢錢給我錢</button>
        </div>
      </div>
    </>
  );
}

export default Cus_product_detail;

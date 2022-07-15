import React, { useEffect } from 'react';
import './Carts.css';
const Carts = ({ sideBar, setSideBar }) => {
  useEffect(() => {
    setSideBar('justify-content-end');
  }, []);
  return (
    <>
      <div
        className={`carts-bg w-100 vh-100 d-flex align-items-end ${sideBar}`}
      >
        <div className="work-area col-12 col-md-10 p-0 d-flex">
          <div className="col-12 col-md-10 h-100">
            <div className="tabs-section w-100"></div>
            <div className="carts-card-section w-100"></div>
            <div className="total-count-section w-100"></div>
          </div>
          <div className="d-none col-md-2  h-100"></div>
        </div>
      </div>
    </>
  );
};

export default Carts;

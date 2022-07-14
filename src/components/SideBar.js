import React from 'react';
import { Link } from 'react-router-dom';
const SideBar = ({ sideBar, setSideBar }) => {
  const navArr = ['MEMBER', 'LESSON', 'PRODUCTS', 'CUSTOMIZED', 'ORDERS'];
  return (
    <>
      <div className="col-2  sidebar_container">
        <div className="sidebar-wrap d-flex flex-column">
          <Link to={'/'}>HOME</Link>
          {navArr.map((v, i) => {
            return (
              <Link
                onClick={() => {
                  setSideBar(i === 0 ? true : false);
                }}
                key={i}
                to={`/${v}`}
              >
                {v}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;

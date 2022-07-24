import React from 'react';
import { Link } from 'react-router-dom';
const SideBar = () => {
  const navArr = ['LESSON', 'PRODUCTS', 'CUSTOMIZED', 'ORDERS'];
  return (
    <>
      <div className="col-2 d-md-block d-none sidebar_container">
        <div className="sidebar-wrap d-flex flex-column">
          <Link to={'/'}>HOME</Link>
          <Link to={'/member'}>MEMBER</Link>
          {navArr.map((v, i) => {
            return (
              <Link key={i} to={`/${v}`}>
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

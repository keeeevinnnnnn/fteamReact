import React from 'react';
import { Link } from 'react-router-dom';
import Share_card from './cus_component/Share_card';

function Customized_explore() {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div className="d-flex col-12 col-mb-4 flex-wrap w-100 d-flex justify-content-center">
          <Share_card/>
          <Share_card/>
          <Share_card/>
          <Share_card/>
          <Share_card/>
          <Share_card/>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Customized_explore;

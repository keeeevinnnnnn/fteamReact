import React from 'react';
import { Link } from 'react-router-dom';
import Share_card from './cus_component/Share_card';

function Customized_collect() {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div className="d-flex flex-column mh-100 w-100">
            <div class="create col-4 border-bottom border-gray w-100 d-flex justify-content-center aline-item-center p-5">
              <Link to={'/customized/create'}>
              <button className='viv-btn'>create</button>
              
              </Link>
            </div>
            <div class="prev-creation col-8 w-100 mh-100">
              
              <div class="prev-train d-flex flex-column flex-md-row p-0  ">
                {/* <Share_card />
                <Share_card />
                <Share_card /> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customized_collect;

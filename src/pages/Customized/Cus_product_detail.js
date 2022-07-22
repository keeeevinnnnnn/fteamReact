import React from 'react';
import { Link } from 'react-router-dom';
import DataTabs from './cus_component/Cus_tab_data';

import { red } from '@mui/material/colors';
import Cus_message from './cus_component/Cus_message';

function Cus_product_detail() {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div class="row px-5">
            <div className="left col-12 col-sm-6 ">
              <p>Project Name</p>
              <h2>My Cool Board</h2>
              <div className="cusdetail-pic col-12 col-sm-6">
                <img
                  src="/imgs/Customized/main_board.png"
                  className="img-fluid"
                />
              </div>
              <div className=" cus_data_tab">
                <DataTabs />
              </div>
              
            </div>
            <div className="right col-12 col-sm-6 d-flex flex-column ">
           
             
              <div className="message mb-5">
              <h2 className='mb-3'>Message Board</h2>
              <Cus_message/>
              <Cus_message/>
              <Cus_message/>
              <Cus_message/>
              <Cus_message/>
              
              </div>
             
              {/* <form>
              <h2>Leave a Message</h2>
              <select className='form-control mb-3'>
                <option> 喜歡！</option>
                <option> 很可以</option>
                <option> 不錯欸</option>
                <option> 我覺得....</option>
                <option> 不好說</option>
              </select>
                <textarea className='form-control'></textarea>
              </form> */}
              <div class="detail_btn">
                <Link to={'/customized/explore'}>
                  <button className="viv-btn">Explore</button>
                </Link>
                <button className="viv-btn">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cus_product_detail;

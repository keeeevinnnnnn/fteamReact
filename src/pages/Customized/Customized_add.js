import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Cus_product_card from './Cus_product_card_sample';
import Cus_product_card_wheel from './Cus_product_card_wheel';
import Cus_product_card_fcolor from './Cus_product_card_fcolor';
import Cus_product_card_name from './Cus_product_card_name';

// `sid`,
// `member_id`
// `custom_product_name`
// `wheel_color`
// `front_color`
// `back_style`
// `back_pattern`
// `back_sticker`
// `back_filter`
// `back_img`
// `price`
// `created_date`

function Customized_add() {
  return (
    <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="cus_matte w-100 h-100 ovweflow-hidden">
        <img src="/imgs/Customized/cus_bg_05.jpg" className="cus-bg" />
      </div>

      <div className="work-area col-12 col-md-10 p-0 overflow-hidden">
        <div class="cus_container">
          <div className="w-100 vh-mb-100 h-100">
            <div className="cus-product-container">
              <div className="main_img_container">
                <img
                  src="/imgs/Customized/cus_name_board.png"
                  className="cus_board_main"
                />
              </div>
            </div>
          </div>

          <div class="cus_card_container">
            <div class="step-control">
              <Link to={'/customized/create'}>
                <button className="skbtn-prev"></button>
              </Link>

              <Link to={'/customized/create/wheel'}>
                <button className="skbtn-next"></button>
              </Link>
            </div>

            <div className="cus_card">
              <div className="cus_product_card">
                <h3 className="text-black">Project Name</h3>

                <input
                  type="text"
                  placeholder="Give your board a name"
                  className="viv-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customized_add;

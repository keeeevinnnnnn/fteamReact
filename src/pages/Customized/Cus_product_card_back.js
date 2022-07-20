import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdImagesearchRoller,
  MdPhoto,
  MdPhotoFilter,
  MdAutoAwesomeMotion,
} from 'react-icons/md';





import BasicTabs from './cus_component/Cus_tab';

function Cus_product_card_back(props) {
  const [inputvalue, setInputvalue] = useState('');

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="cus_matte w-100 h-100 ovweflow-hidden">
        <img src="/imgs/Customized/cus_bg_05.jpg" className="cus-bg" alt="" />
      </div>

      <div className="work-area col-12 col-md-10 p-0 overflow-hidden">
        <div class="cus_container">
          <div className="cus-product-container">
            <div className="cus_clip">
              <img src="/imgs/Customized/texture.png" alt="" />
            </div>
          </div>

          <div class="cus_card_container text-ali">
            <div class="step-control">
              <Link to={'/customized/create/carrier'}>
                <button className="skbtn-prev"></button>
              </Link>

              <Link to={'/customized/create/bk_style'}>
                <button className="skbtn-next"></button>
              </Link>
            </div>

            <div className="cus_card flex-column">
              {/* <div class="select_toggle border border-dark">
                <MdImagesearchRoller className="style-icon" />
                <MdPhoto className="style-icon" />
                <MdPhotoFilter className="style-icon" />
                <MdAutoAwesomeMotion className="style-icon" />
              </div> */}

              <div className="cus_product_card">
               <BasicTabs/>
        

                {/* <BasicTabs/> */}
                {/* <h3 className="text-black">Choose a Style</h3> */}
                {/* 喔椰未來要map喔喔喔 */}
                {/* <div class="cus-select-box d-flex justify-content-between">
                  <div className="cus_select">
                    <input
                      type="radio"
                      value="第一個圖案"
                      className="cus-radio"
                     
                    />
                    <img src="/imgs/Customized/pattern/pattern05.jpg" alt="" />
                  </div>

                  <div className="cus_select">
                    <input
                      type="radio"
                      value="第一個圖案"
                      className="cus-radio"
                     
                    />
                    <img src="/imgs/Customized/pattern/pattern05.jpg" alt="" />
                  </div>

                  <div className="cus_select">
                    <input
                      type="radio"
                      value="第一個圖案"
                      className="cus-radio"
                     
                    />
                    <img src="/imgs/Customized/pattern/pattern05.jpg" alt="" />
                  </div>

                  <div className="cus_select">
                    <input
                      type="radio"
                      value="第一個圖案"
                      className="cus-radio"
                     
                    />
                    <img src="/imgs/Customized/pattern/pattern05.jpg" alt="" />
                  </div>

                 

                

                
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cus_product_card_back;

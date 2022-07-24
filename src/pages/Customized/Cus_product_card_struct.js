import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cus_product_card_struct.scss';

function Cus_product_card_struct() {
  const [material, setMaterial] = useState('');

  const selectMaterial = (e) => {
    const newMaterial = e.target.value;
    //  setMaterial(newMaterial)
    console.log(newMaterial);
  };
  return (
    <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="cus_matte w-100 h-100 ovweflow-hidden">
        <img src="/imgs/Customized/cus_bg_05.jpg" className="cus-bg" alt="" />
      </div>

      <div className="work-area col-12 col-md-10 p-0 overflow-hidden">
        <div className="cus_container">
          <div className="cus-product-container">
            <div className="carrier-img">
              <div class="carrier-display">
                <div className="carrier-container">
                  <div className="carriers">
                    <img src="/imgs/Customized/carrier_black.png" />
                    <img src="/imgs/Customized/carrier_iron.png" />
                    <img src="/imgs/Customized/carrier_copper.png" />
                  </div>
                </div>
                <img
                  src="/imgs/Customized/carrer_bg.png"
                  className="carriers-bg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="cus_card_container ">
            <div className="step-control">
              <Link to={'/customized/create/wheel'}>
                <button className="skbtn-prev"></button>
              </Link>

              <Link to={'/customized/create/fcolor'}>
                <button className="skbtn-next"></button>
              </Link>
            </div>

            <div className="cus_card flex-column">
              <div className="cus_product_card">
                <h3 className="text-black">Choose Your Carrier</h3>
                <div className="carrier-select-control">
                  <label className="carrier-select">
                    <input
                      type="radio"
                      value="black"
                      hidden={true}
                      onChange={selectMaterial}
                    />
                    <img src="/imgs/Customized/carrier_m_black.png" />
                  </label>
                  <label className="carrier-select">
                    <input
                      type="radio"
                      value="iron"
                      hidden={true}
                      onChange={selectMaterial}
                    />
                    <img src="/imgs/Customized/carrier_m_iron.png" />
                  </label>
                  <label className="carrier-select">
                    <input
                      type="radio"
                      value="copper"
                      hidden={true}
                      onChange={selectMaterial}
                    />
                    <img src="/imgs/Customized/carrier_m_copper.png" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cus_product_card_struct;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cus_product_card_wheel.scss';

const whselect = [
  {
    id: 1,
    wheel: 'NeonGreen',
    img: 'display_NeonGreen.png',
  },
  {
    id: 2,
    wheel: 'PinkWave',
    img: 'display_PinkWave.png',
  },
  {
    id: 3,
    wheel: 'PurpleStart',
    img: 'display_w03.png',
  },
  {
    id: 4,
    wheel: 'BlackBlue',
    img: 'display_PurpleStart.png',
  },
];

function Cus_product_card_wheel() {
  const [wheel, setWheel] = useState('NeonGreen');

  const selectWheel = (e) => {
    const newWheel = e.target.value;
    setWheel(newWheel);
    console.log(newWheel);
  };
  return (
    <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="cus_matte w-100 h-100 ovweflow-hidden  ">
        <img src="/imgs/Customized/cus_bg_05.jpg" className="cus-bg" />
      </div>

      <div className="work-area col-12 col-md-10 p-0 overflow-hidden">
        <div className="cus_container">
          <div className="cus-product-container">
            <div className="wheel-img">
              <img
                src={`/imgs/Customized/display_${wheel}.png`}
                className="wheel-bg wheel"
                alt=""
              />

              <img
                src="/imgs/Customized/Wheel.png"
                className="wheel-bg"
                alt=""
              />
            </div>
          </div>

          <div className="cus_card_container ">
            <div className="step-control">
              <Link to={'/customized/create'}>
                <button className="skbtn-prev"></button>
              </Link>

              <Link to={'/customized/create/carrier'}>
                <button className="skbtn-next"></button>
              </Link>
            </div>

            <div className="cus_card flex-column">
              <div className="cus_product_card">
                <h3 className="text-black">Choose Your Wheel</h3>
                <div className="wheel-selectors">
                  <div className="wheel-select">
                    <input
                      type="radio"
                      value="NeonGreen"
                      onChange={selectWheel}
                    />
                    <img src="/imgs/Customized/select_w01.png" />
                  </div>
                  <div className="wheel-select">
                    <input
                      type="radio"
                      value="PinkWave"
                      onChange={selectWheel}
                    />
                    <img src="/imgs/Customized/select_w02.png" />
                  </div>
                  <div className="wheel-select">
                    <input
                      type="radio"
                      value="PurpleStart"
                      onChange={selectWheel}
                    />
                    <img src="/imgs/Customized/select_w03.png" />
                  </div>
                  <div className="wheel-select">
                    <input
                      type="radio"
                      value="BlackBlue"
                      onChange={selectWheel}
                    />
                    <img src="/imgs/Customized/select_w04.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cus_product_card_wheel;

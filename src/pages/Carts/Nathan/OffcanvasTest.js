import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import './Offcanvas.scss';
import TWZipCode from './TWZipCode';
export default function OffcanvasTest() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [displace, setDisplace] = useState(0);
  const [countryName, setCountryName] = useState('');
  const [townshipName, setTownshipName] = useState('');
  const [delivery, setDelivery] = useState('');
  const nextStep = () => {
    if (displace !== 200) {
      setDisplace(displace + 100);
    } else {
      setDisplace(200);
    }
  };
  const prevStep = () => {
    if (displace !== 0) {
      setDisplace(displace - 100);
    } else {
      setDisplace(0);
    }
  };
  return (
    <div className="App">
      <Offcanvas placement={'end'} show={show} onHide={handleClose}>
        <div className="carts-all-step-wrap">
          <div className="w-100 d-flex justify-content-end close-btn-wrap">
            <Offcanvas.Header closeButton></Offcanvas.Header>
          </div>
          {/* previous step */}
          <div onClick={prevStep} className="back-step">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 w-100 h-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ccc"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </div>
          <div className="check-body-list-wrap w-100">
            <div style={{ left: `-${displace}%` }} className="check-body-list">
              <div className="distribution-page">
                <div className="w-100 distribution-form-wrap">
                  <div className="w-75 h-90 d-flex flex-column justify-content-between">
                    <div className="w-100 h-10 step-page-title-wrap d-flex justify-content-center align-items-center">
                      <span className="d-block">Distribution</span>
                    </div>
                    <div className="w-100 h-10">
                      {/* 配送方式選取 */}
                      <select
                        onChange={(e) => {
                          setDelivery(e.target.value);
                        }}
                        className="focus-none bg-transparent border-0 text-gray fs-6"
                      >
                        <option value="toHome">宅配到府</option>
                        <option value="pickSelf">超商取貨</option>
                      </select>
                    </div>
                    <div className="w-100 h-75">
                      {/* 宅配表單 */}
                      <div
                        style={{
                          display: delivery === 'pickSelf' ? 'none' : '',
                        }}
                      >
                        <input
                          className=" border-bottom w-100 focus-none text-gray bg-transparent mb-4"
                          type="text"
                          placeholder="Name :"
                        />
                        <input
                          className=" border-bottom w-100 focus-none text-gray bg-transparent mb-4"
                          type="text"
                          placeholder="Mobile :"
                        />
                        <input
                          className=" border-bottom w-100 focus-none text-gray bg-transparent mb-4"
                          type="text"
                          placeholder="Email :"
                        />
                        <TWZipCode
                          countryName={countryName}
                          setCountryName={setCountryName}
                          townshipName={townshipName}
                          setTownshipName={setTownshipName}
                        />
                        <input
                          className=" border-bottom w-100 focus-none text-gray bg-transparent mb-4"
                          type="text"
                          placeholder="Address :"
                        />
                        <div className="w-100 radio-wrap d-flex">
                          <div className="w-100 d-flex justify-content-around">
                            <input
                              className="pay-radio"
                              type="radio"
                              id="r1"
                              name="rr"
                            />
                            <label for="r1">
                              <span></span>貨到付款
                            </label>
                            <input
                              className="pay-radio"
                              type="radio"
                              id="r2"
                              name="rr"
                            />
                            <label for="r2">
                              <span></span>線上刷卡
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={nextStep} className="w-100">
                  <span>Next Step</span>
                </button>
              </div>
              <div className="credit-detail-page">
                <div className="w-100 credit-form-wrap">
                  <div className="w-80 h-90"></div>
                </div>
                <button onClick={nextStep} className="w-100">
                  <span>Next Step</span>
                </button>
              </div>
              <div className="check-compele-page">
                <div className="w-100 check-compele-wrap">
                  <div className="w-80 h-90"></div>
                </div>
                <button onClick={nextStep} className="w-100">
                  Continue to Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas>
      <button className="btn checkout-btn" onClick={handleShow}>
        CHECKOUT
      </button>
    </div>
  );
}

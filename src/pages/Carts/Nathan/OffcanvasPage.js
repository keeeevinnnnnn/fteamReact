import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import './Offcanvas.scss';
import TWZipCode from './TWZipCode';
import axios from 'axios';
import CreditForm from './CreditForm';
import CheckoutFinish from './CheckoutFinish';
import { useNavigate } from 'react-router-dom';
export default function OffcanvasPage(props) {
  const { loginMemberID, setProductDep, setCustomDep, setLessonDep } = props;
  const navigate = useNavigate();
  // offcanvas setting
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 點擊位移單位
  const [displace, setDisplace] = useState(0);

  // 新訂單編號
  const [newOrderNumber, setNewOrderNumber] = useState(0);

  // 宅配form setting
  const [toHomeForm, setToHomeForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    countryName: '',
    townshipName: '',
    fullAddress: '',
  });
  const [creditForm, setCreditForm] = useState({
    num1to4: '',
    num5to8: '',
    num9to12: '',
    num13to16: '',
    validMonth: '',
    validYear: '',
    CVV: '',
  });
  const [pickSelfForm, setPickSelfForm] = useState({});
  const [delivery, setDelivery] = useState('toHome');
  const [paySelected, setPaySelected] = useState('cash');
  // 宅配欄位handler
  const toHomeFormHandler = (e) => {
    setToHomeForm({ ...toHomeForm, [e.target.name]: e.target.value });
  };
  // 填完基本資料下一步
  const nextStep = (e) => {
    // 判斷 必填欄位 有無輸入值 配送方式為宅配
    if (
      delivery === 'toHome' &&
      toHomeForm.fullName !== '' &&
      toHomeForm.mobile !== '' &&
      toHomeForm.countryName !== '' &&
      toHomeForm.townshipName !== ''
    ) {
      // 付款方式如果是貨到付款直接進行結帳
      if (paySelected === 'cash') {
        // 貨到付款 直接發axios
        axios
          .post('http://localhost:3000/orders', {
            memID: loginMemberID,
            recipient: toHomeForm.fullName,
            address:
              toHomeForm.countryName +
              toHomeForm.townshipName +
              toHomeForm.fullAddress,
            shipping: delivery,
          })
          .then((res) => {
            if (res.data.success) {
              alert('恭喜您，訂購成功!');
              setNewOrderNumber(res.data.orderNumber);
              setToHomeForm({
                fullName: '',
                mobile: '',
                email: '',
                countryName: '',
                townshipName: '',
                fullAddress: '',
              });
              setDisplace(displace + 200);
              setProductDep((prev) => prev + 1);
              setCustomDep((prev) => prev + 1);
              setLessonDep((prev) => prev + 1);
            }
          });
        setDisplace(displace + 200);
      } else {
        // 選線上刷卡 導向信用卡資訊填寫頁面
        setDisplace(displace + 100);
      }
    } else {
      alert('請填寫完整資訊');
    }
  };
  // 填完信用卡下一步
  const creditNextStep = (e) => { };
  // 上一步
  const prevStep = () => {
    // 不是最後一頁 && 付款方式是信用卡
    if (displace !== 0 && paySelected === 'credit') {
      setDisplace(displace - 100);
    } else {
      setDisplace(0);
    }
  };

  const payHandleChange = (e) => {
    setPaySelected(e.target.value);
  };
  return (
    <div className="App">
      <Offcanvas
        backdrop={'static'}
        placement={'end'}
        show={show}
        onHide={handleClose}
      >
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
              {/* 配送方式頁面 */}
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
                        <option value="" disabled>
                          配送方式
                        </option>
                        <option value="toHome">宅配到府</option>
                        <option disabled value="pickSelf">
                          超商取貨
                        </option>
                      </select>
                    </div>
                    <div className="w-100 h-75">
                      {/* 宅配表單 */}
                      <div
                        className=" w-100 h-100 flex-column justify-content-around"
                        style={{
                          display: delivery === 'pickSelf' ? 'none' : 'flex',
                        }}
                      >
                        <input
                          className="border-bottom w-100 text-gray bg-transparent checkout-input"
                          name="fullName"
                          value={toHomeForm.fullName}
                          type="text"
                          placeholder="* Name :"
                          onChange={toHomeFormHandler}
                          autocomplete="off"
                        />
                        <input
                          className="border-bottom w-100 focus-none text-gray bg-transparent checkout-input"
                          name="mobile"
                          pattern="09\d{2}(\d{6}|-\d{3}-\d{3})"
                          value={toHomeForm.mobile}
                          type="text"
                          placeholder="* Mobile :"
                          onChange={toHomeFormHandler}
                          autocomplete="off"
                        />
                        <input
                          className=" border-bottom w-100 focus-none text-gray bg-transparent checkout-input"
                          name="email"
                          value={toHomeForm.email}
                          type="text"
                          placeholder="Email :"
                          onChange={toHomeFormHandler}
                          autocomplete="off"
                        />
                        <TWZipCode
                          toHomeForm={toHomeForm}
                          setToHomeForm={setToHomeForm}
                        />
                        <input
                          className=" border-bottom w-100 focus-none text-gray bg-transparent checkout-input"
                          name="fullAddress"
                          value={toHomeForm.fullAddress}
                          type="text"
                          placeholder="* Address :"
                          onChange={toHomeFormHandler}
                          autocomplete="off"
                        />

                        {/* 付款方式選擇 */}
                        <div className="w-100 radio-wrap d-flex">
                          <div className="w-100 d-flex justify-content-around">
                            <input
                              className="pay-radio"
                              type="radio"
                              id="r1"
                              name="rr"
                              value={'cash'}
                              checked={paySelected === 'cash'}
                              onChange={payHandleChange}
                            />
                            <label htmlFor="r1">
                              <span></span>貨到付款
                            </label>
                            <input
                              className="pay-radio"
                              type="radio"
                              id="r2"
                              name="rr"
                              value={'credit'}
                              checked={paySelected === 'credit'}
                              onChange={payHandleChange}
                            />
                            <label htmlFor="r2">
                              <span></span>線上刷卡
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* 超取表單 */}
                      <div
                        className="w-100 h-100"
                        style={{
                          display: delivery === 'toHome' ? 'none' : 'flex',
                        }}
                      >
                        <div className=" w-100 h-100 bg-black"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={nextStep} className="w-100">
                  <span>Next Step</span>
                </button>
              </div>
              {/* 信用卡表單頁面 */}
              <div className="credit-detail-page">
                <div className="w-100 credit-form-wrap">
                  <div className="w-80 h-90">
                    <CreditForm
                      creditForm={creditForm}
                      setCreditForm={setCreditForm}
                    />
                  </div>
                </div>
                <button onClick={creditNextStep} className="w-100">
                  <span>Next Step</span>
                </button>
              </div>
              {/* 結帳完成頁面 */}
              <div className="check-compele-page">
                <div className="w-100 check-compele-wrap">
                  <div className="w-80 h-90">
                    <CheckoutFinish newOrderNumber={newOrderNumber} />
                  </div>
                </div>
                <button
                  onClick={() => {
                    navigate('/products');
                  }}
                  className="w-100"
                >
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

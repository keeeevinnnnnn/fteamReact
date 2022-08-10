import React, { useState, useMemo, useEffect, useContext } from 'react';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';
import RecordCard from './RecordCard';
import RecordEcharts from './RecordEcharts';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/Record.scss';
import AuthContext from '../../../../components/AuthContext';
import axios from 'axios';

const Record = () => {
  const { auth, token } = useContext(AuthContext);
  const [productsLength, setProductsLength] = useState([]);
  const [customizedLength, setCustomizedLength] = useState([]);
  useEffect(() => {
    if (!auth) {
      return;
    } else {
      axios
        .get('http://localhost:3000/member/recordproducts', {
          // 發JWT一定要加這個headers
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProductsLength(res.data);
        });
      axios
        .get('http://localhost:3000/member/recordcustomized', {
          // 發JWT一定要加這個headers
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCustomizedLength(res.data);
        });
    }
  }, []);
  // 下拉選單
  const [select, setSelect] = useState('All');
  const option = ['All', 'Products', 'Customized'];

  // 判斷要不要顯示空盒子用的
  const recordWrap = useMemo(() => {
    if (!productsLength.length && !customizedLength.length) {
      return false;
    }
    return true;
  }, [productsLength, customizedLength]);

  // 篩選CSS
  let products = '';
  let customized = '';

  if (select === 'Products') {
    products = '';
  } else {
    products = 'd-none';
  }
  if (select === 'Customized') {
    customized = '';
  } else {
    customized = 'd-none';
  }
  if (select === 'All') {
    products = '';
    customized = '';
  }

  return (
    <>
      <div className="w-100 h-100">
        {!recordWrap ? (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 720 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M513.5 131C520.956 131 527 124.956 527 117.5C527 110.044 520.956 104 513.5 104C506.044 104 500 110.044 500 117.5C500 124.956 506.044 131 513.5 131ZM145 265C145 326.312 181.064 379.201 233.136 403.61C255.86 484.607 330.244 544 418.5 544C524.815 544 611 457.815 611 351.5C611 245.185 524.815 159 418.5 159C415.171 159 411.861 159.085 408.573 159.252C380.718 130.134 341.477 112 298 112C213.5 112 145 180.5 145 265ZM151 354.5C151 361.956 144.956 368 137.5 368C130.044 368 124 361.956 124 354.5C124 347.044 130.044 341 137.5 341C144.956 341 151 347.044 151 354.5ZM128.5 236C132.09 236 135 233.09 135 229.5C135 225.91 132.09 223 128.5 223C124.91 223 122 225.91 122 229.5C122 233.09 124.91 236 128.5 236Z"
              fill="url(#paint0_radial_132_4)"
            />
            <path
              d="M145 538L295 491.234V341L145 387.766V538Z"
              fill="#5FC7C0"
            />
            <path
              d="M445 538L295 491.234V341L445 387.766V538Z"
              fill="#5BEAE1"
            />
            <path
              d="M145 388L295 434.766V605L145 558.234V388Z"
              fill="#D9D9D9"
            />
            <path
              d="M145 388L295 434.766L258 485.5L108 438.734L145 388Z"
              fill="#EAEAEA"
            />
            <path
              d="M446 388L295 434.766V605L446 558.234V388Z"
              fill="#F1F1F1"
            />
            <path
              d="M445 388L295 434.766L332 485.5L482 438.734L445 388Z"
              fill="#FBFBFB"
            />
            <path
              d="M174.5 152L182.468 173.532L204 181.5L182.468 189.468L174.5 211L166.532 189.468L145 181.5L166.532 173.532L174.5 152Z"
              fill="#5BEAE1"
            />
            <path
              d="M497.5 311L505.468 332.532L527 340.5L505.468 348.468L497.5 370L489.532 348.468L468 340.5L489.532 332.532L497.5 311Z"
              fill="#5BEAE1"
            />
            <path
              d="M504.5 556L512.468 577.532L534 585.5L512.468 593.468L504.5 615L496.532 593.468L475 585.5L496.532 577.532L504.5 556Z"
              fill="#3F464C"
            />
            <path
              d="M366.5 45L374.468 66.5323L396 74.5L374.468 82.4677L366.5 104L358.532 82.4677L337 74.5L358.532 66.5323L366.5 45Z"
              fill="#3F464C"
            />
            <path
              d="M508 262L510.701 269.299L518 272L510.701 274.701L508 282L505.299 274.701L498 272L505.299 269.299L508 262Z"
              fill="#5BEAE1"
            />
            <path
              d="M295 205L298.781 215.219L309 219L298.781 222.781L295 233L291.219 222.781L281 219L291.219 215.219L295 205Z"
              fill="#5BEAE1"
            />
            <path
              d="M218 292L221.511 301.489L231 305L221.511 308.511L218 318L214.489 308.511L205 305L214.489 301.489L218 292Z"
              fill="#5BEAE1"
            />
            <path
              d="M312.325 422C289.527 406.477 246.189 367.42 255.219 335.373C266.508 295.314 372.75 305.329 414.584 287.302C456.417 269.276 454.073 208.687 414.584 208.687C378 208.687 299.781 184.91 286.5 145.5C280.014 126.252 279.345 94.186 275.804 81"
              stroke="#5BEAE1"
              stroke-width="7"
              stroke-dasharray="14 14"
            />
            <defs>
              <radialGradient
                id="paint0_radial_132_4"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(310.5 544) rotate(-74.1508) scale(367.989 408.97)"
              >
                <stop stop-color="#5BEAE1" />
                <stop offset="1" stop-color="#3F454B" />
              </radialGradient>
            </defs>
          </svg>
        ) : (
          <div className="w-100 h-100 d-flex flex-warp">
            <div className="col-12 col-xl-6 h-100">
              <div className="d-flex justify-content-around px-3 h-5">
                <button
                  className="scrollTopBtn mt-2 d-xl-none"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  Top
                </button>
                <section className="recordFilter pt-2">
                  <select
                    value={select}
                    onChange={(e) => {
                      setSelect(e.target.value);
                    }}
                  >
                    {option.map((v, i) => {
                      return (
                        <option
                          key={uuidv4()}
                          value={v}
                          className="recordFilterOption"
                        >
                          {v}
                        </option>
                      );
                    })}
                  </select>
                </section>
              </div>
              <div className="h-95">
                <ScrollBox>
                  <RecordCard products={products} customized={customized} />
                </ScrollBox>
              </div>
            </div>

            <div className="col-xl-6 h-100 recordEchartsBox">
              <RecordEcharts />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Record;

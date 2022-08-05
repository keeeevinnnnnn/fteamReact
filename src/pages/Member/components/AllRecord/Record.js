import React, { useState, useMemo, useEffect, useContext } from 'react';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';
import RecordCard from './RecordCard';
import RecordEcharts from './RecordEcharts';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/Record.scss';
import EmptyBox from './EmptyBox';
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
          <EmptyBox />
        ) : (
          <div className="w-100 h-100 d-flex flex-warp">
            <div className="col-12 col-xl-6 h-100">
              <div className="d-flex justify-content-around px-3 h-5">
                <button
                  className="Filterbtn mt-2 d-xl-none"
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

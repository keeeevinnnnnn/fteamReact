import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../../components/AuthContext';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/RecordCard.scss';

const RecordCard = ({ products, customized }) => {
  const { auth, token } = useContext(AuthContext);
  const [recordProducts, setRecordProducts] = useState([]);
  const [recordCustomized, setRecordCustomized] = useState([]);

  // 商品
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
          setRecordProducts(res.data);
        });
      axios
        .get('http://localhost:3000/member/recordcustomized', {
          // 發JWT一定要加這個headers
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setRecordCustomized(res.data);
        });
    }
  }, []);
  console.log(recordProducts);
  return (
    <>
      {/* 商品 */}
      {Object.values(recordProducts).map((v, i) => {
        return (
          <div className={`w-95 m-3 recordCard ${products}`} key={uuidv4()}>
            <div className="d-flex h-100 w-100">
              <div className="col-xl-3">
                <img
                  src={`/imgs/Products/${v.img}`}
                  alt=""
                  className="h-100"
                  style={{
                    objectFit: 'cover',
                    aspectRatio: '1/1',
                  }}
                />
              </div>
              <div className="col-xl-9">
                <p className="h-50 p-3 recordName">{v.name}</p>
                <div className="h-50 d-flex justify-content-between p-3">
                  <h5 className="text-gray">{v.order_date}</h5>
                  <div
                    className="recordProductsColor"
                    style={{
                      background: `${v.color}`,
                      // 如果顏色是黑色的話boxShadow顏色改用白色(因為背景是黑色)
                      boxShadow: `0px 0px 20px 5px ${
                        v.color !== 'black' ? v.color : 'white'
                      }`,
                    }}
                  ></div>
                  <h5 className="text-gray">$ {v.price}</h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* 客製化商品 */}
      {Object.values(recordCustomized).map((v, i) => {
        return (
          <div className={`w-95 m-3 recordCard ${customized}`} key={uuidv4()}>
            <div className="d-flex h-100 w-100">
              <div className="col-xl-3">
                <img
                  src={`http://localhost:3000/custom/${v.img}`}
                  alt=""
                  className="h-100"
                  style={{
                    objectFit: 'cover',
                    aspectRatio: '1/1',
                  }}
                />
              </div>
              <div className="col-xl-9">
                <p className="h-50 p-3">{v.custom_product_name}</p>
                <div className="h-50 d-flex justify-content-between p-3">
                  <h5 className="text-gray">{v.order_date}</h5>
                  <h5 className="text-gray">$ {v.price}</h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecordCard;

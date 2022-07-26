import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../../components/AuthContext';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/RecordCard.scss';

const RecordCard = () => {
  const { auth, token, logout, auths } = useContext(AuthContext);
  const [recordProducts, setRecordProducts] = useState([]);

  useEffect(() => {
    if (!auth) {
      return;
    } else {
      axios
        .get('http://localhost:3000/member/record', {
          // 發JWT一定要加這個headers
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setRecordProducts(res.data);
        });
    }
  }, []);
  // console.log(Object.keys(recordProducts));
  return (
    <>
      {Object.values(recordProducts).map((v, i) => {
        return (
          <div className="w-95 m-3 recordCard" key={uuidv4()}>
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
                <p className="h-50 p-3">{v.name}</p>
                <div className="h-50 d-flex justify-content-around">
                  <h6>{v.order_date}</h6>
                  <h5>$ {v.price}</h5>
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

import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Share_card from './cus_component/Share_card';
import axios from 'axios';
import AuthContext from '../../components/AuthContext';
import Prev_card from './cus_component/Prev_card';
import './Customized_collect.scss';

function Customized_collect(props) {
  const [prevdata, setPrevData] = useState([]);
  const [cusShareData, setCusShareData] = useState([]);
  const { auth, token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get('http://localhost:3000/member/memberself', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        axios
          .get(
            `http://localhost:3000/custom/prevcusproduct?member_id=${res.data.sid}`
          )
          .then((res) => {
            console.log(res.data);
            setPrevData(res.data);
          });
      });
  }, []);

  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div className="d-flex flex-column mh-100 w-100">
            <div class="create col-3 border-bottom border-gray w-100 d-flex justify-content-center aline-item-center p-5">
              <Link to={'/customized/create'}>
                <button className="viv-btn">create</button>
              </Link>
            </div>
            <div class="prev-creation col-12 col-sm-9 w-100 mh-100">
              <div class="d-sm-flex">
                <div class="col-12 col-sm-3 justify-content-center aline-item-center p-5 text-center text-sm-end ">
                  <h4>Own By You</h4>
                </div>

                <div class="col-12 col-sm-9">
                  <div class="prev-train ">
                    {prevdata.map((v, i) => {
                      return (
                        <Prev_card
                          key={v.sid}
                          prevdata={v}
                          singleShareData={v}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customized_collect;

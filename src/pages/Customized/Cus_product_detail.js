import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DataTabs from './cus_component/Cus_tab_data';

import { red } from '@mui/material/colors';
import Cus_message from './cus_component/Cus_message';
import axios from 'axios';
import { Route, useParams } from 'react-router-dom';
import './Cus_product_detail.scss';
import { height } from '@mui/system';
import AuthContext from '../../components/AuthContext';
import Avatar from '@mui/material/Avatar';

function Cus_product_detail(props) {
  // {shareCardId}=props
  let params = useParams();
  const { singleShareData } = props;
  //把那個妙米字轉成變數
  let cid = params['*'];
  console.log(params['*']);
  const [shareDetailData, setShareDetailData] = useState([]);
  // console.log('shareDetailData',shareDetailData);

  const { auth, token } = useContext(AuthContext);
  const [stars, setStars] = useState('');
  const [comment, setComment] = useState('');
  const [mes_cusproduct_id, setMes_cusproduct_id] = useState('');

  const [messageboard, setMessageboard] = useState([]);

  useEffect(() => {
    // console.log(shareCardId);
    axios
      .get(`http://localhost:3000/custom/sharedetail?sid=${cid}`)
      .then((res) => {
        // console.log(res.data)
        setShareDetailData(res.data[0]);
        setMes_cusproduct_id(cid);
      });
  }, []);

  const addComment = () => {
    axios
      .get('http://localhost:3000/member/memberself', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        axios.post('http://localhost:3000/custom/comment', {
          mes_cusproduct_id: mes_cusproduct_id,
          mes_member_id: res.data.sid,
          stars: stars,
          comment: comment,
        });
      });
  };
  useEffect(() => {
    console.log(mes_cusproduct_id);

    axios
      .get(`http://localhost:3000/custom/messageboard?mes_cusproduct_id=${cid}`)
      .then((res) => {
        console.log(res.data);
        setMessageboard(res.data);
      });
  }, []);

  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div className="d-flex px-5">
            <div className="left col-12 col-sm-6 ">
              <p>Created By {shareDetailData.mem_name} </p>
              <h2>{shareDetailData.custom_product_name}</h2>
              <div className="cusdetail-pic col-12 col-sm-6">
                <img
                  src={`http://localhost:3000/custom/${shareDetailData.back_img}`}
                  className="img-fluid"
                />
              </div>
              <div className=" cus_data_tab">
                <DataTabs shareDetailData={shareDetailData} />
              </div>
            </div>
            <div className="right col-12 col-sm-6 d-flex flex-column ">
              <div className="message mb-2">
                <h2 className="mb-3">Message Board</h2>
                <div className="message-area">
                 
                  {messageboard.map((v, i) => {
                    return (
                      <div class="d-flex m-2 border-bottom border-gray">
                        <div class="col-2">
                          <Avatar sx={{ bgcolor: 'black'[900] }}>
                            <img  src={`http://localhost:3000/avatar/${v.mem_avatar}`}
                  className="img-fluid"/>
                          
                          </Avatar>
                        </div>
                        <div className="col-10">
                          <h6>{v.mem_name}<span className='text-warning'>{v.stars}</span></h6>
                          <p>{v.comment}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <select
                  className="mb-1"
                  onChange={(e) => {
                    setStars(e.target.value);
                  }}
                >
                  <option value="✶✶✶✶✶" name="rate">
                    EXICILLENT
                  </option>
                  <option value="✶✶✶✶" name="rate">
                    LOVE IT
                  </option>
                  <option value="✶✶✶" name="rate">
                    COOL
                  </option>
                  <option value="✶✶" name="rate">
                    NOT BAD
                  </option>
                  <option value="✶" name="rate">
                    IM NOT SURE
                  </option>
                </select>

                <div className="mes-input">
                  <input
                    type="textarea"
                    name="comment"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    onClick={addComment}
                  >
                    send
                  </button>
                </div>
              </div>

              <div className="detail_btn">
                <Link to={'/customized/explore'}>
                  <button className="viv-btn">Explore</button>
                </Link>
                <button className="viv-btn">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cus_product_detail;

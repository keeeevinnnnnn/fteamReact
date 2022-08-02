import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from '../../Product/commons/axios';


function Prev_card(props) {
  const {prevdata}=props
  // console.log(singleShareData)
  const navigate = useNavigate()

  return (
    <>
      <div className="share-card-con p-3 ">
          <div className="share-card">
            <div className="board">
            <img src={`http://localhost:3000/custom/${prevdata.back_img}`} />
            </div>
            <div className="share-right ">
              <h3 > {prevdata.custom_product_name}</h3>
              <div className="share-creator">
                <div className="share-ava">
                  <img src={`http://localhost:3000/avatar/${prevdata.mem_avatar}`} />
                </div>
                <div className="share-name">
                  <h6>{prevdata.mem_name}</h6>
                </div>
              </div>
              <Link to={`/customized/create/detail/${prevdata.sid}`} >
              <button className='viv-btn'>View</button>
              </Link>
            
            </div>
          </div>
      </div>
    </>
  );
}

export default Prev_card;

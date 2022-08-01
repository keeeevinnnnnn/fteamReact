import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import DataTabs from './cus_component/Cus_tab_data';

import { red } from '@mui/material/colors';
import Cus_message from './cus_component/Cus_message';
import axios from 'axios';
import { Route,useParams} from 'react-router-dom';

function Cus_product_detail(props) {
  // {shareCardId}=props
  let params = useParams()
  const {singleShareData} =props
  //把那個妙米字轉成變數
  let cid =params['*']
  console.log(params['*'])
  const[shareDetailData,setShareDetailData]=useState([])
    // console.log('shareDetailData',shareDetailData);


  useEffect(()=>{
    // console.log(shareCardId);
     axios.get(`http://localhost:3000/custom/sharedetail?sid=${cid}`).then((res)=>{
    // console.log(res.data)
    setShareDetailData(res.data[0])
     })
  
   },[])
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div class="d-flex px-5">
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
           
             
              <div className="message mb-5">
              <h2 className='mb-3'>Message Board</h2>
              <Cus_message/>
              <Cus_message/>
              <Cus_message/>
              <Cus_message/>
              <Cus_message/>
              
              </div>
             
              
              <div class="detail_btn">
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

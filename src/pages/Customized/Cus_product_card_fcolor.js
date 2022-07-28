import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Cus_product_card_fcolor.scss';
import axios from 'axios';

function Cus_product_card_fcolor(props) {

  const {lastInsertID,setLastInsertID} = props
  const [frontcolor,setFrontcolor]=useState('#E9573F')

  const addfcolor = ()=>{
    console.log(frontcolor)
     axios.post('http://localhost:3000/custom/frontcolor',{
          sid:lastInsertID,
          front_color:frontcolor,
     })



  }
 

  



  return (
    <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="cus_matte w-100 h-100 ovweflow-hidden">
        <img src="/imgs/Customized/cus_bg_05.jpg" className="cus-bg" alt="" />
      </div>

      <div className="work-area col-12 col-md-10 p-0 overflow-hidden">
        <div className="cus_container">
          <div className="cus-product-container">
            <div className="frot-container">
              <div className="front-matte" style={{backgroundColor:frontcolor}}></div>
              <img src="/imgs/Customized/front_color_bg.png" />
            </div>
          </div>

          <div className="cus_card_container ">
            <div className="step-control">
              <Link to={'/customized/create/carrier'}>
                <button className="skbtn-prev"></button>
              </Link>

              <Link to={'/customized/create/back'} onClick={addfcolor}>
                <button className="skbtn-next"></button>
              </Link>
            </div>

            <div className="cus_card flex-column">
              <div className="cus_product_card">
              <p>{frontcolor}</p>
             
                <h3 className="text-black">Choose the Color of Front Deck</h3>
                <input type="color" className='front-deck-input' onChange={(e)=>{
                 const newColor=e.target.value;
                 setFrontcolor(newColor)
                }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cus_product_card_fcolor;

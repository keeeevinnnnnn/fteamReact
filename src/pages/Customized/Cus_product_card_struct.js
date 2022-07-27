import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cus_product_card_struct.scss';
import axios from 'axios';

function Cus_product_card_struct(props) {
  const materialData = [
    { id: 1, materialName: 'black', position: '0' },
    { id: 2, materialName: 'iron', position: '-320px' },
    { id: 3, materialName: 'copper', position: '-640px' },
  ];

  const [material, setMaterial] = useState('2');
  const [materialId,setMaterialId]=useState(1);

  const selectMaterial = (e) => {
   
    console.log(e.target.checked);
    if(e.target.checked){
      setMaterial(e.target.value)

    }
    

  };
  const {lastInsertID,setLastInsertID} = props

  const addwheel = ()=>{
    axios.post('http://localhost:3000/custom/carrier',{
          sid:lastInsertID,
          carrier:material,

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
            <div className="carrier-img">
              <div className="carrier-display">
                <div className="carrier-container">
                  <div className="carriers" style={{ left:material==='black'?'0px':material==='iron'?'-320px':'-640px'}}>
                    <img src="/imgs/Customized/carrier_black.png" />
                    <img src="/imgs/Customized/carrier_iron.png" />
                    <img src="/imgs/Customized/carrier_copper.png" />
                  </div>
                </div>
                <img
                  src="/imgs/Customized/carrer_bg.png"
                  className="carriers-bg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="cus_card_container ">
            <div className="step-control">
              <Link to={'/customized/create/wheel'}>
                <button className="skbtn-prev"></button>
              </Link>

              <Link to={'/customized/create/front_deck'} onClick={addwheel}>
                <button className="skbtn-next"></button>
              </Link>
            </div>

            <div className="cus_card flex-column">
              <div className="cus_product_card">
                <h3 className="text-black">Choose Your Carrier</h3>
                
                 {material}
                <div className="carrier-select-control">
                  <label className="carrier-select">
                    <input
                      type="radio"
                      value='black'
                      hidden={true}
                      name='material'
                      onChange={selectMaterial}
                    />
                    <img src="/imgs/Customized/carrier_m_black.png" />
                  </label>
                  <label className="carrier-select">
                    <input
                      type="radio"
                      value='iron'
                      hidden={true}
                      name='material'
                      onChange={selectMaterial}
                    />
                    <img src="/imgs/Customized/carrier_m_iron.png" />
                  </label>
                  <label className="carrier-select">
                    <input
                      type="radio"
                      value='copper'
                      hidden={true}
                      name='material'
                      onChange={selectMaterial}
                    />
                    <img src="/imgs/Customized/carrier_m_copper.png" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cus_product_card_struct;

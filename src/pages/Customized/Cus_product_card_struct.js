import React from 'react'
import {Link} from 'react-router-dom';

function Cus_product_card_struct() {
  return (
    <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
    <div className="cus_matte w-100 h-100 ovweflow-hidden">
       <img src='/imgs/Customized/cus_bg_05.jpg' className='cus-bg' />
   </div>
    
   <div className="work-area col-12 col-md-10 p-0 overflow-hidden">
       <div class="cus_container">
           <div className='w-100 vh-mb-100 h-100'>
           <div className='main_img_container'>
                    <img src='/imgs/Customized/struck.png' className='cus_board_main'/>
                </div>
           </div>

          
          <div class="cus_card_container">

          <div class="step-control">
                <Link to={'/cus_product_card_wheel'}>
                   <button className='skbtn-prev'></button>
                </Link>
            
            <button className='skbtn-next' ></button>
            
            
          </div>
         
            <div className='cus_card'>
                 <div className='cus_product_card'>
                      <h3 className='text-black'>Choose Your Carrier</h3>
            
                     <input type="radio" name="struc" value="blackmetal"/>
                     霧黑
                     <input type="radio" name="struc" value="blackmetal"/>
                     電鍍銀
                     <input type="radio" name="struc" value="blackmetal"/>
                     電鍍銅
                    
                
            
                  </div>
            </div> 
             
            

              
          </div>
       </div>
   </div>
 </div>
  )
}

export default Cus_product_card_struct
import React from 'react'

function Customized_add() {
  return (
    <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
    <div className="cus_matte w-100 h-100 ovweflow-hidden">
       <img src='/imgs/Customized/cus_bg_05.jpg' className='cus-bg' />
   </div>
    
   <div className="work-area col-12 col-md-10 p-0 overflow-hidden">
       <div class="cus_container">
           <div className='w-100 vh-mb-100 h-100'>
                 <div className='cus-product-container'>
                     <div className='cus-product-matte'>
                         <img src='/imgs/Customized/pattern/pattern05.jpg' className='cus-bg w-100 h-100' />
                     </div>
                 </div>
           </div>

          
          <div class="cus_card_container">

          <div class="step-control">
            <button className='skbtn-prev'></button>
            <button className='skbtn-next'></button>
          </div>
            <div className='cus_card'>
               <div className='cus_product_card'>
                 <h3 className='text-black'>Project Name</h3>
            
                 <input type="text" placeholder='Give your board a name' className='viv-input'/>
                 <input type="text" placeholder='Give your board a name' className='viv-input'/>
                
            
               </div>
                     </div>
          </div>
       </div>
   </div>
 </div>
  )
}

export default Customized_add
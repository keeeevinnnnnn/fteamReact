import React from 'react';
import './Customized.css';

const Customized = () => {
  return (
    <>
     <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
         <div className="cus_matte w-100 h-100 ovweflow-hidden">
            <img src='/imgs/Customized/cus_bg_04.png' className='cus-bg' />
        </div>
         
        <div className="work-area col-12 col-md-10 p-0 overflow-hidden">
            <div class="cus_container h-100  ">
                <div className='w-100 h-mb-100 h-auto '>
                    <img src='/imgs/Customized/main_board.png' className='cus_board_main'/>
                </div>
               <div className='cus_card'>
                  <div className='cus_main_card'>
                    <h2 className='text-info'>Make YOur Own Board</h2>
                    <p className='text-white'>
                      lasklaksjlsjfoij
                    </p>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Customized;

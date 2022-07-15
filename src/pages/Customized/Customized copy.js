import React from 'react';
import './Customized.css';

const Customized = () => {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="cus_matte w-100 h-100 ovweflow-hidden">
            <img src='/imgs/Customized/cus_bg_04.png' className='cus-bg' />
        </div>

        <div className=" work-area col-12 col-md-10 p-0 h-100">
         
          <div class="d-flex">
            <div class="cus_main bg-light ">
              <img src='/imgs/Customized/main_board.png' className='cus_main_board'/>
            
            </div>
            <div className='cut-title bg-dark text-info'>
               <h3>Customized Your Own Board</h3>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Customized;

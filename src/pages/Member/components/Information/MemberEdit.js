import React from 'react';
import '../../styles/MemberEdit.scss';

const MemberEdit = ({ setmoveTrain }) => {
  return (
    <>
      <div className="h-100 memberEdit">
        {/* 個人資料修改 */}
        <form action="" className="text-center">
          <h5>Account</h5>
          <input type="text" />
          <p>錯誤訊息</p>
          <h5>USER NAME</h5>
          <input type="text" />
          <h5>Birthday</h5>
          <input type="date" />
          <p>錯誤訊息</p>
          <h5>NICKNAME</h5>
          <input type="text" />
          <p>錯誤訊息</p>
          <h5>Mobile</h5>
          <input type="namber" />
          <p>錯誤訊息</p>
          <h5>EMAIL</h5>
          <input type="email" />
          <p>錯誤訊息</p>
          <h5>Address</h5>
          <textarea type="text" />
          <div className="d-flex justify-content-around">
            <button
              onClick={(e) => {
                // 阻擋按鈕預設行為
                e.preventDefault();
                // 移動到顯示個人資料
                setmoveTrain('translateY(-0%)');
              }}
            >
              Back
            </button>
            <button>Confirm</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MemberEdit;

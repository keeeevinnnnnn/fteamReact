import React from 'react';
import '../../styles/MemberEdit.scss';

const MemberEdit = () => {
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
            <button>Edit</button>
            <button>Password</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MemberEdit;

import React, { useState } from 'react';
import '../../styles/MemberEdit.scss';

const MemberEdit = ({
  setmoveTrain,
  setAvatarFromNone,
  setInformationWrap,
  member,
}) => {
  // 記錄表單每個欄位輸入值
  const [fields, setFields] = useState({
    account: member.mem_account,
    name: member.mem_name,
    nickname: member.mem_nickname,
    birthday: member.mem_birthday,
    mobile: member.mem_mobile,
    email: member.mem_email,
    address: member.mem_address,
  });
  return (
    <>
      <div className="h-100 d-flex justify-content-center align-items-center">
        {/* 個人資料修改 */}
        <form action="" className="w-80 text-center memberEdit pt-3">
          <h5>Account</h5>
          <input type="text" value={fields.account} />
          <p>錯誤訊息</p>
          <h5>User Name</h5>
          <input type="text" value={fields.name} />
          <p>錯誤訊息</p>
          <h5>Nickname</h5>
          <input type="text" value={fields.nickname} />
          <h5>Birthday</h5>
          <input type="date" value={fields.birthday} />
          <p>錯誤訊息</p>
          <h5>Mobile</h5>
          <input type="namber" value={fields.mobile} />
          <p>錯誤訊息</p>
          <h5>Email</h5>
          <input type="email" value={fields.email} />
          <p>錯誤訊息</p>
          <h5>Address</h5>
          <textarea type="text" value={fields.address} />
          <div className="d-flex justify-content-around">
            <button
              onClick={(e) => {
                // 阻擋按鈕預設行為
                e.preventDefault();
                // 把隱藏的大頭貼區塊恢復顯示
                setAvatarFromNone('');
                // 個人資料區塊從90%設回75%
                setInformationWrap('h-75');
                // 移動到顯示個人資料
                setmoveTrain('translateY(-0%)');
              }}
            >
              Back
            </button>
            <button>Delete</button>
            <button>Confirm</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MemberEdit;

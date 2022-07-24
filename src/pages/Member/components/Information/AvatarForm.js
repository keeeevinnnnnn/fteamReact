import React, { useRef, useState } from 'react';
import axios from 'axios';
import '../../styles/AvatarForm.scss';

const AvatarForm = ({ member }) => {
  // 取得頭貼input
  const registerAvatarRef = useRef(null);

  // 記錄表單每個欄位輸入值
  const [field, setFields] = useState(member.mem_avatar);

  // 點擊頭貼 觸發頭貼input
  function clickAvatar() {
    registerAvatarRef.current.click();
  }

  // 頭貼input值有變換時
  async function uploadAvatar(e) {
    const data = new FormData();
    data.append('avatar', e.target.files[0]);
    const response = await axios.post(
      'http://localhost:3000/member/upload',
      data
    );
    setFields(response.data.filename);
  }

  // 表單點擊送出後
  async function handleSubmit(e) {
    // 先阻擋預設送出行為
    e.preventDefault();

    const response = await axios.post(
      'http://localhost:3000/member/register',
      // fields
    );

    if (response.data.success === true) {
      alert('註冊成功');
    } else {
      alert('註冊失敗');
    }
  }
  return (
    <>
      <form
        className="h-100 memberAvatarForm" // 表單點擊
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          name="avatar"
          ref={registerAvatarRef}
          onChange={uploadAvatar}
          hidden
        />
        {/* 頭貼上傳表單 */}
        <figure className="d-flex justify-content-center h-70">
          <img
            src={`http://localhost:3000/avatar/${field}`}
            alt=""
            className="h-100"
            onClick={clickAvatar}
          />
        </figure>
        <div className="d-flex justify-content-center">
          <button className="btn">Confirm</button>
        </div>
      </form>
    </>
  );
};

export default AvatarForm;

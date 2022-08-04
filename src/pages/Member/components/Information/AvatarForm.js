import React, { useRef, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from '../../../../components/AuthContext';
import '../../styles/AvatarForm.scss';
import { v4 as uuidv4 } from 'uuid';

const AvatarForm = ({ member }) => {
  // 大頭貼更換成功動畫效果
  const [avatarAnimation, setAvatarAnimation] = useState('');

  // token 發fetch用 setAuths更改狀態重新撈取會員資料
  const { token, auths, setAuths } = useContext(AuthContext);

  // 取得頭貼input
  const registerAvatarRef = useRef(null);

  // 點擊頭貼 觸發頭貼input
  function clickAvatar() {
    registerAvatarRef.current.click();
  }

  // 記錄頭貼檔案名稱
  const [field, setField] = useState('');
  useEffect(() => {
    setField(member.mem_avatar);
  }, [member]);

  // 頭貼input值有變換時
  async function uploadAvatar(e) {
    const data = new FormData();
    data.append('avatar', e.target.files[0]);
    const response = await axios.post(
      'http://localhost:3000/member/upload',
      data
    );
    setField(response.data.filename);
  }

  // 表單點擊送出後
  async function handleSubmit(e) {
    // 先阻擋預設送出行為
    e.preventDefault();
    const response = await axios.put(
      'http://localhost:3000/member/avatar',
      { avatar: field },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success === true) {
      setAuths({ ...auths, change: uuidv4() });
      // 大頭貼執行動畫
      setAvatarAnimation('avatar 0.5s linear');
      // 再把動畫CSS清空
      setTimeout(() => {
        setAvatarAnimation('');
      }, 1000);
    } else {
      alert('頭貼修改失敗');
    }
  }
  return (
    <>
      <form
        className="h-100 memberAvatarForm"
        // 表單點擊
        onSubmit={handleSubmit}
      >
        {member === [] ? (
          ''
        ) : (
          <>
            <input
              type="file"
              name="avatar"
              ref={registerAvatarRef}
              onChange={uploadAvatar}
              hidden
            />
            <figure className="d-flex justify-content-center h-70">
              <img
                src={`http://localhost:3000/avatar/${field}`}
                alt=""
                onClick={clickAvatar}
                // 大頭貼更換成功動畫效果
                style={{ animation: `${avatarAnimation}` }}
              />
            </figure>
            <div className="d-flex justify-content-center">
              <button className="btn">Confirm</button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default AvatarForm;

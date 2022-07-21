import React from 'react';
import '../../styles/Personal.scss';

const Personal = ({ setmoveTrain, setAvatarFromNone, setInformationWrap }) => {
  return (
    <>
      <div className="h-100 d-flex justify-content-center text-center pt-3">
        <div className="w-80 h-80 pt-5 personal">
          {/* 簡易個人資料 */}
          <h5>USER NAME</h5>
          <p>あらがき ゆい</p>
          <h5>NICKNAME</h5>
          <p>あらがき ゆい</p>
          <h5>EMAIL</h5>
          <p>garylin0969@gmail.com</p>
          <h5>JOIN TIME</h5>
          <p>2022-06-05 03:54:23</p>
          <h5>Mobile</h5>
          <p>0920913633</p>
          <div className="d-flex justify-content-around">
            <button
              onClick={(e) => {
                // 阻擋按鈕預設行為
                e.preventDefault();
                setAvatarFromNone('d-none');
                setInformationWrap('h-90');
                // 移動到編輯個人資料
                setmoveTrain('translateY(-100%)');
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                // 阻擋按鈕預設行為
                e.preventDefault();
                // 移動到修改密碼
                setmoveTrain('translateY(-200%)');
              }}
            >
              Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;

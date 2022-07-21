import React from 'react';

const Personal = ({ setmoveTrain }) => {
  return (
    <>
      <div className="h-100 text-center personal">
        {/* 簡易個人資料 */}
        <h4>USER NAME</h4>
        <p>あらがき ゆい</p>
        <h4>NICKNAME</h4>
        <p>あらがき ゆい</p>
        <h4>EMAIL</h4>
        <p>garylin0969@gmail.com</p>
        <h4>JOIN TIME</h4>
        <p>2022-06-05 03:54:23</p>
        <h4>Mobile</h4>
        <p>0920913633</p>
        <div className="d-flex justify-content-around">
          <button
            onClick={(e) => {
              // 阻擋按鈕預設行為
              e.preventDefault();
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
    </>
  );
};

export default Personal;

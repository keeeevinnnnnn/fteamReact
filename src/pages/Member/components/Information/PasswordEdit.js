import React from 'react';

const PasswordEdit = ({ setmoveTrain }) => {
  return (
    <>
      <div className="h-100 d-flex align-items-center">
        {/* 修改密碼 */}
        <div className="w-100">
          <form action="" className="text-center">
            <h4>USER Password</h4>
            <input type="password" />
            <p>錯誤訊息</p>
            <h4>New Password</h4>
            <input type="password" />
            <p>錯誤訊息</p>
            <h4>Confirm Password</h4>
            <input type="password" />
            <p>錯誤訊息</p>
            <div className="d-flex justify-content-around">
              <button
                onClick={(e) => {
                  // 阻擋按鈕預設行為
                  e.preventDefault();
                  // 移動到顯示個人資料
                  setmoveTrain('translateY(0%)');
                }}
              >
                Back
              </button>
              <button>Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordEdit;

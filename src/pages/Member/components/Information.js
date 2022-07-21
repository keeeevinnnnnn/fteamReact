import React from 'react';
import AvatarForm from './AvatarForm';

const Information = () => {
  return (
    <>
      <div className="h-25">
        <AvatarForm />
      </div>
      <div className="h-75 memberInformationWrap">
        <div className="h-100 memberInformationTrain">
          <div className="h-100 text-center">
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
              <button>Edit</button>
              <button>Password</button>
            </div>
          </div>
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
          <div className="h-100 d-flex align-items-center">
            {/* 簡易個人資料 */}
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
                <div className="d-flex justify-content-center">
                  <button>Confirm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;

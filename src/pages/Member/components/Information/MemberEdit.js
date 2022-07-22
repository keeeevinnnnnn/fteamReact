import React, { useState, useContext } from 'react';
import '../../styles/MemberEdit.scss';
import axios from 'axios';
import AuthContext from '../../../../components/AuthContext';

const MemberEdit = ({
  setmoveTrain,
  setAvatarFromNone,
  setInformationWrap,
  member,
}) => {
  const { token, auths, setAuths } = useContext(AuthContext);
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
  // 離開這個表單時，如沒變更資料把欄位恢復成最初始值
  const [leaveForm, setLeaveForm] = useState({
    account: member.mem_account,
    name: member.mem_name,
    nickname: member.mem_nickname,
    birthday: member.mem_birthday,
    mobile: member.mem_mobile,
    email: member.mem_email,
    address: member.mem_address,
  });
  // onChange存值到fields
  const handleFieldsChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  // 記錄表單每個欄位有錯誤時的訊息
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    account: '',
    email: '',
    mobile: '',
  });
  // 離開這個表單時，把錯誤訊息清空用
  const [leaveFormError, setLeaveFormError] = useState({
    name: '',
    account: '',
    email: '',
    mobile: '',
  });
  // 表單檢查，有不合法的驗証出現時會觸發
  const handleInvalid = (e) => {
    // 先阻擋預設行為-泡泡訊息
    e.preventDefault();

    // 錯誤訊息
    // console.log(e.target.validationMessage)

    // 填入錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    });
  };
  // 表單更動時用於讓使用者清空某個正在修改的欄位的錯誤訊息
  const handleFormChange = (e) => {
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    });
  };
  // 表單更動時用於讓使用者清空某個正在修改的欄位的錯誤訊息
  const clickFormError = () => {
    setFieldErrors({ ...leaveFormError });
  };
  // 表單點擊送出後
  async function handleSubmit(e) {
    // 先阻擋預設送出行為
    e.preventDefault();

    // 作更多驗証
    if (fields.name.length < 2) {
      // 填入錯誤訊息
      setFieldErrors({
        ...fieldErrors,
        name: '最少兩個字',
      });

      return;
    }

    await axios
      .post('http://localhost:3000/member/edit', fields, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLeaveForm({ ...res.data.body });
        setAuths({ ...auths, change: 'Change Member Edit' });
        console.log(auths);
      });
  }
  return (
    <>
      <div className="h-100 d-flex justify-content-center align-items-center">
        {/* 個人資料修改 */}
        <form
          className="w-80 text-center memberEdit pt-2"
          // 表單點擊
          onSubmit={handleSubmit}
          // 表單檢查
          onInvalid={handleInvalid}
          // 表單有更動時
          onChange={handleFormChange}
        >
          <h5>Account</h5>
          <input
            type="text"
            name="account"
            required
            value={fields.account}
            onChange={handleFieldsChange}
          />
          <p>{fieldErrors.account}</p>
          <h5>User Name</h5>
          <input
            type="text"
            name="name"
            required
            value={fields.name}
            onChange={handleFieldsChange}
          />
          <p>{fieldErrors.name}</p>
          <h5>Nickname</h5>
          <input
            type="text"
            name="nickname"
            value={fields.nickname}
            onChange={handleFieldsChange}
          />
          <h5>Birthday</h5>
          <input
            type="date"
            name="birthday"
            value={fields.birthday}
            onChange={handleFieldsChange}
          />
          <h5>Mobile</h5>
          <input
            type="namber"
            name="mobile"
            value={fields.mobile}
            onChange={handleFieldsChange}
          />
          <p>{fieldErrors.mobile}</p>
          <h5>Email</h5>
          <input
            type="email"
            name="email"
            required
            value={fields.email}
            onChange={handleFieldsChange}
          />
          <p>{fieldErrors.email}</p>
          <h5>Address</h5>
          <textarea
            type="text"
            name="address"
            value={fields.address}
            onChange={handleFieldsChange}
          />
          <div className="d-flex justify-content-around">
            <button
              onClick={(e) => {
                // 阻擋按鈕預設行為
                e.preventDefault();
                setFields({ ...leaveForm });
                // 把隱藏的大頭貼區塊恢復顯示
                setAvatarFromNone('');
                // 個人資料區塊從90%設回75%
                setInformationWrap('h-75');
                // 移動到顯示個人資料
                setmoveTrain('translateY(-0%)');
                // 離開這個表單時把錯誤訊息清空
                clickFormError();
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

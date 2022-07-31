import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginLogo from './LoginLogo';

const Register = ({
  setLoginCard,
  registerNone,
  loginLogoText,
  setLoginLogoText,
}) => {
  // 頁面導向
  const navigate = useNavigate();
  // 取得頭貼input
  const registerAvatarRef = useRef(null);
  const [memberAvatar, setMemberAvatar] = useState('');

  // 點擊頭貼 觸發頭貼input
  function clickAvatar() {
    registerAvatarRef.current.click();
  }

  // 頭貼input值有變換時
  async function uploadAvatar(e) {
    const data = new FormData();
    data.append('avatar', e.target.files[0]);
    // console.log(data.get('avatar'));
    const response = await axios.post(
      'http://localhost:3000/member/upload',
      data
    );
    console.log(response.data.filename);
    setMemberAvatar(response.data.filename);
    setFields({ ...fields, avatar: response.data.filename });
  }

  // 記錄表單每個欄位輸入值
  const [fields, setFields] = useState({
    avatar: '',
    name: '',
    nickname: '',
    mobile: '',
    birthday: '',
    account: '',
    password: '',
    confirmPassword: '',
    email: '',
    address: '',
  });

  // 結束時清空欄位用
  const endRegister = {
    avatar: '',
    name: '',
    nickname: '',
    mobile: '',
    birthday: '',
    account: '',
    password: '',
    confirmPassword: '',
    email: '',
    address: '',
  };

  // onChange存值到fields
  const handleFieldsChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  // 記錄表單每個欄位有錯誤時的訊息
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    account: '',
    password: '',
    confirmPassword: '',
    email: '',
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

    if (fields.password !== fields.confirmPassword) {
      // 填入錯誤訊息
      setFieldErrors({
        ...fieldErrors,
        password: '密碼與確認密碼不符',
        confirmPassword: '密碼與確認密碼不符',
      });

      return;
    }

    const response = await axios.post(
      'http://localhost:3000/member/register',
      fields
    );

    if (response.data.success === true) {
      alert('註冊成功');
      // 清空欄位
      setFields({ ...endRegister });
      // 頭貼狀態設回空字串
      setMemberAvatar('');
      // 卡片翻回去
      setLoginCard('');
      setLoginLogoText('Login');
    } else {
      alert('註冊失敗');
    }
  }

  // 表單更動時用於讓使用者清空某個正在修改的欄位的錯誤訊息
  const handleFormChange = (e) => {
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    });
  };

  const clickErrorText = (e) => {
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    });
  };
  return (
    <>
      <div
        className={`h-100 w-100 d-flex justify-content-center LoginBack ${registerNone}`}
      >
        <div className="LoginInputsBox col-12">
          <LoginLogo loginLogoText={loginLogoText} />
          <form
            className="LoginForm"
            // 表單點擊
            onSubmit={handleSubmit}
            // 表單檢查
            onInvalid={handleInvalid}
            // 表單有更動時
            onChange={handleFormChange}
          >
            <div className="LoginFormBox d-flex justify-content-around flex-wrap">
              <div className="col-12 d-flex justify-content-center align-items-center mb-3">
                <label className="text-center LoginFormAccountPassword rwdNoneBlock">
                  Avatar
                </label>
                {/* 頭貼input隱藏 */}
                <input
                  type="file"
                  name="avatar"
                  ref={registerAvatarRef}
                  onChange={uploadAvatar}
                  hidden
                />
                <div className="w-25 d-flex justify-content-center">
                  <img
                    // 有選頭貼就給頭貼照片 否則給預設照片
                    src={
                      memberAvatar === ''
                        ? '../../imgs/GaryComponents/images.png'
                        : `http://localhost:3000/avatar/${memberAvatar}`
                    }
                    // src="../../imgs/GaryComponents/images.png"
                    alt=""
                    className="w-50 cursorpointer loginAvatar rwdNoneBlock"
                    // 點擊頭貼input
                    onClick={clickAvatar}
                  />
                </div>
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-around mb-3">
                <label className="text-center LoginFormAccountPassword">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required // 必填欄位
                  value={fields.name}
                  onChange={handleFieldsChange}
                  onClick={clickErrorText}
                  className="text-center w-50 errorInputName"
                />
                <span className="errorTextName">{fieldErrors.name}</span>
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-around mb-3">
                <label className="text-center LoginFormAccountPassword rwdNoneBlock">
                  Nickname
                </label>
                <input
                  type="text"
                  name="nickname"
                  value={fields.nickname}
                  onChange={handleFieldsChange}
                  className="text-center w-50 rwdNoneBlock"
                />
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-around mb-3">
                <label className="text-center LoginFormAccountPassword rwdNoneBlock">
                  Mobile
                </label>
                <input
                  type="nameber"
                  name="mobile"
                  value={fields.mobile}
                  onChange={handleFieldsChange}
                  className="text-center w-50 rwdNoneBlock"
                />
              </div>
              <div className="col-9 col-xl-5 d-flex justify-content-around mb-3">
                <label className="text-center LoginFormAccountPassword rwdNoneBlock">
                  Birthday
                </label>
                <input
                  type="date"
                  name="birthday"
                  value={fields.birthday}
                  onChange={handleFieldsChange}
                  className="text-center w-50 rwdNoneBlock"
                />
              </div>
              <div className="col-9 col-xl-8 mb-3 d-flex justify-content-around">
                <label className="text-center LoginFormAccountPassword col-xl-3">
                  Account
                </label>
                <input
                  type="text"
                  name="account"
                  required
                  value={fields.account}
                  onChange={handleFieldsChange}
                  onClick={clickErrorText}
                  className="text-center w-50 errorInputAccount"
                />
                <span className="errorTextAccount">{fieldErrors.account}</span>
              </div>
              <div className="col-9 col-xl-8 d-flex mb-3 d-flex justify-content-around">
                <label className="text-center LoginFormAccountPassword col-xl-3">
                  Password
                </label>
                <div className="w-50">
                  <input
                    type="password"
                    name="password"
                    required
                    value={fields.password}
                    onChange={handleFieldsChange}
                    onClick={clickErrorText}
                    className="text-center w-100 mb-3 errorInputPassword"
                    autoComplete="on"
                  />
                  <span className="errorTextPassword">
                    {fieldErrors.password}
                  </span>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    value={fields.confirmPassword}
                    onChange={handleFieldsChange}
                    onClick={clickErrorText}
                    className="text-center w-100 errorInputPassword"
                    autoComplete="on"
                  />
                  <span className="errorTextPassword">
                    {fieldErrors.confirmPassword}
                  </span>
                </div>
              </div>
              <div className="col-9 col-xl-8 mb-3 d-flex justify-content-around">
                <label className="text-center LoginFormAccountPassword col-xl-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={fields.email}
                  onChange={handleFieldsChange}
                  onClick={clickErrorText}
                  className="text-center w-100 errorInputEmail"
                />
                <span className="errorTextEmail">{fieldErrors.email}</span>
              </div>
              <div className="col-8 mb-3 d-flex justify-content-around">
                <label className="text-center LoginFormAccountPassword col-6 col-xl-3 rwdNoneBlock">
                  Address
                </label>
                <textarea
                  type="text"
                  name="address"
                  value={fields.address}
                  onChange={handleFieldsChange}
                  className="text-center w-100 rwdNoneBlock"
                />
              </div>
              <div className="col-12 col-xl-8 d-flex justify-content-around pt-3">
                <button
                  className="cursorpointer custom-btn btn-8"
                  onClick={(e) => {
                    e.preventDefault();
                    setLoginCard('');
                    setLoginLogoText('Login');
                  }}
                >
                  <span className="text-center">Back To Login</span>
                </button>
                <button className="custom-btn btn-8">
                  <span>CONFIRM</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

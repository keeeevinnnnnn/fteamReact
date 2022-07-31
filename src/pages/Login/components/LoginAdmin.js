import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Btn8.scss';
import '../styles/LoginAdmin.scss';
import LoginLogo from './LoginLogo';
import AuthContext from '../../../components/AuthContext';

const LoginAdmin = ({ setLoginCard, loginLogoText }) => {
  const { auths, setAuths } = useContext(AuthContext);
  // 頁面導向
  const navigate = useNavigate();
  // 眼睛查看密碼
  const [adminSeePassword, setAdminSeePassword] = useState(false);
  // 記錄表單每個欄位輸入值
  const [fields, setFields] = useState({
    account: '',
    password: '',
  });
  // onChange存值到fields
  const handleFieldsChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  // 記錄表單每個欄位有錯誤時的訊息
  const [fieldErrors, setFieldErrors] = useState({
    account: '',
    password: '',
  });
  // 表單檢查，有不合法的驗証出現時會觸發
  const handleInvalid = (e) => {
    // 先阻擋預設行為-泡泡訊息
    e.preventDefault();
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
  const clickErrorText = (e) => {
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    });
  };
  // 表單點擊送出後
  async function handleSubmit(e) {
    // 先阻擋預設送出行為
    e.preventDefault();

    const response = await axios.post(
      'http://localhost:3000/admin/login',
      fields
    );
    console.log(response.data);
    // 如果登入成功
    if (response.data.success) {
      localStorage.setItem('user_info', JSON.stringify(response.data.info));
      localStorage.setItem('user_token', response.data.token);
      alert('登入成功');
      // 整個網站判斷有沒有登入
      setAuths({ ...auths, token: response.data.token, auth: true });
      // 頁面轉向
      navigate('/', { replace: true });
    } else {
      alert('登入失敗');
    }
  }
  return (
    <>
      <div className="h-100 w-100 LoginAdmin LoginBack">
        <div className="h-20 w-100">
          <LoginLogo loginLogoText={loginLogoText} />
        </div>
        <form
          className="h-40 w-100 text-white text-center"
          // 表單點擊
          onSubmit={handleSubmit}
          // 表單檢查
          onInvalid={handleInvalid}
          // 表單有更動時
          onChange={handleFormChange}
        >
          <h3>Admin Account</h3>
          <input
            type="text"
            placeholder="Admin Account"
            name="account"
            required
            value={fields.account}
            onChange={handleFieldsChange}
            onClick={clickErrorText}
          />
          <p>{fieldErrors.account}</p>
          <h3>Admin Password</h3>
          <input
            type={adminSeePassword ? 'text' : 'password'}
            placeholder="Admin Password"
            name="password"
            required
            value={fields.password}
            onChange={handleFieldsChange}
            onClick={clickErrorText}
            autoComplete="on"
          />
          <p>{fieldErrors.password}</p>
          <button className="custom-btn btn-8">
            <span>LOGIN</span>
          </button>
        </form>
        <div className="h-20 w-100 d-flex justify-content-center">
          <button
            className="buttonChangePage h-25"
            onClick={() => {
              setLoginCard('');
            }}
          >
            Member
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;

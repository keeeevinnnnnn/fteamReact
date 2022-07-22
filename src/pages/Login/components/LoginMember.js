import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginLogo from './LoginLogo';
import AuthContext from '../../../components/AuthContext';

const LoginMember = ({
    setLoginCard,
    setRegisterNone,
    loginLogoText,
    setLoginLogoText,
}) => {
    const { auth, setAuth } = useContext(AuthContext);
    // 頁面導向
    const navigate = useNavigate();
    // 眼睛查看密碼
    const [memberSeePassword, setMemberSeePassword] = useState(false);
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
            'http://localhost:3000/member/login',
            fields
        );
        // 如果登入成功
        if (response.data.success) {
            localStorage.setItem(
                'user_info',
                JSON.stringify(response.data.info)
            );
            localStorage.setItem('user_token', response.data.token);
            alert('登入成功');
            // 整個網站判斷有沒有登入
            setAuth({ token: response.data.token, auth: true });
            // 頁面轉向
            navigate('/', { replace: true });
        } else if (response.data.bollen === true) {
            alert('帳號已被停用');
        } else {
            alert('登入失敗');
        }
    }

    return (
        <>
            <div className="h-100 w-100 d-flex justify-content-center LoginFront">
                <div className="LoginInputsBox col-12">
                    <LoginLogo loginLogoText={loginLogoText} />
                    <form
                        // 表單點擊
                        onSubmit={handleSubmit}
                        // 表單檢查
                        onInvalid={handleInvalid}
                        // 表單有更動時
                        onChange={handleFormChange}
                        className="LoginForm"
                    >
                        <div className="LoginFormBox">
                            <label className="w-100 text-center mt-3 LoginFormAccountPassword">
                                Account
                            </label>
                            <div className="d-flex justify-content-center mt-3">
                                <input
                                    type="text"
                                    placeholder="User Account"
                                    className="text-center loginErrorInput"
                                    name="account"
                                    required
                                    value={fields.account}
                                    onChange={handleFieldsChange}
                                    onClick={clickErrorText}
                                />
                                <span className="loginErrorText">
                                    {fieldErrors.account}
                                </span>
                            </div>
                            <label className="w-100 text-center mt-3 LoginFormAccountPassword">
                                Password
                            </label>
                            <div className="d-flex justify-content-center mt-3 d-flex align-items-center">
                                <input
                                    type={
                                        memberSeePassword ? 'text' : 'password'
                                    }
                                    placeholder="User Password"
                                    className="text-center passwordInput loginErrorInput"
                                    name="password"
                                    required
                                    value={fields.password}
                                    onChange={handleFieldsChange}
                                    onClick={clickErrorText}
                                />
                                <span className="loginErrorText">
                                    {fieldErrors.password}
                                </span>
                                <img
                                    src={
                                        memberSeePassword
                                            ? '../../imgs/GaryComponents/eyes_on.png'
                                            : '../../imgs/GaryComponents/eyes_off.png'
                                    }
                                    alt=""
                                    className="cursorpointer passwordEyes"
                                    onClick={() => {
                                        setMemberSeePassword(
                                            !memberSeePassword
                                        );
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-around mt-4 FbLineGoogle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 488 512"
                                className="col-1 cursorpointer"
                            >
                                <path
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                    fill="white"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="col-1 cursorpointer"
                            >
                                <path
                                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                    fill="white"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="col-1 cursorpointer"
                            >
                                <path
                                    d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="LoginSignUp">
                            <div className="mt-4 d-flex justify-content-center">
                                <button className="custom-btn btn-8">
                                    <span>LOGIN</span>
                                </button>
                            </div>
                            <div className="mt-4 d-flex justify-content-center">
                                <div
                                    className="custom-btn btn-8"
                                    onClick={() => {
                                        setLoginCard('LoginCardRotate');
                                        setRegisterNone('');
                                        setLoginLogoText('Register');
                                    }}
                                >
                                    <span className="text-center">SIGN UP</span>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="d-flex  ForgotAdmin">
                        <div className="col-6 d-flex justify-content-center">
                            <p className="cursorpointer">Forgot?</p>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <p
                                className="cursorpointer"
                                onClick={() => {
                                    setLoginCard('LoginCardRotate');
                                    setRegisterNone('d-none');
                                }}
                            >
                                Admin
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginMember;

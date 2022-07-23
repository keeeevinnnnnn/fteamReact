import React, { useState, useEffect, useContext } from 'react';
import Logo from '../logo_imgs/fteam-logo2.png';
import MenuSelect from './MenuSelect';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MemberContext } from '../App';
import AuthContext from './AuthContext';

const Navbar = () => {
  // 從這支Context拿值
  // auth為登入判斷(true,false) token為會員JWT的token logout是登出涵式
  const { auth, token, logout, auths } = useContext(AuthContext);
  // 會員個人資料的State
  const { member, setMember } = useContext(MemberContext);
  // 接NavBar要顯示的姓名或暱稱
  const [navName, setNavName] = useState('');
  // 判斷有沒有登入存的值
  useEffect(() => {
    // 登入狀態不是false再執行 否則直接return
    if (!auth) {
      console.log(token);
      return;
    } else {
      console.log(token);
      axios
        .get('http://localhost:3000/member/memberself', {
          // 發JWT一定要加這個headers
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // 接會員所有資料
          setMember(res.data);
          // 先接會員暱稱 NavBar顯示專用
          setNavName(res.data.mem_nickname);
          // 如果會員沒有暱稱改接姓名
          if (res.data.mem_nickname === '') {
            setNavName(res.data.mem_name);
          }
        });
    }
  }, [auths]); // 有變更資料才刷新
  return (
    <>
      <div className="w-100 top-grid d-flex">
        <div className="col-4 h-100 d-flex align-items-center">
          <div className="logo-wrap">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="col-4 h-100"></div>
        <div className="col-4 h-100 ">
          <MenuSelect />
          <div className="nav-icon-wrap w-100 h-100 d-md-flex d-none justify-content-end align-items-center">
            {auth ? (
              // 登入狀態顯示頭貼跟姓名(暱稱)
              <Link className="text-decoration-none d-flex" to={'/member'}>
                <div className="userLogin-icon-box">
                  <img
                    className="col-2 userLogin-icon-wrap"
                    style={{
                      objectFit: 'cover',
                      borderRadius: '50%',
                      aspectRatio: '1/1',
                    }}
                    src={`http://localhost:3000/avatar/${member.mem_avatar}`}
                    alt=""
                  />
                  <span className="user-icon-text col-6">{navName}</span>
                </div>
              </Link>
            ) : (
              // 未登入狀態顯示會員icon
              <Link to={'/login'}>
                <div className="user-icon-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </Link>
            )}
            <div className="like-icon-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <Link to={'/carts'}>
              <div className="cart-icon-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </Link>
            {auth ? (
              // 登入狀態顯示SIGNOUT
              <div
                className="text-decoration-none text-black auth-text-wrap"
                onClick={() => {
                  // 呼叫登出函式
                  logout();
                }}
              >
                SIGNOUT
              </div>
            ) : (
              // 未登入狀態顯示LOGIN
              <Link className=" text-decoration-none text-black" to={'/login'}>
                <div className="auth-text-wrap">LOGIN</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './styles/Admin.scss';

const Admin = () => {
  // 發fetch更新畫面用
  const [change, setChange] = useState('');
  // 接收會員的狀態 雖然沒用到但先放著
  const [allMember, setallMember] = useState([]);
  // 呈現資料用
  const [usersDisplay, setUsersDisplay] = useState([]);
  // 搜尋用
  const [searchWord, setSearchWord] = useState('');
  // 顯示停用/啟用會員用 預設是沒有查看停用或啟用會員
  const [searchTrueFalse, setSearchTrueFalse] = useState('');

  useMemo(() => {
    // 拿到所有會員資料
    axios.get('http://localhost:3000/member/all').then((res) => {
      // 用該狀態先取得所有會員資料
      setallMember(res.data);
      // 如果有搜尋的情況下
      if (searchWord) {
        // 回傳的新資料配合搜尋欄位的文字+即時搜尋
        const newUsers = res.data.filter((v, i) =>
          v.mem_name.includes(searchWord)
        );
        // 為了讓資料欄位維持在搜尋狀態下
        setUsersDisplay(newUsers);
        return;
      }
      // 如果正在查看啟用會員的話只顯示啟用會員的資料
      if (searchTrueFalse === 'true') {
        const trueMember = res.data.filter((v, i) => v.mem_bollen === 1);
        setUsersDisplay(trueMember);
        return;
      }
      // 如果正在查看停用會員的話只顯示停用會員的資料
      if (searchTrueFalse === 'false') {
        const falseMember = res.data.filter((v, i) => v.mem_bollen === 0);
        setUsersDisplay(falseMember);
        return;
      }
      // 如果沒有在搜尋狀態下也沒有在查看停用/啟用會員，就顯示所有資料
      setUsersDisplay(res.data);
    });
  }, [change]);

  // 即時搜尋顯示資料用 搜尋欄有變動的話才執行該涵式
  useMemo(() => {
    // 如果有在搜尋 把搜尋資料塞進顯示資料的狀態裡
    if (searchWord) {
      const newUsers = allMember.filter((v, i) =>
        v.mem_name.includes(searchWord)
      );
      setUsersDisplay(newUsers);
      return;
    }
    // 如果沒在搜尋 顯示全部資料
    if (!searchWord) {
      setUsersDisplay(allMember);
      return;
    }
  }, [searchWord]);

  // 顯示啟用會員
  function searchTrue() {
    // 把搜尋欄清空
    setSearchWord('');
    // 查看停用/啟用會員的狀態設成在查看啟用會員
    setSearchTrueFalse('true');
    // 從所有資料回傳啟用狀態的會員
    const enableMember = allMember.filter((v, i) => v.mem_bollen === 1);
    // 把上述資料塞進顯示資料的狀態中
    setUsersDisplay(enableMember);
  }

  // 顯示停用會員
  function searchFalse() {
    // 把搜尋欄清空
    setSearchWord('');
    // 查看停用/啟用會員的狀態設成在查看停用會員
    setSearchTrueFalse('false');
    // 從所有資料回傳停用狀態的會員
    const disableMember = allMember.filter((v, i) => v.mem_bollen === 0);
    // 把上述資料塞進顯示資料的狀態中
    setUsersDisplay(disableMember);
  }

  // 管理員變動會員狀態 (停用/啟用)
  function changeState(v) {
    if (v.mem_bollen === 1) {
      if (window.confirm(`確定要停用會原${v.mem_name}嗎?`)) {
        // 停用
        axios
          .put('http://localhost:3000/admin/stop', { sid: v.sid })
          .then((res) => {
            if (res.data.success) {
              // 讓useEffect資料重新取得
              setChange(uuidv4());
            }
          });
      }
      return;
    }
    if (v.mem_bollen === 0) {
      if (window.confirm(`確定要重啟會原${v.mem_name}嗎?`)) {
        // 啟用
        axios
          .put('http://localhost:3000/admin/reboot', { sid: v.sid })
          .then((res) => {
            if (res.data.success) {
              // 讓useEffect資料重新取得
              setChange(uuidv4());
            }
          });
      }
    }
  }

  // 刪除會員帳號
  function deleteMember(v) {
    if (window.confirm(`確定要刪除會原${v.mem_name}嗎?`)) {
      axios.delete(`http://localhost:3000/admin/?sid=${v.sid}`).then((res) => {
        if (res.data.success) {
          // 讓useEffect資料重新取得
          setChange(uuidv4());
        }
      });
    }
  }

  // 顯示全部會員的按鈕
  function searchAllMember() {
    // 把搜尋欄清空
    setSearchWord('');
    // 把查看停用/啟用會員的狀態設回沒有在查看
    setSearchTrueFalse('');
    // 塞所有會員資料到顯示資料用的狀態
    setUsersDisplay(allMember);
  }

  return (
    <>
      <div className="member-bg w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0 adminTable">
          <input
            type="text"
            placeholder="User Name"
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <button onClick={searchAllMember}>全部會員</button>
          <button onClick={searchTrue}>啟用會員</button>
          <button onClick={searchFalse}>停用會員</button>
          <div className="w-90 h-90">
            <table className="h-100">
              <thead>
                <tr>
                  <th className="thLeft"></th>
                  <th>ID</th>
                  <th>State</th>
                  <th>Name</th>
                  <th>Nickname</th>
                  <th>Email</th>
                  <th>Created</th>
                  <th className="thRight">Delete</th>
                </tr>
              </thead>
              <tbody>
                {usersDisplay.map((v, i) => {
                  return (
                    <tr className="trHover" key={uuidv4()}>
                      <td>
                        <img
                          style={{
                            height: '60px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            aspectRatio: '1/1',
                          }}
                          src={`http://localhost:3000/avatar/${v.mem_avatar}`}
                          alt=""
                        />
                      </td>
                      <td>{v.sid}</td>
                      <td>
                        {v.mem_bollen === 1 ? 'Enable ' : 'Disable '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="cursorpointer w-15"
                          fill="white"
                          onClick={() => {
                            changeState(v);
                          }}
                        >
                          <path d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z" />
                        </svg>
                      </td>
                      <td>{v.mem_name}</td>
                      <td>{v.mem_nickname}</td>
                      <td>{v.mem_email}</td>
                      <td>{v.mem_created_at}</td>
                      <td>
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="cursorpointer w-15"
                          onClick={() => {
                            deleteMember(v);
                          }}
                        >
                          <path
                            fill="red"
                            d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
                          />
                        </svg>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;

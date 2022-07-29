import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './styles/Admin.scss';

const Admin = () => {
  const [allMember, setallMember] = useState([]);
  // get delete
  useEffect(() => {
    axios.get('http://localhost:3000/member/all').then((res) => {
      console.log(res.data);
      setallMember(res.data);
    });
  }, []);
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0 adminTable">
          <table>
            <thead>
              <tr>
                <th>sid</th>
                <th>State</th>
                <th>Name</th>
                <th>Nickname</th>
                <th>Email</th>
                <th>Creat</th>
              </tr>
            </thead>
            <tbody>
              {allMember.map((v, i) => {
                return (
                  <tr key={uuidv4()}>
                    <td>{v.sid}</td>
                    <td>{v.mem_bollen}</td>
                    <td>{v.mem_name}</td>
                    <td>{v.mem_nickname}</td>
                    <td>{v.mem_email}</td>
                    <td>{v.mem_created_at}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;

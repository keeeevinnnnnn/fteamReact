import React from 'react';
import './styles/Admin.scss';

const Admin = () => {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0 adminTable">
          <table>
            <thead>
              <tr>
                <th>sid</th>
                <th>Name</th>
                <th>Creat</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;

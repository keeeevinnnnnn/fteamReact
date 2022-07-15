import React, { useEffect } from 'react';

const Member = ({ sideBar, setSideBar }) => {
  useEffect(() => {
    setSideBar('justify-content-end');
  }, []);
  return (
    <>
      <div className={`w-100 vh-100 d-flex align-items-end ${sideBar}`}>
        <div className="work-area col-12 col-md-10 p-0">
          大家製作放這邊～～～～
        </div>
      </div>
    </>
  );
};

export default Member;

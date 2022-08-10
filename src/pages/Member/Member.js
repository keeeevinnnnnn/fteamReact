import React, { useEffect } from 'react';
import { useSpinner } from '../../components/useSpinner/useSpinner';
import Information from './components/Information/Information';
import AllRecord from './components/AllRecord/AllRecord';
import './styles/Member.scss';

const Member = () => {
  // 過場動畫
  const { spinner, setLoading } = useSpinner(4000);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {/* {spinner} */}
      <div className="member-bg w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0 d-flex flex-wrap">
          <div className="col-12 col-xl-4 h-100">
            {/* 左邊 大頭貼 個人資料修改等等 */}
            <Information />
          </div>
          <div className="col-12 col-xl-8 h-100">
            <AllRecord />
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;

import React, { useEffect } from 'react';
import { useSpinner } from '../../components/useSpinner';
import './style/Member.scss';

const Member = () => {
  const { spinner, setLoading } = useSpinner(4000);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {/* {spinner} */}
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0 d-flex">
          <div className="col-4 h-100">
            <div className="h-30 memberAvatarBox">
              <form action="" className="h-100">
                {/* 頭貼上傳表單 */}
                <figure className="d-flex justify-content-center h-70">
                  {/* 頭貼區塊 */}
                  <img src="" alt="" className="h-100" />
                </figure>
                <div className="d-flex justify-content-center">
                  <button>Confirm</button>
                </div>
              </form>
            </div>
            <div className="h-70 text-center">
              <h6>USER NAME</h6>
              <p>あらがき ゆい</p>
              <h6>EMAIL</h6>
              <p>garylin0969@gmail.com</p>
              <h6>JOIN TIME</h6>
              <p>2022-06-05 03:54:23</p>
            </div>
          </div>
          <div className="col-8 h-100"></div>
        </div>
      </div>
    </>
  );
};

export default Member;

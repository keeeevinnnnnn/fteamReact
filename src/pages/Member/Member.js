import React, { useEffect } from 'react';
import { useSpinner } from '../../components/useSpinner';
import Information from './components/Information';
import './styles/Member.scss';

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
            <Information />
          </div>
          <div className="col-8 h-100"></div>
        </div>
      </div>
    </>
  );
};

export default Member;

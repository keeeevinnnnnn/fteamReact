import React from 'react';
import '../../styles/AvatarForm.scss';

const AvatarForm = () => {
  return (
    <>
      <form action="" className="h-100 memberAvatarForm">
        {/* 頭貼上傳表單 */}
        <figure className="d-flex justify-content-center h-70">
          {/* 頭貼區塊 */}
          <img src="" alt="" className="h-100" />
        </figure>
        <div className="d-flex justify-content-center">
          <button>Confirm</button>
        </div>
      </form>
    </>
  );
};

export default AvatarForm;

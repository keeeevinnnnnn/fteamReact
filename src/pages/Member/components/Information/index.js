import React, { useState } from 'react';
import AvatarForm from './AvatarForm';
import MemberEdit from './MemberEdit';
import PasswordEdit from './PasswordEdit';
import Personal from './Personal';
import '../../styles/Information.scss';

const Information = () => {
  // 移動個人資料/編輯個人資料/修改密碼
  const [moveTrain, setmoveTrain] = useState('translateY(0%)');
  return (
    <>
      <div className="h-25">
        <AvatarForm />
      </div>
      <div className="h-75 memberInformationWrap">
        <div
          className="h-100 memberInformationTrain"
          style={{
            transform: moveTrain,
            transition: '0.5s ease',
          }}
        >
          <Personal setmoveTrain={setmoveTrain} />
          <MemberEdit setmoveTrain={setmoveTrain} />
          <PasswordEdit setmoveTrain={setmoveTrain} />
        </div>
      </div>
    </>
  );
};

export default Information;

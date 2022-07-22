import React, { useState, useEffect, useContext } from 'react';
import AvatarForm from './AvatarForm';
import MemberEdit from './MemberEdit';
import PasswordEdit from './PasswordEdit';
import Personal from './Personal';
import '../../styles/Information.scss';
import { MemberContext } from '../../../../App';

const Information = () => {
  // 拿到會員個人資料
  const { member } = useContext(MemberContext);
  const [moveTrain, setmoveTrain] = useState('translateY(0%)');
  const [avatarFromNone, setAvatarFromNone] = useState('');
  const [informationWrap, setInformationWrap] = useState('h-75');
  return (
    <>
      <div className={`h-25 ${avatarFromNone}`}>
        <AvatarForm member={member} />
      </div>
      <div className={`${informationWrap} memberInformationWrap`}>
        <div
          className="h-100 memberInformationTrain"
          style={{
            transform: moveTrain,
            transition: '0.5s ease',
          }}
        >
          <Personal
            setmoveTrain={setmoveTrain}
            setAvatarFromNone={setAvatarFromNone}
            setInformationWrap={setInformationWrap}
            member={member}
          />
          <MemberEdit
            setmoveTrain={setmoveTrain}
            setAvatarFromNone={setAvatarFromNone}
            setInformationWrap={setInformationWrap}
            member={member}
          />
          <PasswordEdit setmoveTrain={setmoveTrain} />
        </div>
      </div>
    </>
  );
};

export default Information;

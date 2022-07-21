import React from 'react';
import AvatarForm from './AvatarForm';
import MemberEdit from './MemberEdit';
import PasswordEdit from './PasswordEdit';
import Personal from './Personal';
import '../../styles/Information.scss';

const Information = () => {
  return (
    <>
      <div className="h-25">
        <AvatarForm />
      </div>
      <div className="h-75 memberInformationWrap">
        <div className="h-100 memberInformationTrain">
          <Personal />
          <MemberEdit />
          <PasswordEdit />
        </div>
      </div>
    </>
  );
};

export default Information;

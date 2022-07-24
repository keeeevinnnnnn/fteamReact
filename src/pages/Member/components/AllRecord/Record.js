import React from 'react';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';
import RecordCard from './RecordCard';
import RecordEcharts from './RecordEcharts';

const Record = () => {
  return (
    <>
      {' '}
      <div className="w-100 h-100 d-flex">
        <ScrollBox>
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
        </ScrollBox>

        <div className="col-6 h-100">
          <RecordEcharts />
        </div>
      </div>
    </>
  );
};

export default Record;

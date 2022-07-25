import React from 'react';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';
import RecordCard from './RecordCard';
import RecordEcharts from './RecordEcharts';
import '../../styles/Record.scss';

const Record = () => {
  return (
    <>
      {' '}
      <div className="w-100 h-100  d-flex flex-warp">
        <div className="col-12 col-xl-6 h-100">
          <ScrollBox>
            <RecordCard />
            <RecordCard />
            <RecordCard />
            <RecordCard />
            <RecordCard />
            <RecordCard />
            <RecordCard />
          </ScrollBox>
        </div>

        <div className="col-xl-6 h-100 recordEchartsBox">
          <RecordEcharts />
        </div>
      </div>
    </>
  );
};

export default Record;

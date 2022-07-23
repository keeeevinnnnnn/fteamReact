import React from 'react';
import CollectEcharts from './CollectEcharts';
import CollectCard from './CollectCard';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';

const Collect = () => {
  return (
    <>
      <div className="w-100 h-100 d-flex">
        <ScrollBox>
          <CollectCard />
          <CollectCard />
          <CollectCard />
          <CollectCard />
          <CollectCard />
          <CollectCard />
          <CollectCard />
        </ScrollBox>

        <div className="col-6 h-100">
          <CollectEcharts />
        </div>
      </div>
    </>
  );
};

export default Collect;

import React from 'react';
import CollectCard from './CollectCard';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';

const Collect = () => {
  return (
    <>
      <div className="w-100 h-100 d-flex justify-content-center">
        <div className="w-70">
          <ScrollBox>
            <CollectCard />
            <CollectCard />
            <CollectCard />
            <CollectCard />
            <CollectCard />
            <CollectCard />
            <CollectCard />
          </ScrollBox>
        </div>
      </div>
    </>
  );
};

export default Collect;

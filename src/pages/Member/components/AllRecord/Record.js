import React from 'react';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';
import RecordCard from './RecordCard';
import RecordEcharts from './RecordEcharts';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/Record.scss';

const Record = () => {
  // 下拉選單
  const option = ['All', 'Products', 'Customized'];
  return (
    <>
      <div className="w-100 h-100  d-flex flex-warp">
        <div className="col-12 col-xl-6 h-100">
          <div className="d-flex justify-content-around">
            <section id="select">
              <select>
                {option.map((v, i) => {
                  return (
                    <option key={uuidv4()} value={v}>
                      {v}
                    </option>
                  );
                })}
              </select>
            </section>
          </div>
          <ScrollBox>
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

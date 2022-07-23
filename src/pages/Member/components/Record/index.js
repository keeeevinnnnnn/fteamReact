import React, { useState } from 'react';
import MuiTabs from './MuiTabs';
import ReactEcharts from 'echarts-for-react';

const Record = () => {
  const [selectItem, setSelectItem] = useState('COLLECT');
  const aaa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        color: ['#cc6b66', '#859aa0', '#b69d87', '#d56d00', '#a55d87'],
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: `${aaa.length}`, name: 'Search Engine' },
          { value: 5, name: 'Direct' },
          { value: 2, name: 'Email' },
          { value: 4, name: 'Union Ads' },
          { value: 6, name: 'Video Ads' },
        ],
      },
    ],
  };
  return (
    <>
      <MuiTabs selectItem={selectItem} setSelectItem={setSelectItem} />
      <div className="w-100 h-90 d-flex">
        <div className="col-6">
          <div className="w-100 h-18 bg-light m-3"></div>
          <div className="w-100 h-18 bg-light m-3"></div>
          <div className="w-100 h-18 bg-light m-3"></div>
          <div className="w-100 h-18 bg-light m-3"></div>
        </div>
        <div className="col-6">
          <ReactEcharts option={option} style={{ top: '20%' }} />
        </div>
      </div>
    </>
  );
};

export default Record;

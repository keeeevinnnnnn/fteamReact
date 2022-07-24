import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/RecordEcharts.scss';

const RecordEcharts = () => {
  // 頁面導向
  const navigate = useNavigate();
  const aaa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
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
      <div className="h-20 d-flex justify-content-center align-items-center">
        <button
          className="ehartsBTN"
          onClick={(e) => {
            e.preventDefault();
            // 頁面轉向
            navigate('/oders', { replace: true });
          }}
        >
          More detail
        </button>
      </div>
      <ReactEcharts option={option} />
    </>
  );
};

export default RecordEcharts;

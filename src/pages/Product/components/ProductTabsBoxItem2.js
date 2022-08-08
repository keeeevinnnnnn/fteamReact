import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import axios from '../commons/axios';

const ProductTabsBoxItem2 = (props) => {
  const { sid } = props;

  // 銷售數據原始資料
  //   month(order_date): 0
  //   item_id: 1
  //   sum(order_details.quantity): 0
  const [priceData, setPriceData] = useState([]);

  const data = [
    {
      name: 'Mar',
      uv: 140,
      amt: 50,
    },
    {
      name: 'Apr',
      uv: 130,
      amt: 100,
    },
    {
      name: 'May',
      uv: 100,
      amt: 150,
    },
    {
      name: 'Jun',
      uv: 180,
      amt: 200,
    },
    {
      name: 'Jul',
      uv: 100,
      amt: 250,
    },
    {
      name: 'Aug',
      uv: 200,
      amt: 300,
    },
  ];

  useEffect(() => {
    axios.get('/product/priceHistory', { params: { sid: sid } }).then((res) => {
      setPriceData(res.data);
    });
  }, [sid]);

  return (
    <div className="col-12 w-100 h-100">
      <ResponsiveContainer width="100%" height={360}>
        <AreaChart
          // width={2071}
          // height={550}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis dataKey="amt" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#61dafb" fill="#61dafb" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductTabsBoxItem2;

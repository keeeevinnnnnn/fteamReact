import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function OrderMuiTabs() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'black', position: 'relative' }}>
        <Tabs value={'ORDERS'} aria-label="basic tabs example">
          <Tab
            sx={{ fontSize: '1.1rem' }}
            disableRipple={true}
            label="ORDERS"
            value={'ORDERS'}
          />
        </Tabs>
        <div className="order-search-wrap">
          <div className="w-90 h-90"></div>
        </div>
      </Box>
    </Box>
  );
}
export default OrderMuiTabs;

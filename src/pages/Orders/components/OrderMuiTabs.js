import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function OrderMuiTabs() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'black' }}>
        <Tabs value={'ORDERS'} aria-label="basic tabs example">
          <Tab
            sx={{ fontSize: '1.1rem' }}
            disableRipple={true}
            label="ORDERS"
            value={'ORDERS'}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
export default OrderMuiTabs;

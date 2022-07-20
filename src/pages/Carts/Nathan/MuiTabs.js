import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function MuiTabs(props) {
  const { selectItem, setSelectItem } = props;
  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setSelectItem(newValue);
  };

  return (
    <Box sx={{ width: '90%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'black' }}>
        <Tabs
          value={selectItem}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ fontSize: '1.1rem' }}
            disableRipple={true}
            label="PRODUCTS"
            value={'PRODUCTS'}
          />
          <Tab
            sx={{ fontSize: '1.1rem' }}
            disableRipple={true}
            label="CUSTOMIZED"
            value={'CUSTOMIZED'}
          />
          <Tab
            sx={{ fontSize: '1.1rem' }}
            disableRipple={true}
            label="LESSONS"
            value={'LESSONS'}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
export default MuiTabs;

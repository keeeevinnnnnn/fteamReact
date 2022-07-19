import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function BasicTabs() {
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'black' }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab disableRipple={true} label="PRODUCTS" value={'PRODUCTS'} />
          <Tab disableRipple={true} label="CUSTOMIZED" value={'CUSTOMIZED'} />
          <Tab disableRipple={true} label="LESSON" value={'LESSON'} />
        </Tabs>
      </Box>
    </Box>
  );
}
export default BasicTabs;

import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cus_attributes from './Cus_attributes';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DataTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="DATA 1" {...a11yProps(0)} sx={{ width: '30%' }} />
          <Tab label="DATA 2" {...a11yProps(1)} sx={{ width: '30%' }} />
          <Tab label="DATA 3" {...a11yProps(2)} sx={{ width: '30%' }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="row ">
          <Cus_attributes />
          <Cus_attributes />
          <Cus_attributes />
          <Cus_attributes />
          <Cus_attributes />
          <Cus_attributes />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        DATA 2
        <hr />
        DATA 2
        <hr />
        DATA 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        DATA 3
        <hr />
        DATA 3
        <hr />
        DATA 3
      </TabPanel>
    </Box>
  );
}

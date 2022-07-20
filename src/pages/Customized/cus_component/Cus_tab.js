import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function BasicTabs() {
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
          <Tab label="Style" {...a11yProps(0)} sx={{width:'20%'}}/>
          <Tab label="Upload" {...a11yProps(1)} sx={{width:'20%'}} />
          <Tab label="Stickers" {...a11yProps(2)} sx={{width:'20%'}} />
          <Tab label="Filter" {...a11yProps(3)} sx={{width:'20%'}} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
        <div class="cus-select-box d-flex justify-content-between">
          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern05.jpg" alt="" />
          </div>

          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern05.jpg" alt="" />
          </div>

          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern05.jpg" alt="" />
          </div>

          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern05.jpg" alt="" />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two LALALALA
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        <div class="cus-select-box d-flex justify-content-between">
          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern_02.jpg" alt="" />
          </div>

          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern_02.jpg" alt="" />
          </div>

          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern_02.jpg" alt="" />
          </div>

          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern_02.jpg" alt="" />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
        <div class="cus-select-box d-flex justify-content-between">
          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern_01.jpg" alt="" />
          </div>

          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern_01.jpg" alt="" />
          </div>

          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern_01.jpg" alt="" />
          </div>

          <div className="cus_select">
            <input type="radio" value="第一個圖案" className="cus-radio" />
            <img src="/imgs/Customized/pattern/pattern_01.jpg" alt="" />
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}

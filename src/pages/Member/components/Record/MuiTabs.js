import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const MuiTabs = ({ selectItem, setSelectItem }) => {
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setSelectItem(newValue);
  };
  return (
    <>
      <Box sx={{ width: '97%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'black' }}>
          <Tabs
            aria-label="basic tabs example"
            value={selectItem}
            onChange={handleChange}
          >
            <Tab
              sx={{ fontSize: '1.1rem' }}
              disableRipple={true}
              label="COLLECT"
              value={'COLLECT'}
            />
            <Tab
              sx={{ fontSize: '1.1rem' }}
              disableRipple={true}
              label="RECORD"
              value={'RECORD'}
            />
            <Tab
              sx={{ fontSize: '1.1rem' }}
              disableRipple={true}
              label="MY LESSON"
              value={'MY LESSON'}
            />
            <Tab
              sx={{ fontSize: '1.1rem' }}
              disableRipple={true}
              label="CHAT"
              value={'CHAT'}
            />
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default MuiTabs;

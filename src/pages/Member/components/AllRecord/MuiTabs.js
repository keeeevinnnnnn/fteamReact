import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const MuiTabs = ({ selectItem, setSelectItem }) => {
  const handleChange = (event, newValue) => {
    setSelectItem(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'black' }}>
          <Tabs
            aria-label="basic tabs example"
            value={selectItem}
            onChange={handleChange}
          >
            <Tab
              sx={{ fontSize: '0.7rem'}}
              disableRipple={true}
              label="Saved"
              value={'Saved'}
            />
            <Tab
              sx={{ fontSize: '0.7rem' }}
              disableRipple={true}
              label="RECORD"
              value={'RECORD'}
            />
            <Tab
              sx={{ fontSize: '0.7rem' }}
              disableRipple={true}
              label="MY LESSON"
              value={'MY LESSON'}
            />
            <Tab
              sx={{ fontSize: '0.7rem' }}
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

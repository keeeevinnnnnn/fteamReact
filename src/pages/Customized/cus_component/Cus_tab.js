import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, setBgcolor, bgcolor, ...other } = props;

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

export default function Cus_tab(props) {
  const { setBgcolor, bgcolor, bgimgName, setBgimgName,setPatternName,setStickerName } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectBGName = (e) => {
    const newSelectBg = e.target.value;
    setBgimgName(newSelectBg);
  };
 

  const selectPatternName = (e)=>{
    const newSelectPattern = e.target.value;
    setPatternName(newSelectPattern)
  }

  const selectStickerName = (e) => {
    const newSelectSticker = e.target.value;
    setStickerName(newSelectSticker);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Style"
            {...a11yProps(0)}
            sx={{ width: '20%' }}
            disableRipple={true}
          />
          <Tab
            label="Pattern"
            {...a11yProps(1)}
            sx={{ width: '20%' }}
            disableRipple={true}
          />
          <Tab
            label="Stickers"
            {...a11yProps(2)}
            sx={{ width: '20%' }}
            disableRipple={true}
          />
          <Tab
            label="Basic"
            {...a11yProps(3)}
            sx={{ width: '20%' }}
            disableRipple={true}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div class="cus-select-box d-flex justify-content-between">
          <div className="cus_select">
            <label>
              <input
                type="radio"
                value="style_01"
                name="cus-style"
                className="cus-radio"
                onChange={selectBGName}
              />
              <img src="/imgs/Customized/style_01.png" alt="style" />
            </label>
          </div>
          <div className="cus_select">
            <label>
              <input
                type="radio"
                value="style_02"
                name="cus-style"
                className="cus-radio"
                onChange={selectBGName}
              />
              <img src="/imgs/Customized/style_02.png" alt="style" />
            </label>
          </div>
          <div className="cus_select">
            <label>
              <input
                type="radio"
                value="style_03"
                name="cus-style"
                className="cus-radio"
                onChange={selectBGName}
              />
              <img src="/imgs/Customized/style_03.png" alt="style" />
            </label>
          </div>
          <div className="cus_select">
            <label>
              <input
                type="radio"
                value="style_04"
                name="cus-style"
                className="cus-radio"
                onChange={selectBGName}
              />
              <img src="/imgs/Customized/style_04.png" alt="style" />
            </label>
          </div>
        </div>

       
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div class="cus-select-box d-flex justify-content-between">
        <div className="cus_select">
            <label>
              <input
                type="radio"
                value="Disturb"
                name="cus-pattern"
                className="cus-radio"
                onChange={selectPatternName} 
              />
              <img src="/imgs/Customized/pattern/Disturb.png" alt="style" />
            </label>
          </div>
          <div className="cus_select">
            <label>
              <input
                type="radio"
                value="Parallel"
                name="cus-pattern"
                className="cus-radio"
                onChange={selectPatternName} 
              />
              <img src="/imgs/Customized/pattern/Parallel.png" alt="style" />
            </label>
          </div>
          <div className="cus_select">
            <label>
              <input
                type="radio"
                value="Startwave"
                name="cus-pattern"
                className="cus-radio"
                onChange={selectPatternName} 
              />
              <img src="/imgs/Customized/pattern/Startwave.png" alt="style" />
            </label>
          </div>
          <div className="cus_select">
            <label>
              <input
                type="radio"
                value="Triangles"
                name="cus-pattern"
                className="cus-radio"
                onChange={selectPatternName} 
              />
              <img src="/imgs/Customized/pattern/Triangles.png" alt="style" />
            </label>
          </div>

          


        </div>
        <div class="board-bk w-100 mt-3">
          <input
            type="color"
            value={bgcolor}
            onChange={(e) => setBgcolor(e.target.value)}
            className="w-100"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        
        <div class="cus-select-box d-flex justify-content-between">
        <div className="cus_select">
            <label>
              <input
                type="radio"
                value="Dot"
                name="cus-sticker"
                className="cus-radio"
                onChange={selectStickerName} 
              />
              <img src="/imgs/Customized/sticker/Dot.png" alt="style" />
            </label>
          </div>
          
          <div className="cus_select">
            <label>
              <input
                type="radio"
                value="skew"
                name="cus-sticker"
                className="cus-radio"
                onChange={selectStickerName} 
              />
              <img src="/imgs/Customized/sticker/skew.png" alt="style" />
            </label>
          </div>
          <div className="cus_select">
            <label>
              <input
                type="radio"
                value="waves"
                name="cus-sticker"
                className="cus-radio"
                onChange={selectStickerName} 
              />
              <img src="/imgs/Customized/sticker/waves.png" alt="style" />
            </label>
          </div>
          <div className="cus_select">
            <label>
              <input
                type="radio"
                value="stars"
                name="cus-sticker"
                className="cus-radio"
                onChange={selectStickerName} 
              />
              <img src="/imgs/Customized/sticker/stars.png" alt="style" />
            </label>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
       
      </TabPanel>
    </Box>
  );
}

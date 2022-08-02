import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../style/Lesson_tab.scss';
import Lesson_card from './Lesson_card';
import LessonSelect_time from './LessonSelect_time';
import LessonSelect_dance from './LessonSelect_dance';
import LessonSelect_price from './LessonSelect_price';
import Lesson_teacher from './Lesson_teacher';

import ScrollBox from '../components/ScrollBox/ScrollBox';

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
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

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
          <Tab label="LESSON" {...a11yProps(0)} disableRipple={true} />
          <Tab label="TEACHER" {...a11yProps(1)} disableRipple={true} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="w-80 d-flex cooler_lessonselect">
          <LessonSelect_time />
          <LessonSelect_dance />
          <LessonSelect_price />
        </div>

        <ScrollBox>
          <Lesson_card />
          <Lesson_card />
          <Lesson_card />
          <Lesson_card />
          <Lesson_card />
          <Lesson_card />
          <Lesson_card />
          <Lesson_card />
          <Lesson_card />
          <Lesson_card />
        </ScrollBox>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Lesson_teacher />
      </TabPanel>
    </Box>
  );
}

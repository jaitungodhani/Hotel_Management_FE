import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Billdesk from './Billdesk';
import "./billtabs.css";
import CompleteBill from './CompleteBill';

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
    <Box sx={{ width: '100%',marginTop:3}}>
      <Box sx={{ borderBottom: 1, borderColor: 'aliceblue',marginLeft:3,marginRight:3,position:"sticky",top:0,left:0,backgroundColor:"#181818",zIndex:3}}>
        <Tabs value={value} onChange={handleChange}>
          <Tab sx={{ color:"aliceblue"}} label="LIVE BILL" {...a11yProps(0)} />
          <Tab sx={{ color:"aliceblue"}} label="PAID BILL" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Billdesk />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompleteBill />
      </TabPanel>
    </Box>
  );
}

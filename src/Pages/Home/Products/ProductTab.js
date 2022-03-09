import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductCard from './ProductCard';
import Stocks from './Stocks';
import Technology from './Technology';
import Design from './Design';


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

    <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
          <Tab label="FINANCE" {...a11yProps(0)} />
          <Tab label="STOCKS" {...a11yProps(1)} />
          <Tab label="TECHNOLOGY" {...a11yProps(2)} />
          <Tab label="DESIGN" {...a11yProps(3)} />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
         <ProductCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
         <Stocks />
      </TabPanel>
      <TabPanel value={value} index={2}>
         <Technology />
     </TabPanel>
     <TabPanel value={value} index={3}>
         <Design />
     </TabPanel>
    </Box>

  );
}

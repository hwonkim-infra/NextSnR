/* eslint-disable import/no-unresolved */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Grid, Paper, Stack } from '@mui/material';
import { D1E3840annexI } from '@/sections/@dashboard/MPR/ANNEX/ANNEX_I_II/D1E3840annexI';
import { D1E3842annexII } from '@/sections/@dashboard/MPR/ANNEX/ANNEX_I_II/D1E3842annexII';
import EHSR from '@/sections/@dashboard/MPR/EHSR';
import { D1E3842annexIV } from '@/sections/@dashboard/MPR/ANNEX/ANNEX_IV_V/D1E3842annexIV';
import { D1E3886annexV } from '@/sections/@dashboard/MPR/ANNEX/ANNEX_IV_V/D1E3886annexV';
import { CH00_preFace } from '@/sections/@dashboard/MPR/CHAPTER/CH00_preFace';
import { CH01_General } from '@/sections/@dashboard/MPR/CHAPTER/CH01_General';
import { CH02_ECONOMIC_OPERATORS } from '@/sections/@dashboard/MPR/CHAPTER/CH02_ECONOMIC_OPERATORS';
import { CH03_CONFORMITY_PRODUCTS } from '@/sections/@dashboard/MPR/CHAPTER/CH03_CONFORMITY_PRODUCTS';
import { CH04_CONFORMITY_ASSESSMENT } from '@/sections/@dashboard/MPR/CHAPTER/CH04_CONFORMITY_ASSESSMENT';
import { CH05_NOTIFICATION_ASSESSMENT_BODIES } from '@/sections/@dashboard/MPR/CHAPTER/CH05_NOTIFICATION_ASSESSMENT_BODIES';
import { CH07_DELEGATED_POWERS } from '@/sections/@dashboard/MPR/CHAPTER/CH07_DELEGATED_POWERS';
import { CH06_UNION_SAFEGUARD } from '@/sections/@dashboard/MPR/CHAPTER/CH06_UNION_SAFEGUARD';
import { D1E3888annexV_Xmodules } from '@/sections/@dashboard/MPR/ANNEX/ANNEX_VI_/D1E3888annexV_Xmodules';
import { D1E3889annexVII_TypeExam } from '@/sections/@dashboard/MPR/ANNEX/ANNEX_VI_/D1E3889annexVII_TypeExam';
import { D1E3899annexXI_Instruction_PCM } from '@/sections/@dashboard/MPR/ANNEX/ANNEX_VI_/D1E3899annexXI_Instruction_PCM';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const TabLabels = [
  'Category, Safety Components',
  'Essential Safety Requirements',
  'Technical Document, DOC/DOI',
  'Conformity Modules',
  'Assembly Instruction',
  'Ch 0 preface',
  'Ch 1 General',
  'Ch 2 Economic Operator',
  'Ch 3,4 Conformity',
  'Ch 5 Notified Body',
  'Ch 6, 7 Delegation',
];

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid item xs={2}>
        <Box>
          <Tabs
            orientation="vertical"
            // variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
            // wrapped={true}
          >
            {TabLabels.map((item, index) => (
              <Tab key={item} sx={{ alignItems: 'start' }} label={item} {...a11yProps({ index })} />
            ))}
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <TabPanel value={value} index={0} style={{ maxHeight: '95vh', overflow: 'auto' }}>
          <Paper elevation={1}>
            <Typography variant="subtitle1">
              ANNEX I <br />
              CATEGORIES OF MACHINERY OR RELATED PRODUCTS TO WHICH ONE OF THE PROCEDURES REFERRED TO IN ARTICLE 25(2)
              AND (3) SHALL BE APPLIED{' '}
            </Typography>

            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <D1E3840annexI />
            </Typography>
          </Paper>
          <Paper elevation={1}>
            <Typography variant="subtitle1">
              ANNEX II <br /> INDICATIVE LIST OF SAFETY COMPONENTS
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <D1E3842annexII />
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1} style={{ maxHeight: '95vh', overflow: 'auto' }}>
          <EHSR />
        </TabPanel>
        <TabPanel value={value} index={2} style={{ maxHeight: '95vh', overflow: 'auto' }}>
          <Paper elevation={1}>
            <Typography variant="subtitle1">
              ANNEX IV <br />
              Technical documentation
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <D1E3842annexIV />
            </Typography>

            <Typography variant="subtitle1">
              ANNEX V <br />
              EU DECLARATION OF CONFORMITY AND EU DECLARATION OF INCORPORATION
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <D1E3886annexV />
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <Paper elevation={1}>
            <Typography variant="subtitle1">
              Conformity Modules
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <D1E3888annexV_Xmodules />
            </Typography>
          </Paper>
          <Paper elevation={1}>
            <Typography variant="subtitle1">
              EU TYPE EXAMINATION
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <D1E3889annexVII_TypeExam />
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <Paper elevation={1}>
            <Typography variant="subtitle1">ANNEX XI <br />
            ASSEMBLY INSTRUCTIONS FOR PARTLY COMPLETED MACHINERY
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <D1E3899annexXI_Instruction_PCM />
            </Typography>
          </Paper>
        </TabPanel>

        <TabPanel value={value} index={5} style={{ maxHeight: '95vh', overflow: 'auto' }}>
          <Paper elevation={1}>
            <Typography variant="subtitle1">
              on machinery and repealing Directive 2006/42/EC of the European Parliament and of the Council and Council
              Directive 73/361/EEC
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <CH00_preFace />
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={6} style={{ maxHeight: '95vh', overflow: 'auto' }}>
          <Paper elevation={1}>
            <Typography variant="subtitle1">
              CHAPTER I <br /> GENERAL PROVISIONS
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <CH01_General />
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={7} style={{ maxHeight: '95vh', overflow: 'auto' }}>
          <Paper elevation={1}>
            <Typography variant="subtitle1">CHAPTER II <br /> OBLIGATIONS OF ECONOMIC OPERATORS</Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <CH02_ECONOMIC_OPERATORS />
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={8} style={{ maxHeight: '95vh', overflow: 'auto' }}>
          <Paper elevation={1}>
            <Typography variant="subtitle1">
              CHAPTER III <br /> CONFORMITY OF PRODUCTS WITHIN THE SCOPE OF THIS REGULATION
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <CH03_CONFORMITY_PRODUCTS />
            </Typography>
            <Typography variant="subtitle1">
              CHAPTER IV <br /> CONFORMITY ASSESSMENT
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <CH04_CONFORMITY_ASSESSMENT />
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={9} style={{ maxHeight: '95vh', overflow: 'auto' }}>
          <Paper elevation={1}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              <Typography variant="subtitle1">
                CHAPTER V <br /> NOTIFICATION OF CONFORMITY ASSESSMENT BODIES
              </Typography>
              <Typography variant="subtitle2">since 14 January 2024</Typography>
            </Stack>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <CH05_NOTIFICATION_ASSESSMENT_BODIES />
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={10} style={{ maxHeight: '95vh', overflow: 'auto' }}>
          <Paper elevation={1}>
            <Typography variant="subtitle1"> CHAPTER VI <br /> UNION MARKET SURVEILLANCE AND UNION SAFEGUARD PROCEDURES
            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <CH06_UNION_SAFEGUARD />
            </Typography>
            <Typography variant="subtitle1">
              CHAPTER VII <br /> DELEGATED POWERS AND COMMITTEE PROCEDURE


            </Typography>
            <Typography variant="body2" sx={{ p: 1 }} component="div">
              <CH07_DELEGATED_POWERS />
            </Typography>
          </Paper>
        </TabPanel>
      </Grid>
    </Grid>
  );
}

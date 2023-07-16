/* eslint-disable import/no-unresolved */
import Page from '@/components/Page';
import { AnnexIII } from '@/sections/@dashboard/MPR/ANNEX/AnnexIII';
import ControlledAccordions from '@/sections/@dashboard/MPR/ANNEX/Three';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useState } from 'react';

const categories = []
AnnexIII.forEach(item => categories.push(...item.category))
// console.log("🚀 ~ file: index.jsx:21 ~ categories:", categories)



const MPRcategories = ['All', ...(new Set(categories))];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('All');

  const [npdDatas, setMPRDatas] = useState(AnnexIII);

  const [expanded, setExpanded] = useState(false);

  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  function handleMPRByCategory(e) {
    let selectedCategory = e.target.value;
    setActiveCategory(selectedCategory);

    selectedCategory !== 'All'
      ? setMPRDatas(
          AnnexIII.filter((item) => item.category === selectedCategory || item.category.includes(selectedCategory))
          // { return item.category === selectedCategory || item.category.includes(selectedCategory); })
        )
      : setMPRDatas(AnnexIII);
  }

  return (
    <>
      <Page title="Machinery and Related Product Regulation">
        <Grid container sx={{ p: 2 }}>
        
          <Grid item xs={2}>
            Table Of Contents
          </Grid>
          <Grid item xs={10} >
            <Box>
            <ToggleButtonGroup value={activeCategory} exclusive onChange={handleMPRByCategory}>
              {MPRcategories.map((category, index) => 
                  <ToggleButton key={category} value={category} onClick={handleMPRByCategory}>
                    {category}
                  </ToggleButton>
              )}
            </ToggleButtonGroup>
            </Box>
            <Box style={{ maxHeight: '85vh', overflow: 'auto' }}>

            
            {/* {npdDatas.map((tab) => <Box key={tab.id}>{tab.component}</Box>)} */}
            {npdDatas.map((item) => (
              <Paper elevation={1} key={item.id}>
                <Typography variant="subtitle1">{item.title} </Typography>

                <Typography variant="body2" sx={{ p: 1 }} component="div">
                  {item.component}
                </Typography>
                {item.history &&
                <Accordion expanded={expanded === item.id} onChange={handleAccordion(item.id)} >
                  <AccordionSummary
                    sx={{
                      width: 300,
                      height: 30,
                      color: '#000FFF',
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant='body2'>Change History</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ p: 1 }} component="div">
                      {item.history}
                    </Typography>
                  </AccordionDetails>
                </Accordion>}
              </Paper>
            ))}
            </Box>
            {/* <ControlledAccordions /> */}
          </Grid>
        </Grid>
      </Page>
    </>
  );
}

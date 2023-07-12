/* eslint-disable import/no-unresolved */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper, HtmlTooltip, Box } from '@mui/material';
import { Fragment } from 'react';
import { AnnexIII } from './AnnexIII';
import {D1e695441Starting} from './d1e695Starting'

export default function ControlledAccordions() {
  return (
    <div>
      {/* <Paper elevation={1}>
        <Typography variant="subtitle1"> PART A Definitions </Typography>
        <Typography variant="subtitle2"> For the purposes of this Annex, the following definitions apply: </Typography>

        <Typography variant="body2">
          <Box sx={{ p: 1 }}>
            (a) ‘hazard’ means a potential source of injury or damage to health;
            <br />
            (b) ‘danger zone’ means any zone within and/or around machinery or a related product in which a person is
            subject to a risk to his or her health or safety;
            <br />
            (c) ‘exposed person’ means any person wholly or partially in a danger zone;
            <br />
            (d) ‘operator’ means the person or persons installing, operating, adjusting, maintaining, cleaning,
            repairing or moving machinery or a related product;
            <br />
            (e) ‘risk’ means a combination of the probability and the degree of an injury or damage to health that can
            arise in a hazardous situation;
            <br />
            (f) ‘guard’ means a part of machinery or a related product used specifically to provide protection by means
            of a physical barrier;
            <br />
            (g) ‘protective device’ means a device (other than a guard) which reduces the risk, either alone or in
            conjunction with a guard;
            <br />
            (h) ‘intended use’ means the use of machinery or a related product in accordance with the information
            provided in the instructions for use;
            <br />
            (i) ‘reasonably foreseeable misuse’ means the use of machinery or a related product in a way not intended in
            the instructions for use, but which may result from readily predictable human behaviour.
          </Box>
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>🕓🕓</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Detail
          </AccordionDetails>
        </Accordion>
      </Paper> */}

      

      {AnnexIII.map((tab) => <Box key={tab.id}>{tab.component}</Box>)}
    </div>
  );
}

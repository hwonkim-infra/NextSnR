import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

export const D1e695Starting = () => (
  <Paper elevation={1}>
    <Typography variant="subtitle1"> 1.2.3. Starting </Typography>

    <Typography variant="body2" component={"Box"}>
      <Box sx={{ p: 1 }}>
        <p>
          It shall be possible to start the machinery or related product only by voluntary actuation of a control device
          provided for the purpose.
        </p>
        <p>The same requirement applies:</p>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
          <colgroup>
            <col width="4%" />
            <col width="96%" />
          </colgroup>
          <tbody>
            <tr>
              <td valign="top">
                <p>(a)</p>
              </td>
              <td valign="top">
                <p>when restarting the machinery or related product after a stoppage, whatever the cause;</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
          <colgroup>
            <col width="4%" />
            <col width="96%" />
          </colgroup>
          <tbody>
            <tr>
              <td valign="top">
                <p>(b)</p>
              </td>
              <td valign="top">
                <p>when effecting a significant change in the operating conditions.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          However, the restarting of the machinery or related product or a change in operating conditions may be
          effected by voluntary actuation of a device other than the control device provided for the purpose, on
          condition that this does not lead to a hazardous situation.
        </p>
        <p>
          For the machinery or related product functioning in automatic mode, the starting of the machinery or related
          product, restarting after a stoppage, or a change in operating conditions may be possible without
          intervention, provided this does not lead to a hazardous situation.
        </p>
        <p>
          Where the machinery or related product has several starting control devices and the operators can therefore
          put each other in danger, additional devices shall be fitted to rule out such risks. If safety requires that
          starting and/or stopping shall be performed in a specific sequence, there shall be devices that ensure that
          these operations are performed in the correct order.
        </p>
      </Box>
    </Typography>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>🕓🕓</Typography>
      </AccordionSummary>
      <AccordionDetails>Detail</AccordionDetails>
    </Accordion>
  </Paper>
);

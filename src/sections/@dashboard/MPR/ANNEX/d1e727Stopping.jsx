import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Modal, Paper, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};


export default function D1e727Stopping  ()  
{
  const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Paper elevation={1}>
    
    <Stack direction={"row"} justifyContent={"space-between"}>
    <Typography variant="subtitle1"> 1.2.4. Stopping </Typography>
    <IconButton onClick={handleOpen}>
    <WorkHistoryOutlinedIcon/>

    </IconButton>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Changes
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <table>
<tbody>
  <tr>
    <td>For cable-less control, an automatic stop must be activated when correct control signals are not received, including loss of communication.</td>
    <td>For wireless control, a failure of the communication or connection or a faulty connection shall not lead to a hazardous situation.</td>
    <td>For wireless control, a failure of the communication or connection or a faulty connection shall not lead to a hazardous situation.</td>
  </tr>
</tbody>
</table>
          </Typography>
        </Box>
      </Modal>
    

    </Stack>
    <Typography variant="subtitle1"> 1.2.4.1.   Normal stop </Typography>

    <Typography variant="body2" sx={{p:1}}>
      
      The machinery or related product shall be fitted with a control device whereby the machinery can be brought safely to a complete stop.
            Each workstation shall be fitted with a control device to stop some or all of the functions of the machinery or related product, depending on the existing hazards, so that the machinery or related product is rendered safe.
            The machinery or related product’s stop control shall have priority over the start controls.
            Once the machinery or related product or its hazardous functions have stopped, the energy supply to the actuators concerned shall be cut off.
            
      
    </Typography>

    
  </Paper>

  )
    
  }

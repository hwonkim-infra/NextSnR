import {
  Box,
  CircularProgress,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  colors,
} from "@mui/material";
import React from "react";

export default function NPDViewFrame({ currentNPD }) {
  if (!currentNPD) return <CircularProgress />;
  const datas = [
    {
      signal: "red",
      age: 30,
    },
    {
      signal: "green",
      age: 25,
    },
  ];
  return (
    <div>
      <Grid container spacing={2}>
        <Stack direction="row">
          <Box sx={{ width: 30, height: 30, backgroundColor: "red" }}>
            <Typography variant="h6" color="white" align="center">
              R
            </Typography>
          </Box>
          <Typography variant="h6" align="left">
            Stair
          </Typography>
        </Stack>
       
        <Grid item xs={4}>
          {datas.map((data) =>  (<>
            
            
          <ListItem>
            <ListItemIcon>
              <Box sx={{ width: 30, height: 30  }} backgroundColor={data.signal}>
                <Typography variant="h6" color="white" align="center">
                {data.signal[0].toUpperCase()}
                </Typography>
              </Box>
            </ListItemIcon>
            <ListItemText primary="This is a list item with a red-colored square."></ListItemText>

          </ListItem>
          </>)
          )}
          <ListItem>

            <ListItemIcon>
              <Box sx={{ width: 25, height: 25, backgroundColor: "green" }}>
                <Typography variant="h6" color="white" align="center">
                  G
                </Typography>
              </Box>
            </ListItemIcon>
            <ListItemText>Green Item</ListItemText>
          </ListItem>
        </Grid>
      </Grid>
    </div>
  );
}

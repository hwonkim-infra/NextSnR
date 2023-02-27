// @mui
import {
  Container,
  Grid,
  Stack,
  Button,
  Card,
  CardHeader,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  td,
  TableBody,
  TableCell,
} from "@mui/material";
import axios from "axios";

import MapChart from "@/sections/@dashboard/analytics/MapChart";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import parse from "html-react-parser";

// ----------------------------------------------------------------------

export default function WorldMapWidget({ geometries }) {
  const [content, setContent] = useState("");



  return (
    <Grid container spacing={3}  >
                

      <Grid item xs={8}>
        <Card>
        <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
          >

          <CardHeader
            title="Global Regulation map"
            subheader="Interactive chart"
            href="/dashboard/PSC/Global"
            />
          <Button
                variant="outlined"
                // startIcon={<QueueIcon />}
                href="/dashboard/PSC/Global"
                >
                WorldData
              </Button>
                </Stack>

          <MapChart setTooltipContent={setContent} geometries={geometries} />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ mt: 10 }}>
          <Tooltip id="my-tooltip"   event="focus" onClick={() => ( push("/dashboard/PSC/Global")
                        )}>
            <>
              <TableContainer >
                <Table >
                  <TableHead
                    sx={{
                      borderBottom: (theme) =>
                        `solid 1px ${theme.palette.divider}`,
                      "& th": { backgroundColor: "transparent" },
                    }}
                  >
                    <TableRow>
                      <TableCell align="left" colSpan="2">
                        <Typography
                          variant="h5"
                          sx={{ backgroundColor: "#e6e6e6" }}
                        >
                          {content[0]}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <td align="left">
                        <Typography variant="h7">Emission</Typography>
                      </td>
                      <td align="left">
                        <Typography variant="body2" >
                          {content[1]}
                        </Typography>
                      </td>
                    </TableRow>
                    <TableRow>
                      <td align="left">
                        <Typography variant="h7">Noise</Typography>
                      </td>
                      <td align="left">
                        <Typography variant="body2" >
                          {content[2]}
                        </Typography>
                      </td>
                    </TableRow>
                    <TableRow>
                      <td align="left">
                        <Typography variant="h7">Safety</Typography>
                      </td>
                      <td align="left">
                        <Typography variant="body2" >
                          {content[3]}
                        </Typography>
                      </td>
                    </TableRow>
                    <TableRow>
                      <td align="left">
                        <Typography variant="h7">Type Approval</Typography>
                      </td>
                      <td align="left">
                        <Typography variant="body2" >
                          {content[4]}
                        </Typography>
                      </td>
                    </TableRow>
                    
                    
                  </TableBody>
                </Table>
              </TableContainer>

            </>
          </Tooltip>
        </Card>
      </Grid>
    </Grid>
  );
}

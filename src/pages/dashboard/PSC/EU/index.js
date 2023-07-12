import axios from "axios";
import { useState } from "react";

import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";

// components
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Iconify from "@/components/Iconify";
import Layout from "@/layouts";

// DataGrid
import PSCDetailPrev from "@/components/PSC/PSCDetailPrev";
import Page from "@/components/Page";
import { DataGrid } from "@mui/x-data-grid";


PSCList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function PSCList({ PSCs = [] }) {
  const router = useRouter();
  const [currentPSC, setCurrentPSC] = useState({});

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "ITEM", headerName: "ITEM", width: 200 },
    { field: "reference", headerName: "reference", width: 200 },
    {
      field: "requirements",
      headerName: "requirements",
      flex: 1,
      minWidth: 400,
    },
  ];
  if (!PSCs) return <CircularProgress />;

  const rows = PSCs.map((PSC) => {
    return {
      id: PSC._id,
      ITEM: PSC.item,
      reference: PSC.reference,
      requirements: PSC.requirements,
      ...PSC,
    };
  });

  return (
    <Page title="PSC List">
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ height: 900 }}>
          <HeaderBreadcrumbs
            heading="Product Safety Compliance"
            links={[{ name: "PVC" }, { name: "EU" }]}
            action={
              <NextLink href="EU/new">
                <Button
                  variant="contained"
                  startIcon={<Iconify icon={"eva:plus-fill"} />}
                >
                  New File
                </Button>
              </NextLink>
            }
          />

          <DataGrid
            rows={rows}
            columns={columns}
            disableMultipleSelection={true}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRowData = rows.filter((row) =>
                selectedIDs.has(row.id.toString())
              );
              setCurrentPSC(selectedRowData[0]);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          {currentPSC._id && (
            <>
              <Paper elevation={2} style={{ padding: "5px", m: 1 }}>
                <PSCDetailPrev currentPSC={currentPSC} />
              </Paper>
              <Box>
                 
                <Button
          sx={{ m: 1 }}
          variant="outlined"
          startIcon={<EditIcon />}
          href={"/dashboard/PSC/EU/" + currentPSC?.id + "/edit"}
        >
          Edit
        </Button>
              </Box>

              <Paper elevation={2} style={{ padding: "5px" }}>
                {/* <TCFList currentID={currentPSC._id} /> */}
              </Paper>
            </>
          )}

          
        </Grid>
      </Grid>
    </Page>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://127.0.0.1:3000/api/PSC/GuideBook/");
  const PSCs = response.data;

  return {
    props: {
      PSCs,
    },
  };
}

import { useState } from "react";
import axios from "axios";

import EditIcon from '@mui/icons-material/Edit';
import PostAddIcon from '@mui/icons-material/PostAdd';
import {
  Button,
  Box,
  Grid,
  Stack,
  CircularProgress,
  IconButton,
  Paper,
} from "@mui/material";
import { useRouter } from "next/router";
import NextLink from "next/link";

// components
import Layout from "@/layouts";
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Iconify from "@/components/Iconify";

// DataGrid
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
// import TCFDetailPrev from "@/components/TCF/TCFDetailPrev";
import Page from "@/components/Page";
// import SpecSheet from "@/components/KRTAForms/previews/SpecSheet";

// Preview

TCFList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function TCFList({ PSCs = [], TCFs = JSON.parse(JSON.stringify(PSCs)) }) {
  // TCFs = JSON.parse(JSON.stringify(PSCs));
  console.log("TCFs: ",TCFs);


  const router = useRouter();
  const [currentTCF, setCurrentTCF] = useState({});

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
    {
      field: "Edit",
      headerName: "EDIT",
      width: 50,
      renderCell: () => (
        <IconButton href={"TCF/" + currentTCF?.id + "/edit"}>
          <EditIcon />
        </IconButton>
      ),
    },
  ];
  if (!TCFs) return <CircularProgress />;

  const rows = TCFs.map((TCF) => {
    return {
      id: TCF._id,
      ITEM: TCF.item,
      reference: TCF.reference,
      requirements: TCF.requirements,
      ...TCF,
    };
  });

  return (
    <Page title="TCF List">
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
              setCurrentTCF(selectedRowData[0]);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          {currentTCF._id && (
            <>
              <Paper elevation={2} style={{ padding: "5px", m: 1 }}>
              </Paper>
              <Box>

                <Button
          sx={{ m: 1 }}
          variant="outlined"
          startIcon={<EditIcon />}
          href={"/dashboard/TCF/EU/" + currentTCF?.id + "/edit"}
        >
          Edit
        </Button>
              </Box>

              <Paper elevation={2} style={{ padding: "5px" }}>
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

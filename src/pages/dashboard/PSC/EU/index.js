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
import PSCDetailPrev from "@/components/PSC/PSCDetailPrev";
// import SpecSheet from "@/components/KRTAForms/previews/SpecSheet";

// Preview

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
    {
      field: "Edit",
      headerName: "EDIT",
      width: 50,
      renderCell: () => (
        <IconButton href={"PSC/" + currentPSC?.id + "/edit"}>
          <EditIcon />
        </IconButton>
      ),
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
    <div>
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
                  variant="compromised"
                  startIcon={<PostAddIcon />}
                  psc_id={currentPSC}
                >
                  {/* <Link
                to={{
                  pathname: `/PSC/` + currentPSC._id + '/newTCF',
                }}
              >
                Add TCF
              </Link> */}
                </Button>
              </Box>

              <Paper elevation={2} style={{ padding: "5px" }}>
                {/* <TCFList currentID={currentPSC._id} /> */}
              </Paper>
            </>
          )}

          {/* <SpecSheet values={currentPSC}></SpecSheet> */}
        </Grid>
      </Grid>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://127.0.0.1:3000/api/PSC/EU/");
  const PSCs = response.data;

  return {
    props: {
      PSCs,
    },
  };
}

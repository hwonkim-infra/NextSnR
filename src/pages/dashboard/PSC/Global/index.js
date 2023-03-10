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
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from "@mui/x-data-grid";
import GLOBALDetailPrev from "@/sections/@dashboard/PSC/GLOBALDetailPrev";
import Page from "@/components/Page";

// Preview

GLOBALList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function GLOBALList({ GLOBALs = [] }) {
  const router = useRouter();
  const [currentGLOBAL, setCurrentGLOBAL] = useState({});

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    // { field: "numbers", headerName: "numbers", width: 70 },
    { field: "name", headerName: "국가", width: 200 },
    { field: "emission", headerName: "emission", width: 200 },
    {
      field: "safety",
      headerName: "safety",
      // flex: 1,
      minWidth: 200,
    },
    { field: "remarks", headerName: "remarks", width: 200 },
    { field: "recent", headerName: "recent", width: 20 },
    /* {
      field: "Edit",
      headerName: "EDIT",
      width: 50,
      renderCell: () => (
        <IconButton href={"Global/" + currentGLOBAL?._id + "/edit"}>
          <EditIcon />
        </IconButton>
      ),
    }, */
  ];
  if (!GLOBALs) return <CircularProgress />;

  const rows = GLOBALs.map((GLOBAL) => {
    return {
      id: GLOBAL._id,
      numbers: GLOBAL.numbers,
      name: GLOBAL.properties.name,
      emission: GLOBAL.properties.emission,
      safety: GLOBAL.properties.safety,
      typeApproval: GLOBAL.properties.typeApproval,
      remarks: GLOBAL.properties.remarks,
      recent: GLOBAL.updatedAt,
      ...GLOBAL,
    };
  });

  return (
    <Page title="WorldData">
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ height: 900 }}>
          <HeaderBreadcrumbs
            heading="Global Regulation Map"
            // links={[{ name: "PVC" }, { name: "EU" }]}
            /* action={
              <NextLink href="EU/new">
                <Button
                  variant="contained"
                  startIcon={<Iconify icon={"eva:plus-fill"} />}
                >
                  New File
                </Button>
              </NextLink> 
            }*/
          />

          <DataGrid
            rows={rows}
            columns={columns}
            components={{ Toolbar: GridToolbar }} 
            initialState={{
              sorting: {
                sortModel: [{ field: 'recent', sort: 'desc' }],
              },
            }}
            disableMultipleSelection={true}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRowData = rows.filter((row) =>
                selectedIDs.has(row.id.toString())
              );
              setCurrentGLOBAL(selectedRowData[0]);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          {currentGLOBAL._id && (
            <>
              <Paper elevation={2} style={{ padding: "5px", m: 1 }}>
                <GLOBALDetailPrev currentReport={currentGLOBAL} />
              </Paper>
              

             
            </>
          )}

        </Grid>
      </Grid>
    </Page>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://127.0.0.1:3000/api/PSC/Global");
  const GLOBALs = response.data;

  return {
    props: {
      GLOBALs,
    },
  };
}

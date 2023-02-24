import { useState } from "react";

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
// import GLOBALDetailPrev from "@/components/GLOBAL/GLOBALDetailPrev";
// import SpecSheet from "@/components/KRTAForms/previews/SpecSheet";

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
    {
      field: "Edit",
      headerName: "EDIT",
      width: 50,
      renderCell: () => (
        <IconButton href={"Global/" + currentGLOBAL?._id + "/edit"}>
          <EditIcon />
        </IconButton>
      ),
    },
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
      ...GLOBAL,
    };
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ height: 900 }}>
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
                sortModel: [{ field: 'numbers', sort: 'asc' }],
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
        <Grid item xs={4}>
          {currentGLOBAL._id && (
            <>
              <Paper elevation={2} style={{ padding: "5px", m: 1 }}>
                {/* <GLOBALDetailPrev currentGLOBAL={currentGLOBAL} /> */}
              </Paper>
              <Box>
                <Button
                  variant="compromised"
                  startIcon={<PostAddIcon />}
                  psc_id={currentGLOBAL}
                >

                </Button>
              </Box>

              <Paper elevation={2} style={{ padding: "5px" }}>
                {/* <TCFList currentID={currentGLOBAL._id} /> */}
              </Paper>
            </>
          )}

        </Grid>
      </Grid>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/PSC/Global");
  const GLOBALs = await response.json();

  return {
    props: {
      GLOBALs,
    },
  };
}

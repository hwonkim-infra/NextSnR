import axios from "axios";
import { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, CircularProgress, Grid, Paper } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";

// components
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Iconify from "@/components/Iconify";
import Layout from "@/layouts";

// DataGrid
// import NPDitemDetailPrev from "@/components/NPDitem/NPDitemDetailPrev";
import Page from "@/components/Page";
import { DataGrid } from "@mui/x-data-grid";

NPDitemList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function NPDitemList({ NPDitems = [] }) {
  const router = useRouter();
  const [currentNPDitem, setCurrentNPDitem] = useState({});

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "ITEM", headerName: "ITEM", width: 200 },
    { field: "group", headerName: "Group", width: 200 },
    { field: "npdStage", headerName: "NPDstage", width: 200 },
    {
      field: "markets",
      headerName: "Target",
      flex: 1,
      minWidth: 400,
    },
  ];
  if (!NPDitems) return <CircularProgress />;

  const rows = NPDitems.map((NPDitem) => {
    return {
      id: NPDitem._id,
      ITEM: NPDitem.itemName,
      npdStage: NPDitem.npdStage,
      group: NPDitem.group,
      ...NPDitem,
    };
  });

  return (
    <Page title="NPDitem List">
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ height: 900 }}>
          <HeaderBreadcrumbs
            heading="NPD check Items"
            links={[{ name: "PVC" }, { name: "EU" }]}
            action={
              <NextLink href="NPDitems/new">
                <Button
                  variant="contained"
                  startIcon={<Iconify icon={"eva:plus-fill"} />}
                >
                  New Item
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
              setCurrentNPDitem(selectedRowData[0]);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          {currentNPDitem._id && (
            <>
              <Paper elevation={2} style={{ padding: "5px", m: 1 }}>
                {/* <NPDitemDetailPrev currentNPDitem={currentNPDitem} /> */}
              </Paper>
              <Box>
                <Button
                  sx={{ m: 1 }}
                  variant="outlined"
                  startIcon={<EditIcon />}
                  href={
                    "/dashboard/PSC/NPDitems/" + currentNPDitem?.id + "/edit"
                  }
                >
                  Edit
                </Button>
              </Box>

              <Paper elevation={2} style={{ padding: "5px" }}>
                {/* <TCFList currentID={currentNPDitem._id} /> */}
              </Paper>
            </>
          )}
        </Grid>
      </Grid>
    </Page>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://127.0.0.1:3000/api/PSC/NPDItems/");
  const NPDitems = response.data.data;

  return {
    props: {
      NPDitems,
    },
  };
}

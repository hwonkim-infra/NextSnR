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
import Page from "@/components/Page";
import { DataGrid } from "@mui/x-data-grid";
import OptionPSCDetailPrev from "@/components/PSC/OptionPSCDetailPrev";


OptionPSCList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function OptionPSCList({ OptionPSCs = [] }) {
  if (!OptionPSCs) return <CircularProgress />;
  const router = useRouter();
  const [currentOptionPSC, setCurrentOptionPSC] = useState({});

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "optionName", headerName: "옵션 이름 ", width: 200 },
    { field: "code", headerName: "code", width: 100 },
    {
      field: "summary",
      headerName: "요약",
      flex: 1,
      minWidth: 400,
    },
  ];

  const rows = OptionPSCs.map((OptionPSC) => {
    return {
      id: OptionPSC._id,
      optionName: OptionPSC.optionName,
      code: OptionPSC.code,
      // requirements: OptionPSC.requirements,
      ...OptionPSC,
    };
  });

  return (
    <Page title="OptionPSC List">
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{ height: 900 }}>
          <HeaderBreadcrumbs
            heading="PSC: Option Evaluation"
            links={[{ name: "PSC" }, { name: "Options" }]}
            action={
              <NextLink href="OptionPSC/new">
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
              setCurrentOptionPSC(selectedRowData[0]);
            }}
          />
        </Grid>
        <Grid item xs={8}>
          {currentOptionPSC.id && (
            <>
              <Paper elevation={2} style={{ padding: "5px", m: 1 }}>
                <OptionPSCDetailPrev currentOptionPSC={currentOptionPSC} />
              </Paper>
              <Box>
                 
                <Button
          sx={{ m: 1 }}
          variant="outlined"
          startIcon={<EditIcon />}
          href={"/dashboard/PSC/OptionPSC/" + currentOptionPSC?.id + "/edit"}
        >
          Edit
        </Button>
              </Box>

              <Paper elevation={2} style={{ padding: "5px" }}>
                {/* <TCFList currentID={currentOptionPSC._id} /> */}
              </Paper>
            </>
          )}

          
        </Grid>
      </Grid>
    </Page>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://127.0.0.1:3000/api/PSC/OptionPSC");
  const {data} = response.data;
  const OptionPSCs = data;

  return {
    props: {
      OptionPSCs,
    },
  };
}

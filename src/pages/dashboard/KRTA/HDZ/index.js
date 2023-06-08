import { useState } from "react";
import { Button, Box, Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";
import NextLink from "next/link";
import axios from "axios";

// components
import Layout from "@/layouts";
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Iconify from "@/components/Iconify";
import Page from "@/components/Page";

// DataGrid
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import SpecSheet from "@/components/KRTAForms/previews/SpecSheet";
import CertPrev from "@/components/KRTAForms/previews/CertPrev";
import SpecSheetDZ from "@/components/KRTAForms/previews/SpecSheetDZ";

// Preview

HDZList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function HDZList({ HDZs = [] }) {
  const router = useRouter();
  const [currentHDZ, setCurrentHDZ] = useState({});

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "model_name", headerName: "기종명", width: 110 },
    { field: "registration_no", headerName: "형식", width: 70 },
    { field: "weight", headerName: "중량", width: 70 },
    { field: "height", headerName: "높이", width: 60 },
    { field: "width", headerName: "너비", width: 60 },
    { field: "shoe", headerName: "shoe", width: 60 },
    { field: "counterWeight", headerName: "CW", width: 50 },
    { field: "updated", headerName: "수정", width: 60 },
    { field: "changeModel", headerName: "형식변경", width: 120 },
    { field: "result", headerName: "완료", width: 50 },
  ];

  const rows = HDZs.map((HDZ) => {
    return {
      id: HDZ._id,
      model_name: HDZ.model_name,
      registration_no: HDZ.registration_no,
      weight: HDZ.operating_weight,
      height: HDZ.overall_height,
      width: HDZ.overall_width,
      updated: new Date(HDZ.updatedAt).toLocaleDateString("Ko-kr"),
      shoe: HDZ.undercarriage?.shoe_width,
      changeModel: HDZ.ChangeModel ? HDZ.ECN + " 변경" : " ",
      counterWeight: HDZ.COG?.counterWeight_weight / 1000 || "",
      result: HDZ.approval_result ? "완료" : " ",
      ...HDZ,
    };
  });

  return (
    <Page title="형식승인: HDZ">

      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ height: 900 }}>
          <HeaderBreadcrumbs
            heading="Crawler Dozer"
            links={[
              { name: "Dashboard"  },
              { name: "형식승인: HDZ"  },
            ]}
            action={
              <NextLink href="/dashboard/KRTA/HDZ/new">
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
              setCurrentHDZ(selectedRowData[0]);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Stack
            direction="row"
            spacing={3}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box component="span" sx={{ fontSize: "h2.fontSize" }}>
              {currentHDZ?.model_name}
            </Box>
            <Box component="span" sx={{ p: 1, border: "1px" }}>
              {currentHDZ?.serial_no}
            </Box>

            {currentHDZ.model_name && (
              <Box>
                <Button
                  sx={{ m: 1 }}
                  variant="outlined"
                  href={"HDZ/" + currentHDZ?.id + "/edit"}
                >
                  수정
                </Button>
                <Button
                  sx={{ m: 1 }}
                  variant="contained"
                  // startIcon={<PrintIcon />}
                  href={"HDZ/" + currentHDZ?.id + "/print"}
                  target="_blank"
                >
                  출력
                </Button>
                <Button
                  sx={{ m: 1 }}
                  variant="text"
                  // startIcon={<TextSnippet />}
                  href={"HDZ/" + currentHDZ?.id + "/specECR"}
                  target="_blank"
                >
                  제원표
                </Button>
              </Box>
            )}
          </Stack>

          {!currentHDZ.ChangeModel && currentHDZ.model_name && (
            <Box>
              <Button
                variant="outlined"
                // startIcon={<QueueIcon />}
                href={"HDZ/" + currentHDZ?.id + "/addChange"}
              >
                변경형식
              </Button>
            </Box>
          )}

          <SpecSheetDZ values={currentHDZ}></SpecSheetDZ>
              <CertPrev values={currentHDZ}></CertPrev>
        </Grid>
      </Grid>
    </Page>

  );
}


export async function getServerSideProps() {
  const res = await axios.get("http://127.0.0.1:3000/api/HDZ/");
  const HDZs = res.data;
  return {
    props: { HDZs }, 
  };
}

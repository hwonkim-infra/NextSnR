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
import SpecSheet from "@/components/KRTAForms/previews/SpecSheetWL";
import CertPrev from "@/components/KRTAForms/previews/CertPrev";

// Preview

WLDList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function WLDList({ WLDs = [] }) {
  const router = useRouter();
  const [currentWLD, setCurrentWLD] = useState({});

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "model_name", headerName: "기종명", width: 110 },
    { field: "registration_no", headerName: "형식", width: 70 },
    { field: "weight", headerName: "중량", width: 70 },
    { field: "boom", headerName: "Boom", width: 60 },
    { field: "bucket", headerName: "버켓", width: 60 },
    { field: "height", headerName: "높이", width: 60 },
    { field: "width", headerName: "너비", width: 60 },
    { field: "tire", headerName: "타이어", width: 130 },
    { field: "counterWeight", headerName: "CW", width: 50 },
    { field: "updated", headerName: "수정", width: 60 },
    { field: "changeModel", headerName: "형식변경", width: 120 },
    { field: "result", headerName: "확인검사", width: 50 },
  ];

  const rows = WLDs.map((WLD) => {
    return {
      id: WLD._id,
      model_name: WLD.model_name,
      registration_no: WLD.registration_no,
      weight: WLD.operating_weight,
      boom: WLD.attachments?.boom_length,
      bucket: WLD.attachments?.bucket_heap,
      height: WLD.overall_height,
      width: WLD.overall_width,
      tire: WLD.undercarriage?.tire_frontAxle,
      updated: new Date(WLD.updatedAt).toLocaleDateString("Ko-kr"),
      changeModel: WLD.ChangeModel ? WLD.ECN + " 변경" : " ",
      counterWeight: WLD.COG?.counterWeight_weight / 1000 || "",
      result: WLD.approval_result ? "완료" : " ",
      ...WLD,
    };
  });

  return (
    <Page title="형식승인: WLD">
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ height: 900 }}>
          <HeaderBreadcrumbs
            heading="Wheeled Loader"
            links={[{ name: "형식승인" }, { name: "WLD" }]}
            action={
              <NextLink href="WLD/new">
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
              setCurrentWLD(selectedRowData[0]);
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
              {currentWLD?.model_name}
            </Box>
            <Box component="span" sx={{ p: 1, border: "1px" }}>
              {currentWLD?.serial_no}
            </Box>

            {currentWLD.model_name && (
              <Box>
                <Button
                  sx={{ m: 1 }}
                  variant="outlined"
                  href={"WLD/" + currentWLD?.id + "/edit"}
                >
                  수정
                </Button>
                <Button
                  sx={{ m: 1 }}
                  variant="contained"
                  // startIcon={<PrintIcon />}
                  href={"WLD/" + currentWLD?.id + "/print"}
                  target="_blank"
                >
                  출력
                </Button>
                <Button
                  sx={{ m: 1 }}
                  variant="text"
                  // startIcon={<TextSnippet />}
                  href={"WLD/" + currentWLD?.id + "/specECR"}
                  target="_blank"
                >
                  제원표
                </Button>
              </Box>
            )}
          </Stack>

          {!currentWLD.ChangeModel && currentWLD.model_name && (
            <Box>
              <Button
                variant="outlined"
                // startIcon={<QueueIcon />}
                href={"WLD/" + currentWLD?.id + "/addChange"}
              >
                {" "}
                변경형식
              </Button>
            </Box>
          )}

          <SpecSheet values={currentWLD}></SpecSheet>
              <CertPrev values={currentWLD}></CertPrev>
        </Grid>
      </Grid>
    </Page>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://127.0.0.1:3000/api/WLD/");
  const WLDs = res.data;
  return {
    props: { WLDs }, // will be passed to the page component as props
  };
}

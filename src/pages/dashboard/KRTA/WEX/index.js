import { useState } from "react";
import { Button, Box, Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";
import NextLink from "next/link";
import axios from "axios";

// components
import Layout from "@/layouts";
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Iconify from "@/components/Iconify";

// DataGrid
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import SpecSheet from "@/components/KRTAForms/previews/SpecSheetWX";
import CertPrev from "@/components/KRTAForms/previews/CertPrev";

// Preview

WEXList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function WEXList({ WEXs = [] }) {
  const router = useRouter();
  const [currentWEX, setCurrentWEX] = useState({});

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "model_name", headerName: "기종명", width: 110 },
    { field: "registration_no", headerName: "형식", width: 70 },
    { field: "weight", headerName: "중량", width: 70 },
    { field: "boom", headerName: "Boom", width: 60 },
    { field: "arm", headerName: "Arm", width: 60 },
    { field: "bucket", headerName: "버켓", width: 60 },
    { field: "height", headerName: "높이", width: 60 },
    { field: "width", headerName: "너비", width: 60 },
    { field: "counterWeight", headerName: "CW", width: 50 },
    { field: "updated", headerName: "수정", width: 60 },
    { field: "changeModel", headerName: "형식변경", width: 120 },
    { field: "result", headerName: "완료", width: 50 },
  ];

  const rows = WEXs.map((WEX) => {
    return {
      id: WEX._id,
      model_name: WEX.model_name,
      registration_no: WEX.registration_no,
      weight: WEX.operating_weight,
      boom: WEX.attachments?.boom_length,
      arm: WEX.attachments?.arm_length,
      bucket: WEX.attachments?.bucket_heap,
      height: WEX.overall_height,
      width: WEX.overall_width,
      updated: new Date(WEX.updatedAt).toLocaleDateString("Ko-kr"),
      changeModel: WEX.ChangeModel ? WEX.ECN + " 변경" : " ",
      counterWeight: WEX.COG?.counterWeight_weight / 1000 || "",
      result: WEX.approval_result ? "완료" : " ",
      ...WEX,
    };
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ height: 900 }}>
          <HeaderBreadcrumbs
            heading="Wheeled Excavator"
            links={[{ name: "형식승인" }, { name: "WEX" }]}
            action={
              <NextLink href="WEX/new">
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
              setCurrentWEX(selectedRowData[0]);
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
              {currentWEX?.model_name}
            </Box>
            <Box component="span" sx={{ p: 1, border: "1px" }}>
              {currentWEX?.serial_no}
            </Box>

            {currentWEX.model_name && (
              <Box>
                <Button
                  sx={{ m: 1 }}
                  variant="outlined"
                  href={"WEX/" + currentWEX?.id + "/edit"}
                >
                  수정
                </Button>
                <Button
                  sx={{ m: 1 }}
                  variant="contained"
                  // startIcon={<PrintIcon />}
                  href={"WEX/" + currentWEX?.id + "/print"}
                  target="_blank"
                >
                  출력
                </Button>
                <Button
                  sx={{ m: 1 }}
                  variant="text"
                  // startIcon={<TextSnippet />}
                  href={"/WEX/specW/" + currentWEX?.id}
                  target="_blank"
                >
                  제원표
                </Button>
              </Box>
            )}
          </Stack>

          {!currentWEX.ChangeModel && currentWEX.model_name && (
            <Box>
              <Button
                variant="outlined"
                // startIcon={<QueueIcon />}
                href={"WEX/" + currentWEX?.id + "/addChange"}
              >
                {" "}
                변경형식
              </Button>
            </Box>
          )}

          <SpecSheet values={currentWEX}></SpecSheet>
              <CertPrev values={currentWEX}></CertPrev>
        </Grid>
      </Grid>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://127.0.0.1:3000/api/WEX/");
  const WEXs = res.data;
  return {
    props: { WEXs }, // will be passed to the page component as props
  };
}

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
// import NoiseCertiDetailPrev from "@/components/NoiseCerti/NoiseCertiDetailPrev";
import Page from "@/components/Page";
// import SpecSheet from "@/components/KRTAForms/previews/SpecSheet";

// Preview

NoiseCertiList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function NoiseCertiList({ NoiseCertis = [] }) {
  const router = useRouter();
  const [currentNoiseCerti, setCurrentNoiseCerti] = useState({});
  // console.log("🚀 ~ file: index.js:112 ~ getServerSideProps ~ NoiseCertis:", NoiseCertis)

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "certiNumber", headerName: "certiNumber", width: 160 },
    { field: "model_name", headerName: "model_name", width: 100 },
    {
      field: "Noise_Guaranteed",
      headerName: "Noise_Guaranteed",
      flex: 1,
      minWidth: 400,
    },
    /* {
      field: "Edit",
      headerName: "EDIT",
      width: 50,
      renderCell: () => (
        <IconButton href={"NoiseCerti/" + currentNoiseCerti?.id + "/edit"}>
          <EditIcon />
        </IconButton>
      ),
    }, */
  ];
  if (!NoiseCertis) return <CircularProgress />;

  let rowObject = [] 
  
  NoiseCertis.map(({models, certiNumber, _id }) => {
    let parentId = _id;
    models.forEach(({_id, model_name, Noise_Guaranteed}) => {
      let obj = {};
      
      obj.id = _id,
      obj.parentId = parentId,
      obj.certiNumber = certiNumber,
      obj.model_name = model_name;
      obj.Noise_Guaranteed = Noise_Guaranteed;
      rowObject.push(obj)
    })
    
    return {
      rowObject
  }});

  

  const rows = rowObject.map((data) => {
      console.log("🚀 ~ file: index.js:84 ~ NoiseCertis.map ~ rowObject:", rowObject)
    
    return {
      id: data.id,
      certiNumber: data.certiNumber,

      model_name: data.model_name,
      Noise_Guaranteed: data.Noise_Guaranteed,

  }});

  return (
    <Page title="NoiseCerti List">
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ height: 900 }}>
          <HeaderBreadcrumbs
            heading="Noise Certifications"
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
              setCurrentNoiseCerti(selectedRowData[0]);
            }}
          />
        </Grid>
        
      </Grid>
    </Page>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://127.0.0.1:3000/api/TCF/NoiseCerti");
  const NoiseCertis = response.data;

  return {
    props: {
      NoiseCertis,
    },
  };
}

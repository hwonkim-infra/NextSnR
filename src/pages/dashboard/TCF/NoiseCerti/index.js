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
import Page from "@/components/Page";

// Preview

NoiseCertiList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function NoiseCertiList({ NoiseCertis = [] }) {
  const router = useRouter();
  const [currentNoiseCerti, setCurrentNoiseCerti] = useState({});

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "certiNumber", headerName: "certiNumber", width: 160 },
    { field: "model_name", headerName: "model_name", width: 100 },
    { field: "Noise_Measured", headerName: "Measured", width: 60 },
    { field: "Noise_Guaranteed", headerName: "Guaranteed", width: 60 },
    { field: "Noise_Limit", headerName: "Limit", width: 60 },
    { field: "certiFactory", headerName: "Factory", width: 100 },
    { field: "TechnicalDoc", headerName: "Technical Doc", width: 200 },
    { field: "certiIssue", headerName: "certi Issue", width: 120 },
    { field: "certiExpire", headerName: "certi Expire", width: 120 },
    { field: "conformityAssessment", headerName: "conformity Assessment", width: 200 },
    { field: "Rated_Power", headerName: "Rated Power", width: 60 },
  ];
  if (!NoiseCertis) return <CircularProgress />;

  let rowObject = [] 
  
  NoiseCertis.map(({models, certiNumber, _id, certiFactory, conformityAssessment, certiIssue, certiExpire, certification }) => {
    let parentId = _id;
    
    models.forEach(({_id, model_name, TechnicalDoc, Noise_Measured, Noise_Guaranteed, Noise_Limit, Rated_Power,}) => {
      let obj = {};
      
      obj.id = _id,
      obj.parentId = parentId,
      obj.certiNumber = certiNumber,
      obj.certiFactory = certiFactory,
      obj.conformityAssessment = conformityAssessment,
      obj.certiIssue = certiIssue,
      obj.certiExpire = certiExpire,
      obj.certification = certification,

      obj.model_name = model_name;
      obj.TechnicalDoc = TechnicalDoc;
      obj.Noise_Measured = Noise_Measured;
      obj.Noise_Guaranteed = Noise_Guaranteed;
      obj.Noise_Limit = Noise_Limit;
      obj.Rated_Power = Rated_Power;
      rowObject.push(obj)
    })
    
    return {
      rowObject
  }});

  

  const rows = rowObject.map((data) => {
    
    return {
      id: data.id,
      parentId: data.parentId,
      certiNumber: data.certiNumber,

      model_name: data.model_name,
      
      ...data,

  }});

  return (
    <Page title="NoiseCerti List">
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ height: 900 }}>
          <HeaderBreadcrumbs
            heading="Noise Certifications"
            links={[{ name: "TCF" }, { name: "NoiseCerti" }]}
            action={
              <NextLink href="NoiseCerti/new">
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
              console.log(rows);
              setCurrentNoiseCerti(selectedRowData[0]);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          {currentNoiseCerti.parentId && (
            <>
              <Paper elevation={2} style={{ padding: "5px", m: 1 }}>
                {/* <PSCDetailPrev currentPSC={currentPSC} /> */}
                {/* {currentNoiseCerti?.parentId} */}
              </Paper>
              <Box>
                 
                <Button
          sx={{ m: 1 }}
          variant="outlined"
          startIcon={<EditIcon />}
          href={"/dashboard/TCF/NoiseCerti/" + currentNoiseCerti?.parentId + "/edit"}
        >
          Edit
        </Button>
              </Box>

            </>
          )}

          
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

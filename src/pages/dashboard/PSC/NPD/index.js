import axios from "axios";
import { useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
  Grid
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";

// components
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Iconify from "@/components/Iconify";
import Layout from "@/layouts";

// DataGrid
import Page from "@/components/Page";
import NPDCard from "@/sections/@dashboard/NPD/NPDCard";


NPDList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function NPDList({ NPDs = [] }) {
  const router = useRouter();
  const [currentNPD, setCurrentNPD] = useState({});
  console.log(NPDs);

  
  if (!NPDs) return <CircularProgress />;


  return (
    <Page title="NPD List">
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ height: 200 }}>
          <HeaderBreadcrumbs
            heading="NPD model dashboard"
            links={[{ name: "PVC" }, { name: "EU" }]}
            action={
              <NextLink href="NPD/new">
                <Button
                  variant="contained"
                  startIcon={<Iconify icon={"eva:plus-fill"} />}
                >
                  New File
                </Button>
              </NextLink>
            }
          />

        
        </Grid>
        <Grid item xs={12} sx={{ height: 900 }}>

        
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {NPDs.map((npd) => (
            <NPDCard key={npd._id} npd={npd} />
            ))}
        </Box>
            </Grid>
      </Grid>
    </Page>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://127.0.0.1:3000/api/PSC/NPD/");
  const NPDs = response.data.data;

  return {
    props: {
      NPDs,
    },
  };
}

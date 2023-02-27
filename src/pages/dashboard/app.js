// @mui
// import { useTheme } from '@mui/material/styles';
import { Container, Grid } from "@mui/material";
// hooks
// layouts
import Layout from "@/layouts";
import axios from "axios";
// components
import Page from "@/components/Page";
// sections
// assets
import AnalyticsKRTAByModel from "@/sections/@dashboard/analytics/AnalyticsKRTAByModel";

import WorldMapWidget from "@/sections/@dashboard/analytics/WorldMapWidget";
// ----------------------------------------------------------------------

GeneralApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GeneralApp({
  HEXmodels = [],
  WEXmodels = [],
  geometries = [],
}) {
  
  return (
    <Page title="Dashboard">
      <Container maxWidth={"xl"}>
      <WorldMapWidget geometries={geometries} />
        <Grid container spacing={3}>
          
          

          <Grid item xs={6}>
            <AnalyticsKRTAByModel
              title="한국형식승인 Crawler"
              list={HEXmodels}
            />
          </Grid>
          <Grid item xs={6} href="/KRTA/WEX">
            <AnalyticsKRTAByModel
              title="한국형식승인 Wheel Exca"
              list={WEXmodels}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export async function getServerSideProps() {
  const HEXresponse = await axios.get("http://127.0.0.1:3000/api/HEXmodels/");
  const WEXresponse = await axios.get("http://127.0.0.1:3000/api/WEXmodels/");
  const GEOresponse = await axios.get("http://127.0.0.1:3000/api/PSC/Global");

  const HEXmodels = HEXresponse.data;
  const WEXmodels = WEXresponse.data;
  const geometries = GEOresponse.data;

  return {
    props: {
      HEXmodels,
      WEXmodels,
      geometries,
    },
  };
}

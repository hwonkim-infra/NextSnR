// @mui
// import { useTheme } from '@mui/material/styles';
import { Container, Grid } from "@mui/material";
// hooks
// import useAuth from '@/hooks/useAuth';
// import useSettings from '@/hooks/useSettings';
// layouts
import Layout from "@/layouts";
import axios from "axios";
// _mock_
// import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from '@/_mock';
// components
import Page from "@/components/Page";
// sections
// import { AppWidget, AppWelcome, AppFeatured, AppNewInvoice, AppTopAuthors, AppTopRelated, AppAreaInstalled, AppWidgetSummary, AppCurrentDownload, AppTopInstalledCountries, } from '../../sections/@dashboard/general/app';
// assets
// import { SeoIllustration } from '../../assets';
import AnalyticsKRTAByModel from "@/sections/@dashboard/analytics/AnalyticsKRTAByModel";
// import PSCFeatured from '@/sections/@dashboard/analytics/PSCFeatured';

import WorldMapWidget from "@/sections/@dashboard/analytics/WorldMapWidget";
// import geoData from "@/sections/@dashboard/analytics/mapWidget/mapData.json";
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
    <Page title="General: App">
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

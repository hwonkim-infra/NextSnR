// @mui
// routes
import { PATH_DASHBOARD } from '@/routes/paths';
// hooks

// layouts
import Layout from '@/layouts';
// components
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
// sections
import NPDEditForm from '@/sections/@dashboard/NPD/NPDEditForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

// ----------------------------------------------------------------------

NPDCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NPDCreate({FDRitems=[], DVCitems=[]}) {


  return (
    <Page title="NPD: Create a new NPD">
        <HeaderBreadcrumbs
          heading="Create a new NPD"
          /* links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.NPD  },
            { name: 'NPD', href: PATH_DASHBOARD.NPD.EU },
            { name: 'New NPD' },
          ]} */
        /> 
        <NPDEditForm defaultItems = {[FDRitems, DVCitems]}  />
    </Page>
  );
}


export async function getServerSideProps() {
  const FDRs = await axios.get("http://127.0.0.1:3000/api/PSC/NPDItems/npdStage/FDR");
  const DVCs = await axios.get("http://127.0.0.1:3000/api/PSC/NPDItems/npdStage/DVC");
  const FDRitems = FDRs.data;
  const DVCitems = DVCs.data;
  
  return {
    props: {
      FDRitems, DVCitems
    },
  };
}

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

export default function NPDCreate() {

  const [NPDitems, setNPDitems] = useState({})
  
  const getNPDitems = async () => {
    const response = await axios.get(`/api/PSC/NPDItems/`);

    const data = response.data.data;
    setNPDitems(data);
    // console.log(data);
};

 
useEffect(() => {
  getNPDitems();
}, [])


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
        <NPDEditForm defaultItems={NPDitems} />
    </Page>
  );
}

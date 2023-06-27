import axios from "axios";
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
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

NPDEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NPDEdit({FDRitems=[], DVCitems=[]}) {

    const [currentNPD, setCurrentNPD] = useState({})

    const {query} = useRouter();

    const getNPD = async () => {
        const response = await axios.get(`/api/PSC/NPD/${query.id}`);

        const data = response.data;
        setCurrentNPD(data);
        // console.log(data);
    };

    

    useEffect(() => {
        if (query.id) getNPD();
    }, [query.id])

  return (
    <Page title="NPD: edit NPD">
        <HeaderBreadcrumbs
          heading="Edit NPD report"
          /* links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.NPD  },
            { name: 'NPD', href: PATH_DASHBOARD.NPD.EU },
            { name: 'New NPD' },
          ]} */
        /> 
        <NPDEditForm isEdit currentNPD={currentNPD} defaultItems = {[FDRitems, DVCitems]}  />
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

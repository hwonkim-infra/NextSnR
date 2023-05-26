// next
import { useRouter } from 'next/router';
import axios from "axios";

// @mui
// routes
import { PATH_DASHBOARD } from '@/routes/paths';
// layouts
import Layout from '@/layouts';
// components
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
// sections
import { useEffect, useState } from 'react';
import NPDViewFrame from '@/sections/@dashboard/NPD/NPDViewFrame';

// ----------------------------------------------------------------------

NPDview.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NPDview() {
const [currentNPD, setCurrentNPD] = useState({})

const { query } = useRouter();

  const getNPD = async () => {
    const response = await axios.get(`/api/PSC/NPD/${query.id}`);

    const data = response.data;
    setCurrentNPD(data);
  };

  useEffect(() => {
    if (query.id) getNPD();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="NPD: View Item ">
        <HeaderBreadcrumbs
          heading={"View NPD: "+ currentNPD.model_name}
          /* links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.NPD },
            { name: 'NPD', href: PATH_DASHBOARD.NPD.EU  },
            { name: (currentNPD?.item) },
          ]} */
        />

        <NPDViewFrame currentNPD={currentNPD} />
    </Page>
  );
}

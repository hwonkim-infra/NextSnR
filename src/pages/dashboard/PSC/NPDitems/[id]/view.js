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
import PSCviewFrame from '@/sections/@dashboard/PSC/PSCviewFrame';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

PSCview.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PSCview() {
const [currentPSC, setCurrentPSC] = useState({})

const { query } = useRouter();

  const getPSC = async () => {
    const response = await axios.get(`/api/PSC/GuideBook/${query.id}`);

    const data = response.data;
    setCurrentPSC(data);
  };

  useEffect(() => {
    if (query.id) getPSC();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="PSC: View Item ">
        <HeaderBreadcrumbs
          heading={"View PSC: "+ currentPSC.item}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.PSC },
            { name: 'PSC', href: PATH_DASHBOARD.PSC.EU  },
            { name: (currentPSC?.item) },
          ]}
        />

        <PSCviewFrame currentPSC={currentPSC} />
    </Page>
  );
}

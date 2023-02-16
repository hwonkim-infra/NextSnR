// next
import { useRouter } from 'next/router';
// @mui
// routes
import { PATH_DASHBOARD } from '@/routes/paths';
// layouts
import Layout from '@/layouts';
// components
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
// sections
import PSCEditForm from '@/sections/@dashboard/PSC/PSCEditForm';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

PSCEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PSCEdit() {
const [currentPSC, setCurrentPSC] = useState()

const { query } = useRouter();

  const getPSC = async () => {
    const response = await fetch(`http://localhost:3000/api/PSC/${query.id}`);

    const data = await response.json();
    setCurrentPSC(data);
    console.log(data);
  };

  useEffect(() => {
    if (query.id) getPSC();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="PSC: Edit ">
        <HeaderBreadcrumbs
          heading="Edit PSC"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.PSC },
            { name: 'PSC', href: PATH_DASHBOARD.PSC.EU  },
            { name: (currentPSC?.item) },
          ]}
        />

        <PSCEditForm isEdit currentPSC={currentPSC} />
    </Page>
  );
}

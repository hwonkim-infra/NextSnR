// next
import { useRouter } from 'next/router';
// @mui
// routes
// hooks
// _mock_
// layouts
import Layout from '@/layouts';
// components
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
// sections
import WEXEditForm from '@/sections/@dashboard/KRTA/WEXEditForm';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

WEXEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WEXEdit() {
const [currentModel, setCurrentModel] = useState()


  const { query } = useRouter();


  const getWEX = async () => {
    const response = await fetch(`http://localhost:3000/api/WEX/${query.id}`);

    const data = await response.json();
    setCurrentModel(data);
    console.log(data);
  };

  useEffect(() => {
    if (query.id) getWEX();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="WEX: Changemodel ">
        <HeaderBreadcrumbs
          heading="Create WEXChange"
          links={[
            { name: 'Dashboard', href: '/dashboard/' },
            { name: 'WEX', href: '/dashboard/KRTA/WEX'  },
            { name: (currentModel?.model_name) },
          ]}
        />

        <WEXEditForm isChangeModel currentModel={currentModel} />
    </Page>
  );
}

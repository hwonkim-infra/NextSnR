// next
import axios from "axios";
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
    const response = await axios.get(`/api/WEX/${query.id}`);

    const data = response.data;
    setCurrentModel(data);
    console.log(data);
  };

  useEffect(() => {
    if (query.id) getWEX();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="WEX: Edit ">
        <HeaderBreadcrumbs
          heading="Edit WEX"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.KRTA },
            { name: 'WEX', href: PATH_DASHBOARD.KRTA.WEX  },
            { name: (currentModel?.model_name) },
          ]}
        />

        <WEXEditForm isEdit currentModel={currentModel} />
    </Page>
  );
}

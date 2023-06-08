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
import HDZEditForm from '@/sections/@dashboard/KRTA/HDZEditForm';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

HDZEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HDZEdit() {
const [currentModel, setCurrentModel] = useState()

const { query } = useRouter();

  const getHDZ = async () => {
    const response = await axios.get(`/api/HDZ/${query.id}`);

    const data = response.data;
    setCurrentModel(data);
    console.log(data);
  };

  useEffect(() => {
    if (query.id) getHDZ();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="HDZ: Edit ">
        <HeaderBreadcrumbs
          heading="Edit HDZ"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.KRTA },
            { name: 'HDZ', href: PATH_DASHBOARD.KRTA.HDZ  },
            { name: (currentModel?.model_name) },
          ]}
        />

        <HDZEditForm isEdit currentModel={currentModel} />
    </Page>
  );
}

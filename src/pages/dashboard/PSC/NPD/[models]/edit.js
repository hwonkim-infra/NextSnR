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
import NPDEditForm from '@/sections/@dashboard/NPD/NPDEditForm';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

NPDEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NPDEdit() {
const [currentNPD, setCurrentNPD] = useState()

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
    <Page title="NPD: Edit ">
        <HeaderBreadcrumbs
          heading="Edit NPD"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.NPD },
            { name: 'NPD', href: PATH_DASHBOARD.NPD.EU  },
            { name: (currentNPD?.item) },
          ]}
        />

        <NPDEditForm isEdit currentNPD={currentNPD} />
    </Page>
  );
}

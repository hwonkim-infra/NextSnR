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
import NPDitemForm from '@/sections/@dashboard/NPD/NPDitemForm';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

NPDitemEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NPDitemEdit() {
const [currentNPDitem, setCurrentNPDitem] = useState()

const { query } = useRouter();

  const getNPDitem = async () => {
    const response = await axios.get(`/api/PSC/NPDItems/${query.id}`);

    const data = response.data;
    setCurrentNPDitem(data);
  };

  useEffect(() => {
    if (query.id) getNPDitem();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="NPDitem: Edit ">
        <HeaderBreadcrumbs
          heading="Edit NPDitem"
          /* links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.NPDitem },
            { name: 'NPDitem', href: PATH_DASHBOARD.NPDitem.EU  },
            { name: (currentNPDitem?.item) },
          ]} */
        />

        <NPDitemForm isEdit currentNPDitem={currentNPDitem} />
    </Page>
  );
}

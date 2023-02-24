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
import GLOBALEditForm from '@/sections/@dashboard/PSC/GLOBALEditForm';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

GLOBALEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GLOBALEdit() {
const [currentGLOBAL, setCurrentGLOBAL] = useState()

const { query } = useRouter();

  const getGLOBAL = async () => {
    const response = await fetch(`http://localhost:3000/api/PSC/Global/${query.id}`);

    const data = await response.json();
    setCurrentGLOBAL(data);
    console.log(data);
  };

  useEffect(() => {
    if (query.id) getGLOBAL();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="GLOBALmap: Edit ">
        <HeaderBreadcrumbs
          heading="Edit National Information "
          /* links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.GLOBAL },
            { name: 'GLOBAL', href: PATH_DASHBOARD.GLOBAL.EU  },
            { name: (currentGLOBAL?.item) },
          ]} */
        />

        <GLOBALEditForm isEdit currentGLOBAL={currentGLOBAL} />
    </Page>
  );
}

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
import NoiseCertiEditForm from '@/sections/@dashboard/TCF/Noise/NoiseCertiEditForm';

// ----------------------------------------------------------------------

NoiseCertiEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NoiseCertiEdit() {
const [currentNoiseCerti, setCurrentNoiseCerti] = useState()

const { query } = useRouter();

  const getNoiseCerti = async () => {
    const response = await axios.get(`/api/TCF/NoiseCerti/${query.id}`);

    const data = response.data;
    setCurrentNoiseCerti(data);
  };

  useEffect(() => {
    if (query.id) getNoiseCerti();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="NoiseCerti: Edit ">
        <HeaderBreadcrumbs
          heading="Edit NoiseCerti"
          /* links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.NoiseCerti },
            { name: 'NoiseCerti', href: PATH_DASHBOARD.NoiseCerti.EU  },
            { name: (currentNoiseCerti?.item) },
          ]} */
        />

        <NoiseCertiEditForm isEdit currentNoiseCerti={currentNoiseCerti} />
    </Page>
  );
}

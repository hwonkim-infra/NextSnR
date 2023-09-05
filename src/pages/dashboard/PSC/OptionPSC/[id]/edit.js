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
import OptionPSCEditForm from '@/sections/@dashboard/PSC/OptionPSCEditForm';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

OptionPSCEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function OptionPSCEdit() {
const [currentOptionPSC, setCurrentOptionPSC] = useState()

const { query } = useRouter();

  const getOptionPSC = async () => {
    const response = await axios.get(`/api/PSC/OptionPSC/${query.id}`);

    const {data} = response;
    setCurrentOptionPSC(data);
  };

  useEffect(() => {
    if (query.id) getOptionPSC();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="OptionPSC: Edit ">
        <HeaderBreadcrumbs
          heading="Edit OptionPSC"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.PSC },
            { name: 'OptionPSC', href: PATH_DASHBOARD.PSC.OptionPSC  },
            { name: (currentOptionPSC?.item) },
          ]}
        />

        <OptionPSCEditForm isEdit currentOptionPSC={currentOptionPSC} />
    </Page>
  );
}

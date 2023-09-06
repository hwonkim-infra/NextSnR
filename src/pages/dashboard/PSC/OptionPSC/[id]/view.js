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
import OptionPSCviewFrame from '@/sections/@dashboard/PSC/OptionPSCviewFrame';

// ----------------------------------------------------------------------

OptionPSCview.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function OptionPSCview() {
const [currentOptionPSC, setCurrentOptionPSC] = useState({})

const { query } = useRouter();

  const getOptionPSC = async () => {
    const response = await axios.get(`/api/PSC/OptionPSC/${query.id}`);

    const data = response.data;
    setCurrentOptionPSC(data);
  };

  useEffect(() => {
    if (query.id) getOptionPSC();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="OptionPSC: View Item ">
        <HeaderBreadcrumbs
          heading={"View OptionPSC: "+ currentOptionPSC.optionName}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.PSC.OptionPSC },
            { name: 'OptionPSC', href: PATH_DASHBOARD.PSC.OptionPSC  },
            { name: (currentOptionPSC?.optionName) },
          ]}
        />

        <OptionPSCviewFrame currentOptionPSC={currentOptionPSC} />
    </Page>
  );
}

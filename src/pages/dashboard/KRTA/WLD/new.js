// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '@/routes/paths';
// import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
// import useSettings from '@/hooks/useSettings';
// layouts
import Layout from '@/layouts';
// components
import Page from '@/components/Page';
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
// sections
import WEXEditForm from '@/sections/@dashboard/KRTA/WEXEditForm';

// ----------------------------------------------------------------------

WEXCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WEXCreate() {
  // const { themeStretch } = useSettings();

  return (
    <Page title="WEX: Create a new WEX">
        <HeaderBreadcrumbs
          heading="Create a new WEX"
          links={[
            { name: 'Dashboard', },
            { name: 'WEX',  },
            { name: 'New WEX' },
          ]}
        /> 
        <WEXEditForm />
    </Page>
  );
}

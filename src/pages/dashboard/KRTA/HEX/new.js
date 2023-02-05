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
import HEXEditForm from '@/sections/@dashboard/KRTA/HEXEditForm';

// ----------------------------------------------------------------------

HEXCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HEXCreate() {
  // const { themeStretch } = useSettings();

  return (
    <Page title="HEX: Create a new HEX">
        <HeaderBreadcrumbs
          heading="Create a new HEX"
          links={[
            { name: 'Dashboard', },
            { name: 'HEX', href: PATH_DASHBOARD.KRTA.HEX },
            { name: 'New HEX' },
          ]}
        /> 
        <HEXEditForm />
    </Page>
  );
}

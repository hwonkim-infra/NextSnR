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
import WLDEditForm from '@/sections/@dashboard/KRTA/WLDEditForm';

// ----------------------------------------------------------------------

WLDCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WLDCreate() {
  // const { themeStretch } = useSettings();

  return (
    <Page title="WLD: Create a new WLD">
        <HeaderBreadcrumbs
          heading="Create a new Wheel Loader"
          links={[
            { name: 'Dashboard', },
            { name: 'WLD',  },
            { name: 'New WLD' },
          ]}
        /> 
        <WLDEditForm />
    </Page>
  );
}

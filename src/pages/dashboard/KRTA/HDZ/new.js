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
import HDZEditForm from '@/sections/@dashboard/KRTA/HDZEditForm';

// ----------------------------------------------------------------------

HDZCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HDZCreate() {
  // const { themeStretch } = useSettings();

  return (
    <Page title="HDZ: Create a new HDZ">
        <HeaderBreadcrumbs
          heading="Create a new HDZ"
          links={[
            { name: 'Dashboard', href: "/dashboard/app" },
            { name: 'HDZ', href: "/dashboard/KRTA/HDZ" },
            { name: 'New HDZ' },
          ]}
        /> 
        <HDZEditForm />
    </Page>
  );
}

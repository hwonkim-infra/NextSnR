// @mui
// routes
import { PATH_DASHBOARD } from '@/routes/paths';
// hooks

// layouts
import Layout from '@/layouts';
// components
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
// sections
import NPDitemForm from '@/sections/@dashboard/NPD/NPDitemForm';

// ----------------------------------------------------------------------

PSCCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PSCCreate() {

  return (
    <Page title="PSC: Create a new PSC">
        <HeaderBreadcrumbs
          heading="Create a new PSC"
          /* links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.PSC  },
            { name: 'PSC', href: PATH_DASHBOARD.PSC.EU },
            { name: 'New PSC' },
          ]} */
        /> 
        <NPDitemForm />
    </Page>
  );
}

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
import NPDEditForm from '@/sections/@dashboard/NPD/NPDEditForm';

// ----------------------------------------------------------------------

NPDCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NPDCreate() {

  return (
    <Page title="NPD: Create a new NPD">
        <HeaderBreadcrumbs
          heading="Create a new NPD"
          /* links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.NPD  },
            { name: 'NPD', href: PATH_DASHBOARD.NPD.EU },
            { name: 'New NPD' },
          ]} */
        /> 
        <NPDEditForm />
    </Page>
  );
}

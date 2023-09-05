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
import OptionPSCEditForm from '@/sections/@dashboard/PSC/OptionPSCEditForm';

// ----------------------------------------------------------------------

OptionPSCCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function OptionPSCCreate() {

  return (
    <Page title="OptionPSC: Create a new OptionPSC">
        <HeaderBreadcrumbs
          heading="Create a new OptionPSC"
          /* links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.OptionPSC  },
            { name: 'OptionPSC', href: PATH_DASHBOARD.OptionPSC.EU },
            { name: 'New OptionPSC' },
          ]} */
        /> 
        <OptionPSCEditForm />
    </Page>
  );
}

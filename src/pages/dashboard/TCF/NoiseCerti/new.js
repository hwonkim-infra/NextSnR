// @mui
// routes
import { PATH_DASHBOARD } from '@/routes/paths';
// hooks

// layouts
import Layout from '@/layouts';
// components
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import NoiseCertiEditForm from '@/sections/@dashboard/TCF/Noise/NoiseCertiEditForm';
// sections
// import NoiseCertiEditForm from '@/sections/@dashboard/NoiseCerti/NoiseCertiEditForm';

// ----------------------------------------------------------------------

NoiseCertiCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NoiseCertiCreate() {

  return (
    <Page title="NoiseCerti: Create a new NoiseCerti">
        <HeaderBreadcrumbs
          heading="Create a new NoiseCerti"
        /> 
        <NoiseCertiEditForm />
    </Page>
  );
}

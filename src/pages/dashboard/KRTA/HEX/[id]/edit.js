// next
import { useRouter } from 'next/router';
// @mui
// layouts
import Layout from '@/layouts';
// components
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
// sections
import HEXEditForm from '@/sections/@dashboard/KRTA/HEXEditForm';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

HEXEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HEXEdit() {
const [currentModel, setCurrentModel] = useState()

const { query } = useRouter();

  const getHEX = async () => {
    const response = await fetch(`http://localhost:3000/api/HEX/${query.id}`);

    const data = await response.json();
    setCurrentModel(data);
    console.log(data);
  };

  useEffect(() => {
    if (query.id) getHEX();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="HEX: Edit ">
        <HeaderBreadcrumbs
          heading="Edit HEX"
          links={[
            { name: 'Dashboard', href: '/dashboard/' },
            { name: 'HEX', href: '/dashboard/KRTA/HEX'  },
            { name: (currentModel?.model_name) },
          ]}
        />

        <HEXEditForm isEdit currentModel={currentModel} />
    </Page>
  );
}

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";

// next
import NextLink from 'next/link';
// @mui
import { Grid, Button, Container, Stack } from '@mui/material';
// hooks

import Layout from "@/layouts";
import Page from '@/components/Page';
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Iconify from "@/components/Iconify";

// ----------------------------------------------------------------------

BlogPosts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default function BlogPosts({ POSTs = [] }) {
  const router = useRouter();

  

  return <>

<Page title="Blog: Posts">
      <Container >

        <HeaderBreadcrumbs
          heading="Blog"
          links={[
            { name: 'Dashboard',  },
            { name: 'Blog',  },
            { name: 'Posts' },
          ]}
          action={
              <Button href={'/dashboard/Blog/post/new'} variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
                New Post
              </Button>
          }
        />

        

        <Grid container spacing={3}>
          
        </Grid>
      </Container>
    </Page>
  </>
}

export async function getServerSideProps() {
  const response = await axios.get("http://127.0.0.1:3000/api/BLOG/");
  const POSTs = response.data;

  return {
    props: {
      POSTs,
    },
  };
}

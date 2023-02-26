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
            // <NextLink href={PATH_DASHBOARD.blog.new} passHref>
              <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
                New Post
              </Button>
            // </NextLink>
          }
        />

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          {/* <BlogPostsSearch /> */}
          {/* <BlogPostsSort query={filters} options={SORT_OPTIONS} onSort={handleChangeSort} /> */}
        </Stack>

        <Grid container spacing={3}>
          {/* {(!posts.length ? [...Array(12)] : sortedPosts).map((post, index) =>
            post ? (
              <Grid key={post.id} item xs={12} sm={6} md={(index === 0 && 6) || 3}>
                <BlogPostCard post={post} index={index} />
              </Grid>
            ) : (
              <SkeletonPostItem key={index} />
            )
          )} */}
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

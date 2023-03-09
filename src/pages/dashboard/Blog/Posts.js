// import orderBy from 'lodash/orderBy';
// next
import NextLink from "next/link";
// @mui
import {
  Button,
  Container,
  Grid
} from "@mui/material";
// hooks
// utils
import axios from "axios";
// routes
// layouts
import Layout from "../../../layouts";
// components
import Page from "@/components/Page";
import Iconify from "../../../components/Iconify";

import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import PostCard from "@/sections/@dashboard/blog/PostCard";

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

BlogPosts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------
/* 
const applySort = (posts, sortBy) => {
  if (sortBy === 'latest') {
    return orderBy(posts, ['createdAt'], ['desc']);
  }
  if (sortBy === 'oldest') {
    return orderBy(posts, ['createdAt'], ['asc']);
  }
  if (sortBy === 'popular') {
    return orderBy(posts, ['view'], ['desc']);
  }
  return posts;
}; */

export default function BlogPosts({BLOGs=[]}) {


  /* const getAllPosts = useCallback(async () => {
    try {
      const response = await axios.get("/api/BLOG");

      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const handleChangeSort = (value) => {
    if (value) {
      setFilters(value);
    }
  }; */

  return (
    <Page title="Blog: Posts">
      <Container maxWidth={false }>
        <HeaderBreadcrumbs
          heading="Tech Blog"
          /*  links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "Blog", href: PATH_DASHBOARD.blog.root },
            { name: "Posts" },
          ]} */
          action={
            <NextLink href={"/dashboard/Blog/new"} passHref>
              <Button
                variant="contained"
                startIcon={<Iconify icon={"eva:plus-fill"} />}
              >
                New Post
              </Button>
            </NextLink>
          }
        />

        <Grid container spacing={3}>
          {BLOGs.map((post, index) => (
            <Grid item xs={12} sm={6} md={3} key={post._id}>
              <PostCard post={post} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://127.0.0.1:3000/api/BLOG/");
  const BLOGs = response.data;

  return {
    props: {
      BLOGs,
    },
  };
}

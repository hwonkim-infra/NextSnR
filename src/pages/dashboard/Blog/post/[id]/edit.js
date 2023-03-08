// next
import { useRouter } from 'next/router';
import axios from "axios";

// @mui
// routes
import { PATH_DASHBOARD } from '@/routes/paths';
// layouts
import Layout from '@/layouts';
// components
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
// sections
import BlogPostEditForm from '@/sections/@dashboard/blog/BlogPostEditForm';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

BlogPostEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function BlogPostEdit() {
const [currentBlogPost, setCurrentBlogPost] = useState()

const { query } = useRouter();

  const getBlogPost = async () => {
    const response = await axios.get(`/api/BLOG/${query.id}`);

    const data = response.data;
    setCurrentBlogPost(data);
  };

  useEffect(() => {
    if (query.id) getBlogPost();
  }, [query.id]);

//   const currentModel = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="BlogPost: Edit ">
        <HeaderBreadcrumbs
          heading="Edit BlogPost"
          
        />

        <BlogPostEditForm isEdit currentBlogPost={currentBlogPost} />
    </Page>
  );
}

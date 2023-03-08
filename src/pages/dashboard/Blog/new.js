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
import BlogPostEditForm from '@/sections/@dashboard/blog/BlogPostEditForm';

// ----------------------------------------------------------------------

BlogPostCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function BlogPostCreate() {

  return (
    <Page title="BlogPost: Create a new BlogPost">
        <HeaderBreadcrumbs
          heading="Create a new BlogPost"
          /* links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.BlogPost  },
            { name: 'BlogPost', href: PATH_DASHBOARD.BlogPost.EU },
            { name: 'New BlogPost' },
          ]} */
        /> 
        <BlogPostEditForm />
    </Page>
  );
}

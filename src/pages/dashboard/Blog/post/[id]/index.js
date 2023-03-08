import { useEffect, useState } from "react";
import {
  Box,
  Card,
  Divider,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

// import Page from 'src/components/Page'
import EditIcon from "@mui/icons-material/Edit";
import parse from "html-react-parser";
import Layout from "@/layouts";
import Page from "@/components/Page";
import { useRouter } from "next/router";
import axios from "axios";

BlogPost.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function BlogPost() {
  const { push, query } = useRouter();
  const [post, setPost] = useState({});

  const getHEX = async () => {
    const response = await axios.get(`/api/BLOG/${query.id}`);

    const data = await response.data;
    setPost(data);
    console.log(data);
  };

  useEffect(() => {
    if (query.id) getHEX();
  }, [query.id]);

  const TitleStyle = styled("h1")(({ theme }) => ({
    ...theme.typography.h2,
    top: 0,
    zIndex: 10,
    width: "100%",
    position: "absolute",
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(10),
    },
  }));

  return (
    <Page title="Blog: Post Details">
      <Container>
        <Box sx={{ width: "100%",  padding: 3 }}>
          <Typography variant="h2">{post.title}</Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mb: 5 }}>
            {parse(post.description || "")}
          </Typography>
          <Divider />
          <Box>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              href={"/dashboard/Blog/post/" + post._id + "/edit"}
            >
              수정
            </Button>
          </Box>
        </Box>
      </Container>
    </Page>
  );
}

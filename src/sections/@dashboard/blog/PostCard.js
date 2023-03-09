import React from "react";
import { CardActionArea, Card, CardContent, Typography, Box, Button, } from "@mui/material";

import TextMaxLine from '@/components/TextMaxLine';

import parse from "html-react-parser";
import Link from "next/link";



const PostCard = ({ post }) => {
  return (
    <div>
      <CardActionArea  >
        <Card sx={{height: '16vw'}}>
          <Link color="inherit" href={"/dashboard/Blog/post/" + post._id}>
          <CardContent sx={{ m: 1, width: 1 }}>
          <TextMaxLine variant={'h4'} line={2} sx={{ height:'12vw'}} persistent>
            {post.title}
          </TextMaxLine>
            
            <Typography
              gutterBottom
              variant="subtitle1"
              color="text.secondary"
              component="span"
              >
              {new Date(post.date).toLocaleDateString("Ko-kr")}
              {" by "}
              {post.creator}
            </Typography>

              <Box sx={{p:2, m:2}}>{parse(post.description || "")}</Box>
            
          </CardContent>
              </Link>
          
        </Card>
      </CardActionArea>
    </div>
  );
};

export default PostCard;

"use server";

import React from "react";
import { useParams } from "@tanstack/react-router";
import { getPosts } from "../../server/data.js";
import BlogPost from "./BlogPost";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import IndicatorIcon from "./IndicatorIcon";

// Define the component type for this page/component for display purposes
const COMPONENT_TYPE = "server";

const BlogPostPage = () => {
  const { postId } = useParams();
  const posts = getPosts(postId);
  const post = posts.find((p) => p.id === Number(postId));
  if (!post) return <div>Post not found</div>;
  return (
    <div className={COMPONENT_TYPE} style={{ position: "relative" }}>
      <IndicatorIcon type={COMPONENT_TYPE} name="BlogPostPage" />
      <BlogPost post={post}>
        <CommentList postId={post.id} />
        <CommentForm postId={post.id} />
      </BlogPost>
    </div>
  );
};

export default BlogPostPage;

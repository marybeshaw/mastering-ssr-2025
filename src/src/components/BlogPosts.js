"use server";

import React from "react";
import { Link } from "@tanstack/react-router";
import { getPosts } from "../../server/data.js";
import BlogPost from "./BlogPost";
import CommentList from "./CommentList";
import IndicatorIcon from "./IndicatorIcon";

// Define the component type for this page/component
const COMPONENT_TYPE = "server";

const BlogPosts = () => {
  const posts = getPosts();
  return (
    <div className={COMPONENT_TYPE} style={{ position: "relative" }}>
      <IndicatorIcon type={COMPONENT_TYPE} name="BlogPosts" />
      {posts.map((post) => (
        <BlogPost key={post.id} post={post}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <CommentList postId={post.id} />
        </BlogPost>
      ))}
    </div>
  );
};

export default BlogPosts;

"use server";

import React from "react";
import PropTypes from "prop-types";
import IndicatorIcon from "./IndicatorIcon";
import LikesButton from "./LikesButton";

// Define the component type for this component
const COMPONENT_TYPE = "server";

const BlogPost = ({ post, children }) => {
  console.log("BlogPost rendered");

  return (
    <div className={COMPONENT_TYPE} style={{ position: "relative" }}>
      <IndicatorIcon type={COMPONENT_TYPE} name="BlogPost" />
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <div data-likes-root-id={`likes-${post.id}`}>
        <LikesButton key={`likes-${post.id}`} postId={post.id} />
      </div>

      {children}
    </div>
  );
};

BlogPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default BlogPost;

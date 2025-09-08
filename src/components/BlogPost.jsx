import Link from 'next/link';
import IndicatorIcon from "./IndicatorIcon";
import React from "react";
import LikesButton from "./LikesButton";
import CommentList from "./CommentList";

const COMPONENT_TYPE = "client";

export default function BlogPost({ post}) {
  return (
    <article className={COMPONENT_TYPE}>
      <IndicatorIcon type={COMPONENT_TYPE} name="BlogPostPage" />
          
      <h2>
        <Link href={`/blog/${post.slug}`} style={{ color: '#0070f3' }}>
          {post.title}
        </Link>
      </h2>

      <p>{post.excerpt}</p>
      <LikesButton postId={post.slug} />
      <CommentList postId={post.slug} />
    </article>
  );
}
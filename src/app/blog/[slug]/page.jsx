import React from "react";

import { getPosts, getPost } from '../../../lib/posts';

import IndicatorIcon from "../../../components/IndicatorIcon";
import BlogPost from "../../../components/BlogPost";

const COMPONENT_TYPE = 'hybrid';

// This tells Next.js which routes to pre-build at build time
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// The page component for a single blog post
export default async function BlogPostPage({ params }) {
  // The `params` object contains the dynamic parts of the URL.
  // In this case, the first one is { slug: 'client-server-synergy' }
  const post = await getPost(params.slug);

  if (!post) {
    // Handle the case where the post is not found
    return <div>Post not found</div>;
  }

  return (
    <main className={COMPONENT_TYPE}>
      <IndicatorIcon type={COMPONENT_TYPE} name="BlogPostPage" />
      <BlogPost post={post} />
    </main>
  );
}
import React from "react";

import { getPosts } from '../lib/posts';
import IndicatorIcon from "../components/IndicatorIcon";
import BlogPost from "../components/BlogPost";


const COMPONENT_TYPE = "hybrid";
export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main>
      <div className={COMPONENT_TYPE}>
        <IndicatorIcon type={COMPONENT_TYPE} name="HomePage" />
        <h1>Mastering Server-Side Development for React Developers - Demo Project</h1>
        <p>Displaying blog posts with server-action comments & client-action likes!</p>

        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
          {posts.length === 0 && <p>No blog posts found.</p>}
        </div>
      </div>
    </main>
  );
}
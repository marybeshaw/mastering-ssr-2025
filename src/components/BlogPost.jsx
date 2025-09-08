import Link from 'next/link';
import IndicatorIcon from "./IndicatorIcon";
import React from "react";
import LikesButton from "./LikesButton";
import CommentList from "./CommentList";

const COMPONENT_TYPE = "server";

export default function BlogPost({ post, isFullPage = false }) {
    return (
        <article className={COMPONENT_TYPE}>
            <IndicatorIcon type={COMPONENT_TYPE} name="BlogPostPage" />
            {isFullPage ? (
                // On the single post page, render the title as an H1
                <h1>{post.title}</h1>
            ) : (
                // On the homepage, render the title as an H2 with a link
                <h2>
                    <Link href={`/blog/${post.slug}`} style={{ color: '#0070f3' }}>
                        {post.title}
                    </Link>
                </h2>
            )}
            <p>{post.excerpt}</p>
            <LikesButton postId={post.slug} />
            <CommentList postId={post.slug} />
        </article>
    );
}
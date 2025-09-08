"use server";

import { createFileRoute } from "@tanstack/react-router";
import BlogPostPage from "../../components/BlogPostPage.js";

export const Route = createFileRoute("/posts/$postId")({
  component: BlogPostPage,
});

"use server";

import { createFileRoute } from "@tanstack/react-router";
import BlogPosts from "../components/BlogPosts";

export const Route = createFileRoute("/posts")({
  component: BlogPosts,
});

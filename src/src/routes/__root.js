import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import Layout from "../components/Layout";

// Define any context you want available in your router
// For now, leave it empty
export const Route = createRootRouteWithContext()({
  head: () => ({
    links: [
      { rel: "icon", href: "/images/favicon.ico" },
      // Removed manual stylesheet link
    ],
    meta: [
      { title: "Mastering Server-Side Development for React Developers" },
      // ... other meta tags
    ],
  }),
  component: () => (
    <Layout>
      <HeadContent />
      <Outlet />
      <Scripts />
    </Layout>
  ),
});

import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.js";

export function createRouter() {
  return createTanStackRouter({
    routeTree,
    defaultSsr: true,
    // You can add defaultErrorComponent, defaultNotFoundComponent, etc. here
  });
}

// Type augmentation for TanStack Router (not needed in JS, but left for reference)
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: ReturnType<typeof createRouter>;
//   }
// }

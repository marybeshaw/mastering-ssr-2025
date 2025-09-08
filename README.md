# Mastering Server-Side Development for React Developers - Demo App

This is a demo application for Mary Shaw's conference presentation, "Mastering Server-Side Development for React Developers". The presentation will be given at:

- **UtahJS Conf 2025** - September 12, 2025
- **International JavaScript Conference** - September 30, 2025

This [Next.js](https://nextjs.org) project demonstrates the differences between server-side and client-side components in React 19, as well as different patterns for handling user interactions.

## Visual Component Indicators

This app includes special visual indicators to help distinguish between different component types:

- **Client Components** (`"use client"`): Light blue background with a "C" icon in the upper-right corner
- **Server Components** (default React 19 components): Light green background with an "S" icon in the upper-right corner

## Demo Features

### BlogPost Component
The main `BlogPost` component displays blog post data and is located at `src/components/BlogPost.jsx`. It currently uses static data from `data/posts.json`. This server component renders the post title, excerpt, and contains the interactive features below.

### Interactive Features

This app demonstrates two different patterns for handling user interactions:

#### 1. LikesButton - API Call Pattern
- **File**: `src/components/LikesButton.js`
- **Type**: Client component
- **Interaction**: Uses traditional API calls to a REST endpoint
- **API Route**: `src/app/api/likes/[postId]/route.js`
- **Data Storage**: `data/likes.json`
- **Behavior**: Fetches current likes on mount, sends POST request to increment likes

#### 2. CommentForm - Server Action Pattern  
- **Form Component**: `src/components/CommentForm.jsx` (client component)
- **List Component**: `src/components/CommentList.jsx` (server component)
- **Type**: Client component (form) + Server component (list)
- **Interaction**: Uses React Server Actions for form submission
- **Server Action**: `src/actions/commentActions.js`
- **Data Library**: `src/lib/comments.js`
- **Data Storage**: `data/comments.json`
- **Behavior**: Uses React Server Actions for form submission, automatically revalidates page data

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Learning Points

- **Server vs Client Components**: Visual indicators make it easy to see which components run where
- **API Calls vs Server Actions**: Compare the two different patterns for handling user interactions
- **Data Flow**: Observe how data flows differently between client API calls and server actions
- **Performance**: Notice the different loading behaviors and page updates

## Learn More

To learn more about Next.js and React Server Components:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Server Components](https://react.dev/reference/rsc/server-components) - official React documentation
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions) - Next.js server actions guide

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

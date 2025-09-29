# Mastering Server-Side Development for React Developers - Demo App

This is a demo application for Mary Shaw's conference presentation, "Mastering Server-Side Development for React Developers". The presentation will be given at:

- **UtahJS Conf 2025** - September 12, 2025
- **International JavaScript Conference** - September 30, 2025

This [Next.js](https://nextjs.org) project is a **simple blog post application** that demonstrates the differences between server-side and client-side components in React 19, as well as different patterns for handling user interactions. The app was deliberately kept simple to showcase specific React Server Component behaviors and console.log patterns.

 🎯 **New!** This repository includes an **[Interactive Code Tour](#interactive-code-tour)** that provides step-by-step guided explanations of all the concepts demonstrated in the presentation. Perfect for following along during the talk or reviewing the material afterward!

 🚀 **Pro Tip:** For the best experience, **[run the app locally](#getting-started)** while taking the code tour! You'll be able to see the console.log behavior, test the interactive features, and observe the differences between server and client components in real-time.

## App Overview

This demo app is a **simple blog post application** featuring:

- **Blog Post Display** - Shows blog post content using server-side rendering
- **Like Button** - Increment likes on posts (demonstrates optimistic UI patterns)  
- **Comment System** - Add and display comments (demonstrates Server Actions)

The application was intentionally kept simple to focus on demonstrating specific server-side rendering concepts and console.log behaviors in different component types.

## Visual Component Indicators

This app includes special visual indicators to help distinguish between different component types:

- **Hybrid Components** (`"use client"` renders on both server & client): Light blue background with an "H" icon in the upper-right corner
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

#### 2. CommentForm with CommentList - Server Action Pattern  
- **Form Component**: `src/components/CommentForm.jsx` (client component)
- **List Component**: `src/components/CommentList.jsx` (server component)
- **Type**: Client component (form) + Server component (list)
- **Interaction**: Uses React Server Actions for form submission
- **Server Action**: `src/actions/commentActions.js`
- **Data Library**: `src/lib/comments.js`
- **Data Storage**: `data/comments.json`
- **Behavior**: Uses React Server Actions for form submission, automatically revalidates page data

## Interactive Code Tour

This repository includes an interactive CodeTour that guides you through the key concepts demonstrated in the presentation. The tour provides step-by-step explanations of server components, client components, and hybrid patterns.

### Installing the CodeTour Extension

1. **In VS Code**: Open the Extensions panel (`Cmd+Shift+X` on Mac, `Ctrl+Shift+X` on Windows/Linux)
2. **Search for**: "CodeTour" by vsls-contrib
3. **Install** the extension
4. **Reload** VS Code if prompted

### Running the Tour

1. **Open the Command Palette**: `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
2. **Type**: "CodeTour: Start Tour"
3. **Select**: "SSR Components Deep Dive" from the list
4. **Follow along**: Use the navigation controls to step through each explanation

The tour covers:
- **Server Components** (CommentList) - Pure server-side rendering
- **Client Components** (LikesButton) - Hybrid rendering with optimistic UI
- **Server Actions** (CommentForm) - Direct server-client integration
- **Console.log behavior** - Where logs appear in different component types
- **Modern React patterns** - useOptimistic, useActionState, and revalidatePath

### Tour Benefits

- **Self-paced learning** - Go through the concepts at your own speed
- **Code context** - See explanations directly alongside the relevant code
- **Presentation companion** - Perfect for following along during the talk
- **Reference material** - Come back to review concepts anytime

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
- [Optimistic UI in React](https://react.dev/learn/optimistic-ui) - React documentation on optimistic UI patterns
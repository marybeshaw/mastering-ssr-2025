'use server'; // use server works on server functions/action files, not components

import { addComment } from '../lib/comments';
import { revalidatePath } from 'next/cache';  // The only next-js-specific code in the demo files

// Server action!! Returns state for the useActionState hook!
export async function addCommentAction(prevState, formData) {
  const postId = formData.get('postId');
  const author = formData.get('author');
  const commentText = formData.get('commentText');
  // You will not see this in the browser console - 
  // it's logged on the server!! Look in your server terminal.
  console.log('addCommentAction logs to the server terminal Only! ', { postId, author, commentText });

  if (!author || !commentText) {
    return {
      status: 'error',
      message: 'Author and comment are required'
    };
  }

  try {
    await addComment(postId, { author, commentText });

    // This is the only next.js-specific part of this file - everything else is general React
    // revalidatePath updates the UI after the action completes.
    revalidatePath(`/blog/${postId}`);

    // Note: You can return whatever you want from an action - it will be available in the state object in the component using the hook
    return {
      status: 'completed',
      message: 'Comment added successfully'
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Error adding comment',
      error
    };
  }
}

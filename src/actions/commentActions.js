'use server';

import { addComment } from '../lib/comments';
import { revalidatePath } from 'next/cache';

export async function addCommentAction(prevState, formData) {
  const postId = formData.get('postId');
  const author = formData.get('author');
  const commentText = formData.get('commentText');

  if (!author || !commentText) {
    return {
      status: 'error',
      message: 'Author and comment are required'
    };
  }

  try {
    await addComment(postId, { author, commentText });
    revalidatePath(`/blog/${postId}`);
    return {
      status: 'completed',
      message: 'Comment added successfully'
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Error adding comment'
    };
  }
}

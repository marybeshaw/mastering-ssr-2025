'use server';

import { addComment } from '../lib/comments';
import { revalidatePath } from 'next/cache';

export async function addCommentAction(prevState, formData) {
  const postId = formData.get('postId');
  const author = formData.get('author');
  const message = formData.get('message');

  if (!author || !message) {
    return { message: 'Author and message are required' };
  }

  try {
    await addComment(postId, { author, message });
    revalidatePath(`/blog/${postId}`);
    return { message: 'Comment added successfully' };
  } catch (error) {
    return { message: 'Error adding comment' };
  }
}

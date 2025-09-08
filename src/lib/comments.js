import fs from 'fs/promises';
import path from 'path';

const commentsFilePath = path.join(process.cwd(), 'data', 'comments.json');

export async function getComments(postId) {
  try {
    const data = await fs.readFile(commentsFilePath, 'utf-8');
    const comments = JSON.parse(data);
    const postComments = comments[postId] || {};
    // Convert object of comments to array with comment IDs
    return Object.entries(postComments).map(([id, comment]) => ({
      id,
      ...comment
    }));
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []; // Return empty array if file doesn't exist
    }
    throw error;
  }
}

export async function addComment(postId, comment) {
  try {
    const data = await fs.readFile(commentsFilePath, 'utf-8');
    const comments = JSON.parse(data);
    if (!comments[postId]) {
      comments[postId] = {};
    }
    // Generate a unique comment ID
    const commentId = Date.now().toString() + '-' + Math.random().toString(36).substr(2, 9);
    comments[postId][commentId] = {
      ...comment,
      timestamp: new Date().toISOString()
    };
    await fs.writeFile(commentsFilePath, JSON.stringify(comments, null, 2));
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If file doesn't exist, create it
      const comments = {
        [postId]: {
          [Date.now().toString() + '-' + Math.random().toString(36).substr(2, 9)]: {
            ...comment,
            timestamp: new Date().toISOString()
          }
        }
      };
      await fs.writeFile(commentsFilePath, JSON.stringify(comments, null, 2));
    } else {
      throw error;
    }
  }
}

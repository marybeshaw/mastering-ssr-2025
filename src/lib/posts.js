
import fs from 'fs/promises';
import path from 'path';

// Construct the full path to the posts.json file
const postsFilePath = path.join(process.cwd(), 'data/posts.json');

// Function to get all posts
export async function getPosts() {
  try {
    const data = await fs.readFile(postsFilePath, 'utf-8');
    console.log('Reading posts from file.');
    return JSON.parse(data);
  } catch (error) {
    console.error("Could not read posts.json:", error);
    return [];
  }
}

// Function to get a single post by its slug
export async function getPost(slug) {
  const posts = await getPosts();
  console.log('Finding post with slug:', slug);
  return posts.find((post) => post.slug === slug);
}
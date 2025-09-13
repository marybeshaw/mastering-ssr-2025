import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const likesFilePath = path.join(process.cwd(), "data", "likes.json");

async function getLikes() {
  try {
    console.log('Reading likes from file...');
    const data = await fs.readFile(likesFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return {};
    }
    throw error;
  }
}

async function saveLikes(likes) {
  console.log('Saving likes to file...');
  await fs.writeFile(likesFilePath, JSON.stringify(likes, null, 2));
}

// Read the likes for a post & return value as JSON
export async function GET(request, { params }) {
  const { postId } = await params;
  const likes = await getLikes();
  const postLikes = likes[postId] || 0;
  return NextResponse.json({ likes: postLikes });
}

// Increment likes for a post & return updated value as JSON
export async function POST(request, { params }) {
  const { postId } = await params;
  const likes = await getLikes();
  const postLikes = (likes[postId] || 0) + 1;
  likes[postId] = postLikes;
  await saveLikes(likes);
  return NextResponse.json({ likes: postLikes });
}

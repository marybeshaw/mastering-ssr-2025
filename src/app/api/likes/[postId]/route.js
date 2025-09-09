import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const likesFilePath = path.join(process.cwd(), "data", "likes.json");

async function getLikes() {
  try {
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
  await fs.writeFile(likesFilePath, JSON.stringify(likes, null, 2));
}

export async function GET(request, { params }) {
  const { postId } = await params;
  const likes = await getLikes();
  const postLikes = likes[postId] || 0;
  return NextResponse.json({ likes: postLikes });
}

export async function POST(request, { params }) {
  const { postId } = await params;
  const likes = await getLikes();
  const postLikes = (likes[postId] || 0) + 1;
  likes[postId] = postLikes;
  await saveLikes(likes);
  return NextResponse.json({ likes: postLikes });
}

"use client";

import { hydrateRoot } from "react-dom/client";
import LikesButton from "./components/LikesButton";
import "./styles.css";

const postIds = window.__POST_IDS__ || [];

import CommentForm from "./components/CommentForm";

postIds.forEach((id) => {
  const likesEl = document.querySelector(
    `div[data-likes-root-id='likes-${id}']`,
  );
  if (likesEl) {
    hydrateRoot(likesEl, <LikesButton key={`likes-${id}`} postId={id} />);
  }
  const commentFormEl = document.getElementById(`comment-form-slot-${id}`);
  if (commentFormEl) {
    hydrateRoot(commentFormEl, <CommentForm postId={id} />);
  }
});

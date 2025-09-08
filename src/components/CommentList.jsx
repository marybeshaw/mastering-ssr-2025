import React from 'react';
import IndicatorIcon from './IndicatorIcon';
import CommentForm from './CommentForm';
import { getComments } from '../lib/comments';

const COMPONENT_TYPE = 'server';

export default async function CommentList({ postId }) {
  const comments = await getComments(postId);
  return (
    <div className={COMPONENT_TYPE}>
      <IndicatorIcon type={COMPONENT_TYPE} name="CommentList" />
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.author}</strong>: {comment.message}
              <br />
              <small>{new Date(comment.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
      <CommentForm postId={postId} />
    </div>
  );
}

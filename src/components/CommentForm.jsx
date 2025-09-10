'use client'; // <-- This means "Hybrid!" - Runs on server & client

import React, { useActionState, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addCommentAction } from '../actions/commentActions';
import IndicatorIcon from './IndicatorIcon';

const COMPONENT_TYPE = 'hybrid';

export default function CommentForm({ postId }) {
  const [author, setAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [state, formAction] = useActionState(addCommentAction, {
    message: '',
  });

  // Clear form when comment is successfully submitted
  useEffect(() => {
    if (state.status === 'completed') {
      setAuthor('');
      setCommentText('');
    }
  }, [state.status]);

  return (
    <div className={COMPONENT_TYPE}>
      <IndicatorIcon type={COMPONENT_TYPE} name="CommentForm" />
      <h4>Add a Comment</h4>
      <form action={formAction}>
        <input type="hidden" name="postId" value={postId} />
        
        <div className="form-field">
          <label htmlFor="author">Your Name</label>
          <input
            id="author"
            name="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="commentText">Comment</label>
          <textarea
            id="commentText"
            name="commentText"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share your thoughts..."
            required
          />
        </div>

        <button type="submit">Submit Comment</button>
        {state.message && state.status === 'error' && (
          <p className="status-message error">
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};

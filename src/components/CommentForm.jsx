'use client';

import React, { useState } from 'react';
import { useActionState } from 'react';
import { addCommentAction } from '../actions/commentActions';
import IndicatorIcon from './IndicatorIcon';

const COMPONENT_TYPE = 'client';

export default function CommentForm({ postId }) {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [state, formAction] = useActionState(addCommentAction, {
    message: '',
  });

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
          <label htmlFor="message">Comment</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your thoughts..."
            required
          />
        </div>

        <button type="submit">Submit Comment</button>
        {state.message && (
          <p className={`status-message ${state.message.includes('successfully') ? 'success' : 'error'}`}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}

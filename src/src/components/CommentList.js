"use server";

import React from "react";
import CommentForm from "./CommentForm";
import IndicatorIcon from "./IndicatorIcon.js";
import PropTypes from "prop-types";
import { getComments } from "../../server/data.js";

// Define the component type for this page/component
const COMPONENT_TYPE = "server";

/**
 * This React server component shows the list of comments.
 * It embeds a React client component, which allows users to add new comments via a server action.
 * @param {number} postId postId - The ID of the post to get comments for.
 * @returns {JSX.Element} The rendered CommentList component.
 */
const CommentList = ({ postId }) => {
  const commentList = getComments(postId);

  return (
    <div className={COMPONENT_TYPE}>
      <IndicatorIcon type={COMPONENT_TYPE} name="CommentList" />
      <h3>Comments</h3>
      <ul>
        {commentList.length > 0 ? (
          commentList.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.author}:</strong> {comment.text}
            </li>
          ))
        ) : (
          <li>No comments yet.</li>
        )}
      </ul>
      <div id={`comment-form-slot-${postId}`}>
        <CommentForm />
      </div>
    </div>
  );
};

CommentList.propTypes = {
  postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CommentList;

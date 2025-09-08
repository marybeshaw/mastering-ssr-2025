import React, { useActionState } from "react";
import { addComment } from "../../server/actions/comments.js";
import IndicatorIcon from "./IndicatorIcon";

const COMPONENT_TYPE = "client";

/**
 * CommentForm component for adding comments to a post.
 * @param {number} postId - The ID of the post to add a comment to.
 * @returns {JSX.Element} The rendered CommentForm component.
 */
export default function CommentForm({ postId }) {
  const [actionState, addCommentAction, isPending] = useActionState(
    addComment,
    { error: null },
  );
  // useEffect(() => {
  //   // Right now the list won't change when we submit a comment so we need to do something to fix that.???

  // }, [actionState])
  return (
    <form
      style={{ position: "relative" }}
      action={addCommentAction}
      method="POST"
    >
      <IndicatorIcon type={COMPONENT_TYPE} name="CommentForm" />
      <h3>Add a Comment</h3>
      <input type="hidden" name="postId" value={postId} />
      <input
        type="text"
        name="author"
        placeholder="Your name"
        aria-label="Your name"
        required
        disabled={isPending}
      />
      <textarea
        name="text"
        placeholder="Your comment"
        aria-label="Your comment"
        required
        disabled={isPending}
      />
      <button type="submit" disabled={isPending}>
        {isPending ? "Posting..." : "Post Comment"}
      </button>
      {actionState.error && (
        <div style={{ color: "red" }}>
          Error: {actionState.error.message || actionState.error.toString()}
        </div>
      )}
    </form>
  );
}

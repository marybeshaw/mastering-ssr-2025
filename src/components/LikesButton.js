"use client";

import React, { useState, useEffect, useOptimistic, startTransition } from "react";
import IndicatorIcon from "./IndicatorIcon";
import PropTypes from "prop-types";

// Define the component type for this component - only for display purposes
const COMPONENT_TYPE = "client";

export default function LikesButton ({ postId }) {
  const [likes, setLikes] = useState(0);
  
  // Status is useful waiting for the initial fetch, but once we click the button,
  // useOptimistic makes the status display not necessary because the UI updates immediately.
  const [status, setStatus] = useState("loading");
  
  // Fetch initial likes with a cleanup function
  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchLikes() {
      setStatus("loading");
      try {
        // Here we make an API call and don't use a server action - to show the difference between an API call and
        // a server action (see CommentForm.jsx to see a server action example).
        const res = await fetch(`/api/likes/${postId}`, { signal: controller.signal });
        const data = await res.json();
        setLikes(data.likes);
        setStatus("loaded");
      } catch (e) {
        // If the controller aborts the fetch, it throws an AbortError.
        // We catch it to prevent updating state on an unmounted component.
        if (e.name === 'AbortError') {
          return; // Stop execution
        }
        setLikes(0);
        setStatus("error");
      }
    }
    
    fetchLikes();
    
    // --- This is the cleanup function ---
    // It's returned from the effect and runs when the component unmounts
    // or before the effect runs again if the `postId` changes.
    return () => {
      controller.abort();
    };
  }, [postId]); // The effect re-runs if postId changes.

  // Don't make the user stare at the dumb "loading" text when they don't have to!
  // Set a temporary "pretending the call worked" state and handle the error differently.
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes) => currentLikes + 1
  );
  
  // Handle the like button click with optimistic UI update
  async function handleLike (){
    startTransition(() => {
      addOptimisticLike();
    });
    try {
      const res = await fetch(`/api/likes/${postId}`, { method: "POST" });
      const data = await res.json();
      setLikes(data.likes); // Update the "real" state from the server
    } catch (e) {
      console.error('Error submitting like:', e);
      // React reverts the optimistic state automatically on its own in an error situation
    }
  }
  
  const buttonText =
    status === "loading" ? "Loading..." :
      status === "error" ? "Error" :
        `Like (${optimisticLikes})`;

  // The button now displays the optimistic value for instant feedback
  return (
    <div className={COMPONENT_TYPE}>
      <IndicatorIcon type={COMPONENT_TYPE} name="LikesButton" />
      <button onClick={handleLike} disabled={status === "loading"}>
        {buttonText}
      </button>
    </div>
  );
}

LikesButton.propTypes = {
  postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
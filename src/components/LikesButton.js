"use client";

import React, { useState, useEffect } from "react";

import IndicatorIcon from "./IndicatorIcon";
import PropTypes from "prop-types";

// Define the component type for this component
const COMPONENT_TYPE = "client";

const LikesButton = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [status, setStatus] = useState("loading");

  // Make the network call on the client side to get the list of likes.
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let isActive = true;

    async function fetchLikes() {
      setStatus("loading");
      try {
        const res = await fetch(`/api/likes/${postId}`, { signal });
        if (!isActive) return;
        const data = await res.json();
        setLikes(data.likes);
        setStatus("loaded");
      } catch (e) {
        if (e.name === "AbortError") return;
        setLikes(0);
        setStatus("error");
      }
    }
    fetchLikes();
    return () => {
      isActive = false;
      controller.abort();
    };
  }, [postId]);

  // Make a network call on the server side to add a like.
  // This could also be done via a server action, but this is a client call for demonstration purposes.
  // See the comments components for a server action demeo!
  const handleLike = async () => {
    setStatus("loading");
    try {
      const res = await fetch(`/api/likes/${postId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setLikes(data.likes);
      setStatus("loaded");
    } catch (e) {
      setStatus("error");
      console.error('error submitting like data for post', e);
    }
  };

  let buttonText = "";
  if (status === "loading") buttonText = "Loading...";
  else if (status === "error") buttonText = "Error";
  else buttonText = `Like (${likes})`;

  return (
    <div className={COMPONENT_TYPE} style={{ position: "relative" }}>
      <IndicatorIcon type={COMPONENT_TYPE} name="LikesButton" />
      <button onClick={handleLike} disabled={status === "loading"}>
        {buttonText}
      </button>
    </div>
  );
};

LikesButton.propTypes = {
  postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default LikesButton;


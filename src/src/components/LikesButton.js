"use client";

import React, { useState, useEffect } from "react";

import IndicatorIcon from "./IndicatorIcon";
import PropTypes from "prop-types";

// Define the component type for this component
const COMPONENT_TYPE = "client";

const LikesButton = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [status, setStatus] = useState("loading");

  console.log("LikesButton rendered");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let isActive = true;

    async function fetchLikes() {
      console.log("loading likes for post", postId);
      setStatus("loading");
      try {
        const res = await fetch(`/api/likes/${postId}`, { signal });
        if (!isActive) return;
        const data = await res.json();
        setLikes(data.likes);
        setStatus("loaded");
        console.log("loaded like data for post", data);
      } catch (e) {
        if (e.name === "AbortError") return;
        setLikes(0);
        setStatus("error");
        console.log("error loading data for post", e);
      }
    }
    fetchLikes();
    return () => {
      isActive = false;
      controller.abort();
    };
  }, [postId]);

  const handleLike = async () => {
    setStatus("loading");
    console.log("handling liek for ", postId);
    try {
      const res = await fetch(`/api/likes/${postId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setLikes(data.likes);
      setStatus("loaded");
      console.log("like handled for post", data);
    } catch (e) {
      setStatus("error");
      console.log("error submitting like data for post", e);
    }
  };

  let buttonText = "";
  if (status === "loading") buttonText = "Loading...";
  else if (status === "error") buttonText = "Error";
  else buttonText = `Like (${likes})`;

  return (
    <div className={COMPONENT_TYPE} style={{ position: "relative" }}>
      <IndicatorIcon type={COMPONENT_TYPE} name="BlogPost" />
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

import React from "react";
import PropTypes from "prop-types";

const ICONS = {
  
  // Client components are marked "use client" at the top of the page and render on the server AND the client
  hybrid: { letter: "H", color: "#2196f3" },
  
  // React server components are all on the server
  server: { letter: "S", color: "#43a047" },
};

const IndicatorIcon = ({ type, name, size = 24, className = "" }) => {
  const icon = ICONS[type] || ICONS.server;
  return (
    <span
      className={`indicator-icon ${className}`}
      style={{
        position: "relative",
        float: "right",
        width: size,
        height: size,
        background: icon.color,
        color: "#fff",
        fontWeight: "bold",
        fontSize: size * 0.75,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
        cursor: "pointer",
        verticalAlign: "middle",
      }}
    >
      {icon.letter}
      <span className="indicator-tooltip">
        {name} - {type}
      </span>
    </span>
  );
};

IndicatorIcon.propTypes = {
  type: PropTypes.oneOf(["client", "server"]).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default IndicatorIcon;

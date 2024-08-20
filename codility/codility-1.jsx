import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Formatter({ text, value, config }) {
  const { maxTextLength = 5, showUnformatted = false } = config || {};
  const [isHovered, setIsHovered] = useState(false);

  const formatValue = (val) => {
    if (val >= 1000000) {
      return val >= 10000000
        ? ">"
        : `${Math.round((val / 1000000) * 10) / 10}M`;
    } else if (val >= 1000) {
      return `${Math.round((val / 1000) * 10) / 10}K`;
    } else {
      return Math.round(val);
    }
  };

  const formattedText = `${text.slice(0, maxTextLength)}${
    text.length > maxTextLength ? "..." : ""
  }`;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <span
        data-testid="text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {formattedText}
      </span>
      <span
        data-testid="value"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {formatValue(value)}
      </span>
      {isHovered && showUnformatted && <span>{`${text}: ${value}`}</span>}
    </>
  );
}

Formatter.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  config: PropTypes.shape({
    maxTextLength: PropTypes.number,
    showUnformatted: PropTypes.bool,
  }),
};

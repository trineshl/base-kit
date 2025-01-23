import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import clsx from "clsx";

const Spinner = ({ size = 50, isPrimary = true }) => {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderWidth: `${size / 8}px`, // Adjust border thickness relative to size
  };

  return <span className="bk-spinner-container">
    <div className={clsx("bk-spinner", {
      "primary": isPrimary,
      "primary-invert": !isPrimary
    })} style={spinnerStyle}></div>
  </span>;
};

Spinner.propTypes = {
  size: PropTypes.number,
};

export default Spinner;
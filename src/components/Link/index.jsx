import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import clsx from "clsx";

export const Link = ({ label, onClick, ...props }) => (
  <a onClick={onClick} className={clsx('ubk-link', props.className)} {...props}>
    {label}
  </a>
);

Link.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Link;
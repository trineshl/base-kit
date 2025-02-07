import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import clsx from "clsx";

export const Link = ({ label, onClick, ...props }) => (
  <a onClick={onClick} {...props} className={clsx('bk-link', props.className)}>
    {label}
  </a>
);

Link.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Link;
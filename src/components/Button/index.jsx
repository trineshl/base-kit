import React from "react";
import PropTypes from "prop-types";
import "../../common.css"
import "./index.css";
import clsx from "clsx";

export const Button = ({ label, onClick, isPrimary = false, className = '', ...props }) => (
  <button
    onClick={onClick}
    className={clsx("ubk-button", { 'bk-primary': isPrimary }, className)}
    {...props}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isPrimary: PropTypes.bool,
  className: PropTypes.any
};

export default Button;
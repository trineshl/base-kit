import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../Spinner";

export const Button = ({ label, onClick, isPrimary = false, className = '',
  icon, iconProps = {}, rightIcon, rightIconProps = {}, loading, disabled, ...props }) => {

  const getIcon = () => {
    if (loading) return <Spinner size={14} isPrimary={!isPrimary} />;
    if (icon) return <FontAwesomeIcon icon={icon} {...iconProps} size={iconProps.size || "lg"} />;
    return;
  };

  const getRightIcon = () => {
    if (rightIcon) return <FontAwesomeIcon icon={rightIcon} {...rightIconProps} size={rightIconProps.size || "lg"} />;
    return;
  };

  const isDisabled = disabled || loading;

  return (<span className="ubk-button-container">
    <button
      onClick={onClick}
      disabled={isDisabled}
      {...props}
      className={clsx("ubk-button", {
        'ubk-primary': isPrimary,
        'ubk-primary-invert ubk-button-ordinary': !isPrimary,
        'ubk-button-loading': loading,
        'ubk-disabled ubk-button-disabled': disabled,
      }, className)}>
      {getIcon()}
      {label}
      {getRightIcon()}
    </button>
  </span>);
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isPrimary: PropTypes.bool,
  className: PropTypes.any
};

export default Button;
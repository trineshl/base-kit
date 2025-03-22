import React, { memo } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../Spinner";

const Button = ({ label, onClick, isPrimary = false, className = '',
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

  return (<span className="bk-button-container">
    <button
      onClick={onClick}
      disabled={isDisabled}
      {...props}
      className={clsx("bk-button", {
        'bk-primary': isPrimary,
        'bk-primary-invert bk-button-ordinary': !isPrimary,
        'bk-button-loading': loading,
        'bk-disabled bk-button-disabled': disabled,
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

export default memo(Button);
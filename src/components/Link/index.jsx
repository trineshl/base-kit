import React, { memo } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import clsx from "clsx";

const Link = ({ children, onClick, canAddDefaultCls = true, ...props }) => (
  <a onClick={onClick} {...props} className={clsx(props.className, {
    'bk-link': canAddDefaultCls
  })}>
    {children}
  </a>
);

Link.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  canAddDefaultCls: PropTypes.bool
};

export default memo(Link);
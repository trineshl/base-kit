import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = ({
  id,
  icon,
  text,
  helpText,
  onClick, 
  ...props
}) => {

  const handleOnClick = () => {
    if (!onClick) return;
    onClick(id);
  };

  return (
    <div className="list-item" key={id} onClick={handleOnClick} {...props}>
      {icon && <FontAwesomeIcon icon={icon} className="list-item-icon" />}
      <div className="list-item-content">
        <span className="list-item-text">{text}</span>
        {helpText && <span className="list-item-help-text">{helpText}</span>}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.object,
  text: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  onClick: PropTypes.func
};

export default memo(ListItem);
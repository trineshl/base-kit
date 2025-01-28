import React, { useImperativeHandle, useRef } from 'react';
import './index.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const generateUniqueId = () => `text-field-${Math.random().toString(36).substr(2, 9)}`;

export const InputField = ({
  type = 'text',
  fieldLabel,
  labelAlign = 'top', //it can be top or left
  inputFieldProps = {},
  labelProps = {},
  ref,
  triggerConfig = null,
  onClick = () => { }
}) => {
  const uniqueId = useRef(generateUniqueId()).current;
  const isLblTopAligned = labelAlign === 'top';
  const inputRef = useRef(null);
  const inputFieldRef = ref || inputRef;

  useImperativeHandle(inputFieldRef, () => {
    return {
      focus: () => {
        inputFieldRef.current.focus();
      }
    };
  }, []);

  return (
    <div onClick={onClick} className={clsx('bk-text-field-container', {
      'top-align': isLblTopAligned
    })}>
      {fieldLabel && <label htmlFor={uniqueId}
        {...labelProps}
        className={clsx('label', (isLblTopAligned ? 'label-top-align' : 'label-left-align'), labelProps.className)}>
        {fieldLabel}{!isLblTopAligned && ':'}
      </label>}
      <span className='input-field-container'>
        <input ref={inputFieldRef} type={type} id={uniqueId}
          {...inputFieldProps}
          className={clsx('text-field', {
            'top-align': isLblTopAligned,
            'input-field-cls-if-trigger-if-left': (triggerConfig && triggerConfig.position === 'left'),
            'input-field-cls-if-trigger-if-right': (triggerConfig && triggerConfig.position === 'right')
          }, inputFieldProps.className)} />
        {triggerConfig && (
          <FontAwesomeIcon
            icon={triggerConfig.icon}
            onClick={triggerConfig.onClick}
            {...triggerConfig?.iconProps}
            className={clsx(triggerConfig?.className, 'triggerIconCls', {
              'right': triggerConfig?.position === 'right',
            })}
          />
        )}
      </span>
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  fieldLabel: PropTypes.string,
  labelAlign: PropTypes.oneOf(['top', 'left']),
  inputFieldProps: PropTypes.object,
  labelProps: PropTypes.object,
  ref: PropTypes.object,
  triggerConfig: PropTypes.shape({
    icon: PropTypes.object,
    iconProps: PropTypes.object,
    onClick: PropTypes.func
  })
};

export default InputField;
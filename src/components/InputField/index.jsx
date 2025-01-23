import React, { useImperativeHandle, useRef } from 'react';
import './index.scss';
import clsx from 'clsx';

const generateUniqueId = () => `text-field-${Math.random().toString(36).substr(2, 9)}`;

export const InputField = ({
  type = 'text',
  fieldLabel,
  labelAlign = 'top', //it can be top or left
  inputFieldProps = {},
  labelProps = {},
  ref
}) => {
  const uniqueId = useRef(generateUniqueId()).current;
  const isLblTopAligned = labelAlign === 'top';
  const inputRef = ref || useRef(null);

  useImperativeHandle(inputRef, () => {
    return {
      focus: () => {
        inputRef.current.focus();
      }
    };
  }, []);

  return (
    <div className={clsx('bk-text-field-container', {
      'top-align': isLblTopAligned
    })}>
      {fieldLabel && <label htmlFor={uniqueId}
        {...labelProps}
        className={clsx('label', (isLblTopAligned ? 'label-top-align' : 'label-left-align'), labelProps.className)}>
        {fieldLabel}{!isLblTopAligned && ':'}
      </label>}
      <input ref={inputRef} type={type} id={uniqueId}
        {...inputFieldProps}
        className={clsx('text-field', {
          'top-align': isLblTopAligned
        }, inputFieldProps.className)} />
    </div>
  );
}

export default InputField;
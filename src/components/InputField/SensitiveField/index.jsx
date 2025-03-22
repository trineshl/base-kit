import React, { memo, useState } from 'react';
import './index.scss';
import InputField from '..';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SensitiveField = ({
  fieldType = 'text',
  defaultHidden = true,
  ...props }) => {

  const [showPassword, setShowPassword] = useState(!defaultHidden);

  return (
    <InputField
      type={showPassword ? fieldType : 'password'}
      triggerConfig={{
        icon: showPassword ? faEyeSlash : faEye,
        iconProps: { size: 'sm', ...props?.iconProps },
        onClick: () => setShowPassword(!showPassword),
        position: 'right'
      }}
      {...props} />
  );
};

export default memo(SensitiveField);
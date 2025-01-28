import React from 'react';
import './index.scss';
import InputField from '..';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Picker from '../../Picker';

export const Combobox = ({ btnProps = {}, ...props }) => {

  return (
    <Picker
      MainComponent={InputField}
      mainComponentProps={{
        inputFieldProps: {
          placeholder: 'Select...',
          ...props?.inputFieldProps
        },
        triggerConfig: {
          icon: faChevronDown,
          iconProps: { size: 'xs', ...props?.iconProps },
          position: 'right'
        }
      }}
      picker={
        <div>
          Hello World
        </div>
      }
    />
  );
};

export default Combobox;
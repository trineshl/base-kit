import React, { memo, useRef } from 'react';
import './index.scss';
import InputField from '..';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Picker from '../../Picker';
import ListItem from '../../ListItem';
import { getValueByAttribute } from '../../../utils/generic-utils';

const Combobox = ({
  items,
  displayField = 'text',
  valueField = 'value',
  value,
  onChange = () => { },
  ...props
}) => {
  const ref = useRef(null);

  const handleOnPickerClick = (e) => {
    e.stopPropagation();

    const value = getValueByAttribute(e, 'value', 'picker-top-el');
    if (!value) return;

    ref.current.closePicker();
    onChange(value, items.find(item => item[valueField] === value));
  };

  return (
    <Picker
      MainComponent={InputField}
      mainComponentRefProfPath='inputFieldContainerProps'
      renderPickerUnder='inputFieldContainerChildren'
      enableToggleFunctionality={false}
      ref={ref}
      mainComponentProps={{
        inputFieldProps: {
          placeholder: 'Select...',
          ...props?.inputFieldProps
        },
        triggerConfig: {
          icon: faChevronDown,
          iconProps: { size: 'xs', ...props?.iconProps },
          position: 'right'
        },
        ...props
      }}
      picker={
        <div onClick={handleOnPickerClick} picker-top-el='true'>
          {items && items?.map((item, index) => (
            <ListItem
              key={item.id + 'base'}
              value={item[valueField]}
              text={item[displayField]}
              {...item}
            />
          ))}
        </div>
      }
    />
  );
};

export default memo(Combobox);
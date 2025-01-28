import React from 'react';
import './index.scss';
import Picker from '../../Picker';
import Button from '..';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuButton = ({ btnProps, menuItems }) => {
  return (
    <div className='bk-menu-button'>
      <Picker
        MainComponent={Button}
        mainComponentProps={{
          rightIcon: faChevronDown,
          rightIconProps: { size: 'sm' },
          ...btnProps
        }}
        picker={
          <div>
            {menuItems?.map((item, index) => (
              <span key={item.id} className='menu-item' onClick={item?.onClick}>
                <FontAwesomeIcon icon={item.icon} {...item?.iconProps} size={item?.iconProps?.size || "sm"} />
                {item.label}
              </span>
            ))}
          </div>
        }
      />
    </div>
  )
}

export default MenuButton;
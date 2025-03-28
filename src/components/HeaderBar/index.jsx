import React, { memo, useState } from 'react';
import Link from '../Link';
import Button from '../Button';
import Picker from '../Picker';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import './index.scss';
import PropTypes from 'prop-types';
import MenuButton from '../Button/MenuButton';

const HeaderBar = ({ header, centerMenuItems = [], rightMenuItems = [] }) => {
  const [responsiveMenuOpen, setResponsiveMenuOpen] = useState(false);

  const getNavBtn = (fromPicker, nav) => {
    const { id, label, icon, iconProps = {}, btnType, menuItems, ...otherProps } = nav;

    if (btnType === 'btn') {
      return (<Button key={id} className='ml-10 main-btn' label={label} icon={icon} iconProps={iconProps} {...otherProps} />);
    }

    if (btnType === 'menuBtn') {
      return (
        <MenuButton
          key={id}
          btnProps={{
            className: 'ml-10 main-btn',
            label: label,
            iconProps: iconProps,
            icon: icon,
            ...otherProps
          }}
          menuItems={menuItems}
        />
      );
    }

    return (
      <Link key={id} className={clsx('bk-header-right-item', { 'bk-header-menu': fromPicker })} canAddDefaultCls={fromPicker} {...otherProps}>
        {icon && <FontAwesomeIcon icon={icon} {...iconProps} size={iconProps.size || "sm"} />}
        <label className='link-label'>{label}</label>
      </Link>
    )
  };

  const getMenuItems = (fromPicker) => (
    <>
      <span className='flex-1'></span>
      {centerMenuItems.map((nav) => getNavBtn(fromPicker, nav))}
      <span className='flex-1'></span>
      {rightMenuItems.map((nav) => getNavBtn(fromPicker, nav))}
    </>
  );

  return (
    <header className='bk-header'>
      <h1 className='bk-header-title'>{header}</h1>

      <section className='bk-header-toggle flex-1' onClick={() => setResponsiveMenuOpen(!responsiveMenuOpen)}>
        <span className='flex-1'></span>
        <Picker
          MainComponent={Button}
          mainComponentProps={{
            rightIcon: faBars,
            rightIconProps: { size: 'sm' },
            className: 'bk-header-toggle'
          }}
          pickerProps={{
            style: {
              right: 0,
              width: '20rem'
            }
          }}
          picker={
            <div className='bk-header-picker'>
              {getMenuItems(true)}
            </div>
          }
        />
      </section>

      <nav className={`bk-header-right flex-1`}>
        {getMenuItems(false)}
      </nav>
    </header>
  );
};

HeaderBar.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  centerMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.object,
      iconProps: PropTypes.object,
      btnType: PropTypes.oneOf(['btn', 'menuBtn'])
    })
  ),
  rightMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.object,
      iconProps: PropTypes.object,
      btnType: PropTypes.oneOf(['btn', 'menuBtn'])
    })
  )
};

export default memo(HeaderBar);
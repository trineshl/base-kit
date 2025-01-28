import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import clsx from 'clsx';

export const Picker = ({ MainComponent, mainComponentProps, picker, pickerProps }) => {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (pickerRef.current && !pickerRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={pickerRef} className="bk-picker-container">
      {<MainComponent
        {...mainComponentProps}
        onClick={() => {
          if (mainComponentProps?.onClick && mainComponentProps.onClick() === false) return;
          setOpen(!open);
        }}
      />}
      {open && <div className={clsx('picker')}
        {...pickerProps}
        style={{ width: (pickerRef.current?.offsetWidth - 2), ...pickerProps?.style }}
      >
        {picker}
      </div>}
    </div>
  );
};

export default Picker;
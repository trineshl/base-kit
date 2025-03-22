import React, { memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import './index.scss';
import clsx from 'clsx';

const Picker = ({
  MainComponent,
  mainComponentProps,
  picker,
  pickerProps,
  ref,

  //picker will get render here, if passed, otherwise after component.
  renderPickerUnder,
  //This is required if picker is going to render at different position
  mainComponentRefProfPath,

  //This will ensure to close the picker if user has clicked on same component again.
  enableToggleFunctionality = true
}) => {

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

  useImperativeHandle(ref, () => ({
    closePicker: () => setOpen(false)
  }), [setOpen]);

  const pickerStyleObj = () => {

    return {
      minWidth: pickerRef.current?.offsetWidth - 1,
      maxHeight: window.innerHeight * 0.4,
      ...pickerProps?.style
    };
  };

  const pickerCmp = () => open && (
    <div
      className={clsx('picker')}
      {...pickerProps}
      style={pickerStyleObj()}
    >
      {picker}
    </div>
  );

  const mainComCalculatedProps = () => {
    const calculatedProps = {
      ...mainComponentProps,
      onClick: () => {
        if (mainComponentProps?.onClick && mainComponentProps.onClick() === false) return;

        const newValue = !open;
        if (newValue === false && enableToggleFunctionality === false) {
          return;
        }

        setOpen(newValue);
      }
    };

    if (mainComponentRefProfPath) {
      const particularCmpPath = calculatedProps[mainComponentRefProfPath] || {};
      particularCmpPath.ref = pickerRef;
      calculatedProps[mainComponentRefProfPath] = particularCmpPath;
    }

    if (renderPickerUnder) {
      calculatedProps[renderPickerUnder] = pickerCmp();
    }

    return calculatedProps;
  };

  return (
    <div className="bk-picker-container" {...(mainComponentRefProfPath ? {} : { ref: pickerRef })}>
      {<MainComponent
        {...mainComCalculatedProps()}
      />}
      {!renderPickerUnder && pickerCmp()}
    </div>
  );
};

export default memo(Picker);
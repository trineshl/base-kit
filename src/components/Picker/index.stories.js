import React from 'react';
import { fn } from '@storybook/test';
import { Picker } from './index';
import Button from '../Button/index';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Picker',
  component: Picker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PickerCs = {
  args: {
    MainComponent: Button,
    mainComponentProps: {
      label: 'Picker Example',
      rightIcon: faChevronDown,
      rightIconProps: { size: 'sm' }
    },
    picker: 'Picker Content'
  }
};
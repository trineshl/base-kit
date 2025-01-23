import { fn } from '@storybook/test';
import { InputField } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/InputField',
  component: InputField,
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
export const TextFieldLeftAlign = {
  args: {
    fieldLabel: 'Label Left Align',
    labelAlign: 'left'
  }
};

export const TextFieldTopAlign = {
  args: {
    fieldLabel: 'Label Top Align',
    labelAlign: 'top'
  }
};
export const TextFieldWithPlaceholder = {
  args: {
    fieldLabel: 'Label with Placeholder',
    labelAlign: 'top',
    inputFieldProps: { placeholder: 'Enter text here' }
  }
};

export const TextFieldWithCustomClass = {
  args: {
    fieldLabel: 'Label with Custom Class',
    labelAlign: 'left',
    inputFieldProps: { className: 'custom-input-class' },
    labelProps: { className: 'custom-label-class' }
  }
};

export const PasswordField = {
  args: {
    fieldLabel: 'Password Field',
    labelAlign: 'top',
    type: 'password'
  }
};

export const EmailField = {
  args: {
    fieldLabel: 'Email Field',
    labelAlign: 'left',
    type: 'email'
  }
};

export const CheckboxField = {
  args: {
    fieldLabel: 'Checkbox Field',
    labelAlign: 'left',
    type: 'checkbox'
  }
};
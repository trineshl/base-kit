import { fn } from '@storybook/test';
import InputField from './index';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

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

export const DisabledTextField = {
  args: {
    fieldLabel: 'Disabled Field',
    labelAlign: 'top',
    inputFieldProps: { disabled: true }
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

export const NumberField = {
  args: {
    fieldLabel: 'Number Field',
    labelAlign: 'left',
    type: 'number'
  }
};

export const InputFieldWithTrigger = {
  args: {
    type: 'text',
    inputFieldProps: { placeholder: 'Search text...' },
    triggerConfig: {
      icon: faSearch,
      iconProps: { size: 'sm' },
      onClick: fn(),
      position: 'left'
    }
  }
};

export const DateField = {
  args: {
    type: 'date',
    fieldLabel: 'Date Field',
    labelAlign: 'left'
  }
};
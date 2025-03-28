import { fn } from '@storybook/test';
import Button from './index';
import { faSave, faUndo } from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    isPrimary: true,
    label: 'Save and Continue',
    icon: faSave,
  },
};

export const PrimaryLoading = {
  args: {
    isPrimary: true,
    label: 'Save and Continue',
    icon: faSave,
    loading: true,
  },
};

export const PrimaryDisabled = {
  args: {
    isPrimary: true,
    label: 'Save and Continue',
    icon: faSave,
    disabled: true,
  },
};

export const Ordinary = {
  args: {
    label: 'Cancel',
    icon: faUndo
  }
};

export const OrdinaryLoading = {
  args: {
    label: 'Cancel',
    loading: true,
    icon: faUndo,
  }
};

export const OrdinaryDisabled = {
  args: {
    label: 'Cancel',
    icon: faUndo,
    disabled: true,
  }
};


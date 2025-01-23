import { fn } from '@storybook/test';
import Spinner from '.';

export default {
  title: 'Example/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { onClick: fn() },
};

export const SpinnerIcon = {
  args: {
    size: 30
  }
};
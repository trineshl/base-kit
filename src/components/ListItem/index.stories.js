import { fn } from '@storybook/test';
import ListItem from './index';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/ListItem',
  component: ListItem,
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

export const ListItemWithText = {
  args: {
    text: 'Hey there!'
  }
};

export const ListItemWithIcon = {
  args: {
    icon: faUser,
    text: 'Hey there!', 
    helpText: 'Some random text',
  }
};
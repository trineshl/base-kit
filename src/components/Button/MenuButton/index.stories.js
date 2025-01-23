import { fn } from '@storybook/test';
import MenuButton from './index';
import { faBaby, faNewspaper, faPen } from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button/MenuButton',
  component: MenuButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
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
export const MenuPrimary = {
  args: {
    btnProps: {
      isPrimary: true,
      label: 'Create new record using',
      icon: faNewspaper
    },
    menuItems: [
      { label: 'Form Item 1', icon: faBaby, id: 'item1', onClick: fn() },
      { label: 'Form Item 2', icon: faPen, id: 'item2', onClick: fn() },
    ]
  },
};

export const MenuOrdinary = {
  args: {
    btnProps: {
      isPrimary: false,
      label: 'Create new record using',
      icon: faNewspaper
    },
    menuItems: [
      { label: 'Form Item 1', icon: faBaby, id: 'item1', onClick: fn() },
      { label: 'Form Item 2', icon: faPen, id: 'item2', onClick: fn() },
    ]
  },
};
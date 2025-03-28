import { fn } from '@storybook/test';
import HeaderBar from './index';
import { faAdd, faBaby, faPen, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/HeaderBar',
  component: HeaderBar,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //   layout: 'centered',
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Header = {
  args: {
    header: 'Header Text',
    centerMenuItems: [
      { label: 'Solutions', id: 'Home' },
      { label: 'Templates', icon: null, id: 'Templates' },
      { label: 'Pricing', icon: null, id: 'Pricing' },
      { label: 'Resources', icon: null, id: 'Resources' },
      { label: '', icon: faSearch, tooltip: 'Search', id: 'search' },
    ],
    rightMenuItems: [
      { label: 'Login', icon: faUserAlt, id: 'Login' },
      { label: 'Sign Up', icon: faAdd, id: 'signup' },
      { label: 'Start a free trial', id: 'free-trail', isPrimary: true, btnType: 'btn' },
    ]
  }
};

export const HeaderDropdownActions = {
  args: {
    header: 'Header Text',
    centerMenuItems: [
      { label: 'Solutions', id: 'Home' },
      { label: 'Templates', icon: null, id: 'Templates' },
      { label: 'Pricing', icon: null, id: 'Pricing' },
      { label: 'Resources', icon: null, id: 'Resources' },
      { label: '', icon: faSearch, tooltip: 'Search', id: 'search' },
    ],
    rightMenuItems: [
      {
        label: 'Account', id: 'free-trail', icon: faUserAlt, isPrimary: true, btnType: 'menuBtn', iconProps: { size: 'sm' },
        menuItems: [
          { label: 'Settings', icon: faBaby, id: 'item1', onClick: fn() },
          { label: 'Logout', icon: faPen, id: 'item2', onClick: fn() },
        ]
      }
    ]
  }
};
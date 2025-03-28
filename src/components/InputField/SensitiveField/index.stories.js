import { fn } from '@storybook/test';
import SensitiveField from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/InputField/SensitiveField',
  component: SensitiveField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export const SensitiveInputField = {
  args: {
    fieldLabel: 'Sensitive Field',
    labelAlign: 'left'
  }
};

// export const SensitiveDateField = {
//   args: {
//     type: 'date',
//     fieldLabel: 'Date Field',
//     labelAlign: 'left',
//     inputFieldProps: {
//       style: {
//         width: 200
//       }
//     }
//   }
// };
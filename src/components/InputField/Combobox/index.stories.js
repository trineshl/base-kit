import { fn } from '@storybook/test';
import Combobox from './index';
import { faFaceAngry, faPieChart } from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/InputField/Combobox',
  component: Combobox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    // docs: {
    //   container: ({ children }) => (
    //     <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
    //       {children}
    //     </div>
    //   ),
    // },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export const ComboboxField = {
  args: {
    fieldLabel: 'Combobox Field',
    labelAlign: 'left',
    valueField: 'id',
    onChange: (value, item) => {
      console.log('onChange', value, item);
    },
    items: [
      {
        id: '1',
        text: 'Item 1',
      },
      {
        id: '2',
        text: 'Item 2',
      },
      {
        id: '3',
        text: 'Item 3',
        icon: faFaceAngry,
      },

      {
        id: '4',
        text: 'Item 4',
        icon: faFaceAngry,
      },
      {
        id: '5',
        text: 'Item 5',
        helpText: 'Some random text',
        icon: faPieChart,
      },
      {
        id: '6',
        text: 'Item 6',
        helpText: 'Some random text Some random text Some random text Some random text ',
        icon: faPieChart,
      }
    ]
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
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropdownCheckbox from '../components/DropdownCheckbox/DropdownCheckbox';

export default {
  title: 'Example/DropdownCheckbox',
  component: DropdownCheckbox,
} as ComponentMeta<typeof DropdownCheckbox>;

const Template: ComponentStory<typeof DropdownCheckbox> = (args) => <DropdownCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Dropdowns',
  options: [
    { text: 'first', value: 'first' },
    { text: 'second', value: 'second' },
    { text: 'third', value: 'third' },
  ],
};

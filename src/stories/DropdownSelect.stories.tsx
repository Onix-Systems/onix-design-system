import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropdownSelect from '../components/DropdownSelect/DropdownSelect';

export default {
  title: 'Example/DropdownSelect',
  component: DropdownSelect,
} as ComponentMeta<typeof DropdownSelect>;

const Template: ComponentStory<typeof DropdownSelect> = (args) => <DropdownSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'DropdownSelect',
  options: [
    { text: 'first', value: 'first' },
    { text: 'second', value: 'second' },
    { text: 'third', value: 'third' },
  ],
  placeholder: 'placeholder',
};

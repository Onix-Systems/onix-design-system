import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '../components/Dropdown/Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'dropdown',
  options: [
    { text: 'first', value: 'first' },
    { text: 'second', value: 'second' },
    { text: 'third', value: 'third' },
  ],
  placeholder: 'placeholder',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputFilterDropdown from '../components/InputFilterDropdown/InputFilterDropdown';

export default {
  title: 'Example/InputFilterDropdown',
  component: InputFilterDropdown,
} as ComponentMeta<typeof InputFilterDropdown>;

const Template: ComponentStory<typeof InputFilterDropdown> = (args) => <InputFilterDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  filters: [
    { text: 'one', checked: true },
    { text: 'two', checked: false },
    { text: 'three', checked: false },
  ],
  heading: 'heading',
  buttonText: 'button text',
};

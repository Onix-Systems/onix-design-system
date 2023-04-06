import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextButton from '../components/TextButton/TextButton';

export default {
  title: 'Example/TextButton',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

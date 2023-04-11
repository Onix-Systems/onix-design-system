import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VerticalArrow from '../components/VerticalArrow/VerticalArrow';

export default {
  title: 'Example/VerticalArrow',
  component: VerticalArrow,
} as ComponentMeta<typeof VerticalArrow>;

const Template: ComponentStory<typeof VerticalArrow> = (args) => <VerticalArrow {...args} />;

export const Default = Template.bind({});
Default.args = {
  arrowDirection: 'up',
};

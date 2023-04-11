import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HorizontalArrow from '../components/HorizontalArrows/HorizontalArrow';

export default {
  title: 'Example/HorizontalArrow',
  component: HorizontalArrow,
} as ComponentMeta<typeof HorizontalArrow>;

const Template: ComponentStory<typeof HorizontalArrow> = (args) => <HorizontalArrow {...args} />;

export const Default = Template.bind({});
Default.args = {
  arrowDirection: 'up',
};

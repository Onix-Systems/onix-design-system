import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Arrow from '../components/Arrow/Arrow';

export default {
  title: 'Example/Arrow',
  component: Arrow,
} as ComponentMeta<typeof Arrow>;

const Template: ComponentStory<typeof Arrow> = (args) => <Arrow {...args} />;

export const Default = Template.bind({});
Default.args = {
  arrowDirection: 'up',
};

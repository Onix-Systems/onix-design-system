import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Bell from '../components/Bell/Bell';

export default {
  title: 'Example/Bell',
  component: Bell,
} as ComponentMeta<typeof Bell>;

const Template: ComponentStory<typeof Bell> = (args) => <Bell {...args} />;

export const Default = Template.bind({});
Default.args = {};

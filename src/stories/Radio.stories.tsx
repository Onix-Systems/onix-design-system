import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Radio from '../components/Radio/Radio';

export default {
  title: 'Example/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {};

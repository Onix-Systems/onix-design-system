import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RadioGroup from '../components/Radio/RadioGroup';
import Radio from '../components/Radio/Radio';

export default {
  title: 'Example/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <Radio label="Radio1" />,
    <Radio label="Radio2" />,
    <Radio label="Radio3" />,
    <Radio label="Radio4" />,
  ],
};

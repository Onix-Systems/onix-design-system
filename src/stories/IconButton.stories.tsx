import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconButton from '../components/IconButton/IconButton';
import { MoreIcon } from '../components/Icons';

export default {
  title: 'Test/IconButton',
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Base = Template.bind({});
Base.args = {
  icon: <MoreIcon />,
};

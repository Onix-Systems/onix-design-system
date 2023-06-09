import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../components/Header/Header';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    name: 'Ivan Honcharenko',
    photo: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
  },
};

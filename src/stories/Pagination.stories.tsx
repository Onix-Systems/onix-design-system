import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from '../components/Pagination/Pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = ({ ...args }) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 3,
  perPage: 2,
  lastPage: 8,
  total: 8,
  setPage: () => {},
};

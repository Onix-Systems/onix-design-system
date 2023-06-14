import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MonthPicker from '../components/MonthPicker/MonthPicker';

export default {
  title: 'Example/MonthPicker',
  component: MonthPicker,
} as ComponentMeta<typeof MonthPicker>;

const Template: ComponentStory<typeof MonthPicker> = (args) => <MonthPicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: () => {},
  yearRange: {
    minYear: 2020,
    maxYear: 2025,
  },
  monthInt: 202310,
};

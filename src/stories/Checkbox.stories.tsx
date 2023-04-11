import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Checkbox from '../components/Checkbox/Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;
export const Default = () => (
  <Checkbox id="1" />
);

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UploadFiles from '../components/UploadFiles/UploadFiles';

export default {
  title: 'Example/UploadFiles',
  component: UploadFiles,
} as ComponentMeta<typeof UploadFiles>;

const Template: ComponentStory<typeof UploadFiles> = (args) => <UploadFiles {...args} />;

export const Default = Template.bind({});
Default.args = {
  files: [],
};

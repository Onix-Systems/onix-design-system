import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WarningModal from '../components/WarningModal/WarningModal';
import { Button } from '../components';
import { Colors, Sizes, Variants } from '../constants/general';

export default {
  title: 'Example/WarningModal',
  component: WarningModal,
} as ComponentMeta<typeof WarningModal>;

const Template: ComponentStory<typeof WarningModal> = (props) => <WarningModal {...props} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Warning!',
  text: 'The name can not contain information about rates.',
  buttonLeft: <Button text="Save Anyway" variant={Variants.Outlined} color={Colors.Primary} size={Sizes.Big} />,
  buttonRight: <Button text="Back to Editing" variant={Variants.Contained} color={Colors.Primary} size={Sizes.Big} />,
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  H1, TextLarge, TextLargeBold, TextBig, TextBigBold, TextMedium, TextMediumBold, TextSmall, TextExtraSmall,
} from '../components/Typography/Typography';

export default {
  title: 'Example/Typography',
  component: H1,
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = () => (
  <>
    <H1>H1 Inter Semi bold 24</H1>
    <TextLarge>Subtitle Inter Regular 16</TextLarge>
    <TextLargeBold>Subtitle Inter Semi bold 16</TextLargeBold>
    <TextBig>Body Inter Semi bold 14</TextBig>
    <TextBigBold>Body Inter Regular 14</TextBigBold>
    <TextMedium>Body small Inter Semi bold 13</TextMedium>
    <TextMediumBold>Body small Inter Regular 13</TextMediumBold>
    <TextSmall>Caption Inter Semi bold  12</TextSmall>
    <TextExtraSmall>Caption small Inter Regular 10</TextExtraSmall>
  </>
);

export const Default = Template.bind({});
Default.args = {};

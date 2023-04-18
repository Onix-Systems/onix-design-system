import { ComponentPropsWithRef } from 'react';
import { BallPulseColors } from '../../../../constants/general';

export interface IBallPulseProps extends ComponentPropsWithRef<'div'> {
  color?: BallPulseColors,
}

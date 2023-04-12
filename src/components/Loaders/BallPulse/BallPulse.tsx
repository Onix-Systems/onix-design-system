import React, { FC } from 'react';
import { IBallPulseProps } from './interfaces/IBallPulse';
import { EBallPulseColorsExtender } from '../../../constants/tsConstants';
import styles from './sass/BallPulse.module.scss';

const BallPulse: FC<IBallPulseProps> = ({
  className = '',
  color = EBallPulseColorsExtender.WHITE,
}) => (
  <div className={`${styles.wrapper} ${styles[color]} ${className}`}>
    <div />
    <div />
    <div />
  </div>
);

export default BallPulse;

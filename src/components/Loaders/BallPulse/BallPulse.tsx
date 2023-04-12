import React, { FC } from 'react';
import { IBallPulseProps } from './interfaces/IBallPulse';
import { BallPulseColorsExtender } from '../../../constants/general';
import styles from './sass/BallPulse.module.scss';

const BallPulse: FC<IBallPulseProps> = ({
  className = '',
  color = BallPulseColorsExtender.White,
}) => (
  <div className={`${styles.wrapper} ${styles[color]} ${className}`}>
    <div />
    <div />
    <div />
  </div>
);

export default BallPulse;

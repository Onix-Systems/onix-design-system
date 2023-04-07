import React, { FC, memo } from 'react';
import IconButton from '../IconButton/IconButton';
import { ICloseButton } from './interfaces/ICloseButton';
import CloseIcon from '../../asset/close.svg';

const CloseButton: FC<ICloseButton> = ({
  onPress,
  isDisabled,
  buttonClass,
}) => (
  <IconButton buttonClass={buttonClass} isDisabled={isDisabled} onPress={onPress} icon={CloseIcon} />
);

export default memo(CloseButton);

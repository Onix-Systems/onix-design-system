import React, { FC } from 'react';
import Modal from '../Modal/Modal';
import { H1, TextBig } from '../Typography/Typography';
import { IWarningModal } from './interfaces/IWarningModal';
import styles from './sass/WarningModal.module.scss';

import { WarningIcon, CloseIcon } from '../Icons';
import IconButton from '../IconButton/IconButton';

const WarningModal: FC<IWarningModal> = ({
  title, text, buttonLeft, buttonRight, onClose,
}) => (
  <Modal>
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.headingLeft}>
          <WarningIcon />
          <H1>{title}</H1>
        </div>
        <IconButton className={styles.closeButton} icon={<CloseIcon />} onClick={onClose} />
      </div>
      <div className={styles.textContainer}><TextBig>{text}</TextBig></div>
      <div className={styles.buttonContainer}>
        {buttonLeft}
        {buttonRight}
      </div>
    </div>
  </Modal>
);

export default WarningModal;

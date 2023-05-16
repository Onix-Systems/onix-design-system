import React, { FC } from 'react';
import { IModal } from './interfaces/IModal';
import styles from './sass/Modal.module.scss';

const Modal: FC<IModal> = ({ children, ...props }) => (
  <div className={styles.container} {...props}>
    <div className={styles.modalContent}>{children}</div>
  </div>
);

export default Modal;

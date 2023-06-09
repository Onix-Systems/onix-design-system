import React, { FC } from 'react';
import { IHeaderProps } from './interfaces/IHeader';
import { Bell } from '../index';
import IconButton from '../IconButton/IconButton';
import { TextLarge } from '../Typography/Typography';

import styles from './sass/Header.module.scss';
import HydraLogo from '../../assets/icons/hydraLogo.svg';
import ServicesMenuIcon from '../Icons/ServicesMenuIcon';
import DropdownIcon from '../Icons/DropdownIcon';

const Header: FC<IHeaderProps> = ({ user }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <img src={HydraLogo} alt="hydra projects" />
      <div className={styles.right}>
        <IconButton icon={<ServicesMenuIcon />} />
        <Bell className={styles.bell} />
        <div className={styles.name}>
          <TextLarge>{user.name}</TextLarge>
          <DropdownIcon />
        </div>
        <img className={styles.avatar} src={user.photo} alt={user.name} />
      </div>
    </div>
  </header>
);

export default Header;

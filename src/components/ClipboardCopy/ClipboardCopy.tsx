import React, { FC } from 'react';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import { ClipboardCopyProps } from './interfaces/IClipboardCopy';
import AttachmentIcon from '../Icons/ClipboardIcon';
import CheckIcon from '../Icons/Check';
import styles from './sass/ClipboardCopy.module.scss';

const ClipboardCopy: FC<ClipboardCopyProps> = ({
  icon = <AttachmentIcon />,
  children,
  className = '',
  copyText,
}) => {
  const [value, copy, setCopiedText] = useCopyToClipboard();

  const handleCopy = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.nodeName !== 'A') copy(copyText);
  };

  const handleMouseLeave = () => setCopiedText(null);

  return (
    <div
      role="presentation"
      onClick={handleCopy}
      onMouseLeave={handleMouseLeave}
      className={`${styles.wrapper} ${className}`}
    >
      {children}
      <span className={styles.icon}>
        {value ? <CheckIcon /> : (icon || <AttachmentIcon />)}
      </span>
    </div>
  );
};

export default ClipboardCopy;

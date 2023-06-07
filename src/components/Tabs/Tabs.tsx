import React, { PropsWithChildren } from 'react';
import { TabsProps } from './interfaces/ITabs';
import { TabProps } from './interfaces/ITab';
import styles from './sass/Tabs.module.scss';

const Tabs: React.FC<TabsProps> = ({
  children,
  onChange,
  value,
}) => {
  const decoratedChildren: React.ReactNode = React.Children.map(children, (child, index) => {
    const item = child as React.ReactElement<PropsWithChildren<TabProps>>;

    if (React.isValidElement(item)) {
      const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (item.props.onClick) {
          item.props.onClick(event);
        }

        if (!item.props.disabled && onChange) {
          onChange(event, index);
        }
      };

      return React.cloneElement(child as React.ReactElement<TabProps>, {
        isActive: value === index,
        onClick: onClickHandler,
      });
    }

    return child;
  });

  return (
    <div role="tablist" className={styles.root}>
      {decoratedChildren}
    </div>
  );
};

export default Tabs;

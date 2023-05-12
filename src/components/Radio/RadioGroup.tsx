import React, {
  Children,
  ReactElement,
  PropsWithChildren,
  cloneElement, FC,
} from 'react';
import { IRadioGroupProps } from './interfaces/IRadioGroup';
import { IRadioProps } from './interfaces/IRadio';
import styles from './sass/RadioGroup.module.scss';

const RadioGroup: FC<IRadioGroupProps> = ({
  horizontal,
  name,
  value,
  onChange,
  children,
}) => (
  <div className={`${styles.root} ${horizontal ? styles.horizontal : ''}`}>
    {Children.map(children, (child) => {
      const item = child as ReactElement<PropsWithChildren<IRadioProps>>;
      const isChecked = item.props.value === value;

      return (
        <div className={styles.item}>
          {cloneElement(item, { name, checked: isChecked, onChange })}
        </div>
      );
    })}
  </div>
);

export default RadioGroup;

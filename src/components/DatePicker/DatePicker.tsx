import React, { FC } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styles from './sass/DatePicker.module.scss';
import { IDatePickerProps } from './interfaces/IDatePicker';

const DatePicker: FC<IDatePickerProps> = ({
  className = '',
  selected,
  numberOfMonths = 1,
  fromDate,
  toDate,
  onDayClick,
  onMonthChange = () => null,
  modifiersDays,
  disabledDays,
  month,
  footer,
}) => {
  const modifiers = { ...modifiersDays };
  const modifiersClassNames = {
    holidays: styles.holidays,
    pending: styles.pending,
    approved: styles.approved,
    expired: styles.expired,
    start: styles.day_range_start,
    end: styles.day_range_end,
  };

  return (
    <DayPicker
      selected={selected}
      weekStartsOn={1}
      defaultMonth={new Date()}
      mode="default"
      fromDate={fromDate}
      toDate={toDate}
      className={`${styles.datepicker} ${className}`}
      classNames={styles}
      onDayClick={onDayClick}
      numberOfMonths={numberOfMonths}
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
      onMonthChange={(date) => onMonthChange(date)}
      month={month}
      disabled={disabledDays}
      footer={footer}
    />
  );
};

export default DatePicker;

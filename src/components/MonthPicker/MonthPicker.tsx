import React, { FC, useState } from 'react';
import IconButton from '../IconButton/IconButton';
import { parseToMonthInt, parseMonthIntToObj } from '../../utils/helpers';
import { DEFAULT_MONTH_INT, DEFAULT_YEAR_RANGE, MONTHS } from '../../constants/common';
import ArrowLeftIcon from '../Icons/ArrowLeftIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import styles from './sass/MonthPicker.module.scss';
import { IMonthPickerProps } from './interfaces/IMonthPicker';

const MonthPicker: FC<IMonthPickerProps> = ({
  onChange, monthInt = DEFAULT_MONTH_INT, className = '', yearRange = DEFAULT_YEAR_RANGE,
}) => {
  const { minYear, maxYear } = yearRange;
  const { month, year } = parseMonthIntToObj(monthInt);
  const [currentYear, setYear] = useState(year);

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.year}>
        <IconButton
          tabIndex={-1}
          onClick={() => setYear(currentYear - 1)}
          onKeyDown={() => {}}
          aria-label="prevYear"
          aria-disabled={currentYear <= minYear}
          icon={<ArrowLeftIcon />}
        />
        <div
          className={styles.selectedYear}
        >
          <span>
            {currentYear}
          </span>
        </div>
        <IconButton
          tabIndex={-1}
          onClick={() => setYear(currentYear + 1)}
          onKeyDown={() => {}}
          aria-label="nextYear"
          aria-disabled={currentYear >= maxYear}
          icon={<ArrowRightIcon />}
        />
      </div>
      <div className={styles.months}>
        {MONTHS.map((item, index) => (
          <div
            aria-label={item}
            key={item}
            role="gridcell"
            tabIndex={-1}
            className={`${styles.month} ${month === index && currentYear === year ? styles.selected : ''}`}
            onClick={() => {
              onChange({
                month: parseToMonthInt(currentYear, index + 1),
                monthIndex: index,
                year: currentYear,
                monthName: item,
              });
            }}
            onKeyDown={() => {}}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthPicker;

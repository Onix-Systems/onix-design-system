import { getMonthIntFromDate } from '../utils/helpers';

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December',
];

export const DEFAULT_YEAR_RANGE = {
  minYear: 2000,
  maxYear: 2100,
};

export const DEFAULT_MONTH_INT = getMonthIntFromDate().monthInt;

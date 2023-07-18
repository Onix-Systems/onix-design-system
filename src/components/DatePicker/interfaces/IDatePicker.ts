import { DayClickEventHandler, Matcher } from 'react-day-picker';

interface IModifiersDay {
  from: Date
  to: Date
}

interface IModifiersDays {
  pending: IModifiersDay[]
}

export interface IDatePickerProps {
  className?: string,
  selected: Matcher,
  numberOfMonths?: number,
  onDayClick?: DayClickEventHandler,
  onMonthChange?: (month: Date) => void,
  month?: Date,
  modifiersDays?: IModifiersDays
  approved: IModifiersDay[],
  start: Date,
  end: Date,
  expired: Date,
  disabledDays?: Date,
  fromDate?: Date,
  toDate?: Date,
  footer?: string,
  holidays?: Date[]
}

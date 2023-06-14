export interface IYearRange {
  minYear: number
  maxYear: number
}

export interface IMonthPickerInfo {
  month: number
  monthIndex: number
  year: number
  monthName: string,
}

export interface IMonthPickerProps {
  onChange: (value: IMonthPickerInfo) => void
  monthInt?: number
  className?: string
  yearRange?: IYearRange
}

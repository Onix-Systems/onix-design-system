export enum ESizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

export enum EVariants {
  TEXT = 'text',
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
}

export enum EColors {
  PRIMARY = 'primary',
  WARNING = 'warning',
  ERROR = 'error',
}

enum EButtonSizesExtender {
  LARGE = 'large',
}

export type EButtonSizes = ESizes | EButtonSizesExtender;

export enum EBallPulseColorsExtender {
  WHITE = 'white',
  SUCCESS = 'success',
}

export type EBallPulseColors = EColors | EBallPulseColorsExtender;

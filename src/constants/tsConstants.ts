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

export enum EButtonSizesExtender {
  LARGE = 'large',
}

export type EButtonSizes = ESizes | EButtonSizesExtender;

export enum EBallPulseColorsExtender {
  WHITE = 'white',
  SUCCESS = 'success',
}

export type EBallPulseColors = EColors | EBallPulseColorsExtender;

export enum EIconButtonVariants {
  OUTLINED = 'outlined',
  OUTLINED_ACTIVE = 'outlined-active',
  CONTAINED = 'contained',
  CONTAINED_RED = 'contained-red',
  CONTAINED_PRIMARY = 'contained-primary',
}

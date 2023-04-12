export enum Sizes {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  BIG = 'BIG',
}

export enum Variants {
  Text = 'TEXT',
  Contained = 'CONTAINED',
  Outlined = 'OUTLINED',
}

export enum Colors {
  Primary = 'PRIMARY',
  Warning = 'WARNING',
  Error = 'ERROR',
}

enum ButtonSizesExtender {
  Large = 'LARGE',
}

export type ButtonSizes = Sizes | ButtonSizesExtender;

export type BallPulseColors = Colors | BallPulseColorsExtender;

export enum BallPulseColorsExtender {
  White = 'WHITE',
  Primary = 'PRIMARY',
  Warning = 'WARNING',
  Error = 'ERROR',
  Success = 'SUCCESS',
}

export enum IconButtonVariants {
  Outlined = 'OUTLINED',
  OutlinedActive = 'OUTLINED_ACTIVE',
  Contained = 'CONTAINED',
  ContainedRed = 'CONTAINED_RED',
  ContainedPrimary = 'CONTAINED_PRIMARY',
}

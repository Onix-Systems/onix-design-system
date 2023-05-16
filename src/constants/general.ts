export enum Sizes {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Big = 'BIG',
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

export enum BallPulseColorsExtender {
  White = 'WHITE',
  Success = 'SUCCESS',
}

export type BallPulseColors = Colors | BallPulseColorsExtender;

export enum IconButtonSizes {
  ExtraSmall = 'EXTRA_SMALL',
  Small = 'SMALL',
  Medium = 'MEDIUM',
  BIG = 'BIG',
}

export enum IconButtonColors {
  Gray = 'GRAY',
  Black = 'BLACK',
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY',
  Danger = 'DANGER',
}

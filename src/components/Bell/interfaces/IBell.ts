import { ComponentPropsWithRef } from 'react';

export interface IBellProps extends ComponentPropsWithRef<'button'> {
  alt?: string,
  isActive?: boolean,
  hasNotification?: boolean,
}

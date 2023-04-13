import { ComponentPropsWithRef } from 'react';

export interface IBellProps extends ComponentPropsWithRef<'button'> {
  isActive?: boolean,
  hasNotification?: boolean,
}

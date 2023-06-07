import React from 'react';

export interface BreadCrumbsProps {
  breadcrumbItems: Array<Omit<BreadcrumbItemProps, 'isLast' | 'separator'>>,
  separator?: string | React.ReactNode,
  lastIsCopyable?: boolean,
}

export interface BreadcrumbItemProps {
  url: string,
  name: string,
  isLast: boolean,
  separator: string | React.ReactNode,
  isCopyable: boolean,
}

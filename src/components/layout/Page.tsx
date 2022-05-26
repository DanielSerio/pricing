import {
  AppShell,
  AppShellProps,
  createStyles,
  MantineTheme,
} from '@mantine/core';
import React from 'react';
import { MantineStylesObject } from '../../types';
import ThemeToggleTab from '../ThemeToggleTab';
import PageHeader from './PageHeader';

export interface PageProps extends Partial<AppShellProps> {}

function createPageStyles(t: MantineTheme): MantineStylesObject {
  return {
    root: {
      minHeight: '100vh',
      position: 'relative',
      display: 'grid',
    },
    body: {
      height: '100%',
    },
    main: {
      padding: 0,
    },
  };
}

const usePageStyles = createStyles(createPageStyles);

export default function Page({ children, ...rest }: PageProps) {
  const { classes } = usePageStyles();
  return (
    <AppShell header={<PageHeader />} classNames={classes} {...rest}>
      <ThemeToggleTab />
      {children}
    </AppShell>
  );
}

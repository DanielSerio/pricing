import {
  AppShell,
  AppShellProps,
  createStyles,
  MantineTheme,
} from '@mantine/core';
import React from 'react';
import { MantineStylesObject } from '../../types';

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
    <AppShell classNames={classes} {...rest}>
      {children}
    </AppShell>
  );
}

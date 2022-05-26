import {
  Box,
  BoxProps,
  createStyles,
  MantineTheme,
  TypographyStylesProvider,
} from '@mantine/core';
import React from 'react';
import { MantineStylesObject } from '../../types';

function createTypographyContainerStyles(t: MantineTheme): MantineStylesObject {
  return {
    root: {},
  };
}

const useTypographyContainerStyles = createStyles(
  createTypographyContainerStyles
);

export type TypographyContainerProps<
  T extends React.ElementType<any> = 'article'
> = BoxProps<T> & {
  component?: React.ElementType<any>;
};

export default function TypographyContainer({
  component,
  children,
  ...rest
}: TypographyContainerProps) {
  const { classes } = useTypographyContainerStyles();
  return (
    <TypographyStylesProvider>
      <Box
        mx={'auto'}
        sx={{ maxWidth: 550 }}
        component={component || 'article'}
        {...rest}
      >
        {children}
      </Box>
    </TypographyStylesProvider>
  );
}

import {
  Box,
  BoxProps,
  createStyles,
  MantineTheme,
  TypographyStylesProvider,
} from '@mantine/core';
import React, { ElementType } from 'react';
import { MantineStylesObject } from '../../types';

function createTypographyContainerStyles(t: MantineTheme): MantineStylesObject {
  return {
    root: {},
  };
}

const useTypographyContainerStyles = createStyles(
  createTypographyContainerStyles
);

export type TypographyContainerProps<T extends React.ElementType<any>> =
  BoxProps<T> & {
    component: 'article' | 'span';
  };

export default function TypographyContainer<T extends 'article' | 'span'>({
  component,
  children,
  ...rest
}: TypographyContainerProps<T>) {
  const { classes } = useTypographyContainerStyles();
  return (
    <TypographyStylesProvider mx={'auto'}>
      <Box mx={'auto'} sx={{ maxWidth: 550 }} component={component} {...rest}>
        {children}
      </Box>
    </TypographyStylesProvider>
  );
}

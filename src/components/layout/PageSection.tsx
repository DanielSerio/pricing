import { Box, BoxProps, Container } from '@mantine/core';
import React from 'react';

export interface PageSectionProps extends BoxProps<'section'> {
  emphasisStyles?: {
    background: string;
    color: string;
  };
}

export default function PageSection({
  children,
  emphasisStyles,
  ...rest
}: PageSectionProps) {
  return (
    <Box
      sx={{ background: emphasisStyles?.background || 'transparent' }}
      component='section'
      px={'md'}
      py={'xl'}
      {...rest}
    >
      <Container sx={{ color: emphasisStyles?.color || 'inherit' }} p={0}>
        {children}
      </Container>
    </Box>
  );
}

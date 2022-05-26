import { Box, createStyles, MantineTheme, Text, Title } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import TypographyContainer from './layout/TypographyContainer';

const useLogoStyles = createStyles((t: MantineTheme) => ({
  root: {
    maxHeight: 72,
    '& h1, & p': {
      margin: 0,
      lineHeight: 1,
    },
    '& h1': {
      letterSpacing: '0.055ch',
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
}));

export default function Logo() {
  const { classes } = useLogoStyles();
  return (
    <Box component='section' className={classes.root}>
      <Link to={'/'}>
        <Title order={1}>Dan Serio</Title>
        <Text sx={{ fontSize: 10 }} component='p'>
          Contract Software Development
        </Text>
      </Link>
    </Box>
  );
}

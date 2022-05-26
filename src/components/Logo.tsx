import { Box, createStyles, MantineTheme, Text, Title } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import TypographyContainer from './layout/TypographyContainer';

const useLogoStyles = createStyles((t: MantineTheme) => ({
  root: {
    maxHeight: 72,
    display: 'flex',
    flexDirection: 'column',
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
  small: {
    background: t.colors[t.colorScheme === 'dark' ? 'gray' : 'dark'][5],
    color: t.colorScheme === 'dark' ? t.black : t.white,
    lineHeight: 2,
    minHeight: 20,
    fontSize: 10,
    textAlign: 'center',
    display: 'grid',
    placeItems: 'center',
    borderRadius: t.radius.xs,
  },
}));

export default function Logo() {
  const { classes } = useLogoStyles();
  return (
    <Box component='section' className={classes.root}>
      <Link to={'/'}>
        <Title order={1} sx={{ fontSize: 36 }}>
          Dan Serio
        </Title>
        <Text className={classes.small} component='p'>
          Contract Software Development
        </Text>
      </Link>
    </Box>
  );
}

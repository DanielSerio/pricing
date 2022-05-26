import { Box, createStyles, Header, MantineTheme } from '@mantine/core';
import React from 'react';
import { MantineStylesObject } from '../../types';
import HeaderNavigation from '../HeaderNavigation';
import Logo from '../Logo';

function createHeaderStyles(t: MantineTheme): MantineStylesObject {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };
}

const useHeaderStyles = createStyles(createHeaderStyles);

export default function PageHeader() {
  const { classes } = useHeaderStyles();

  return (
    <Box component='header' sx={{ maxHeight: 72 }}>
      <Header px={'md'} height={72} className={classes.root}>
        <Box>
          <Logo />
        </Box>
        <Box>
          <HeaderNavigation />
        </Box>
      </Header>
    </Box>
  );
}

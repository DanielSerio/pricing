import {
  ActionIcon,
  Box,
  createStyles,
  MantineTheme,
  useMantineColorScheme,
} from '@mantine/core';
import React from 'react';
import { Sun, Moon } from 'tabler-icons-react';
import { MantineStylesObject } from '../types';

function createThemeToggleTabStyles(t: MantineTheme): MantineStylesObject {
  return {
    root: {
      overflow: 'hidden',
      position: 'fixed',
      zIndex: 999_999_999,
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      top: '65vh',
      left: 0,
      height: '2rem',
      width: '2rem',
      borderRadius: '0 4px 4px 0',
      boxShadow: `0 2px 8px -4px black`,
      display: 'grid',
      placeItems: 'center',
    },
    button: {
      '&,&:hover': {
        background: 'transparent',
      },
    },
    dial: {
      position: 'absolute',
      transition: `all 180ms ease`,
      transformOrigin: 'center center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      top: '0%',
      minHeight: '3.67rem',
      '& svg': {
        color: 'white',
      },
    },
  };
}

const useThemeToggleTabStyles = createStyles(createThemeToggleTabStyles);

export default function ThemeToggleTab() {
  const { classes } = useThemeToggleTabStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Box className={classes.root}>
      <ActionIcon
        className={classes.button}
        sx={{ position: 'relative' }}
        onClick={() => toggleColorScheme()}
      >
        <Box
          sx={{ transform: `rotate(${colorScheme === 'light' ? 180 : 0}deg)` }}
          className={classes.dial}
        >
          <Sun />
          <Moon
            style={{
              display: 'inline-block',
              position: 'relative',
              transformOrigin: 'center center',
              transform: 'rotate(180deg)',
            }}
          />
        </Box>
      </ActionIcon>
    </Box>
  );
}

import {
  Box,
  BoxProps,
  Burger,
  createStyles,
  CSSObject,
  Group,
  GroupProps,
  MantineTheme,
  MediaQuery,
  Menu,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrencyDollar, InfoSquare, Send } from 'tabler-icons-react';

export interface DesktopMenuProps extends GroupProps {}
export interface MobileMenuProps extends BoxProps<'div'> {}
const useDesktopMenuStyles = createStyles((t: MantineTheme) => ({
  link: {
    textDecoration: 'none',
    fontWeight: 700,
    color: 'dimgrey',

    '&:hover': {
      color: 'inherit',
    },

    '&.active': {
      color: t.colors[t.primaryColor][t.colorScheme === 'light' ? 8 : 4],
      '&:hover': {
        color: t.colors[t.primaryColor][t.colorScheme === 'light' ? 9 : 3],
      },
    },
  },
}));

const useMobileMenuStyles = createStyles((t: MantineTheme) => ({
  link: {
    textDecoration: 'none',
    fontWeight: 700,
    color: 'dimgrey',

    '&:hover': {
      color: 'inherit',
    },

    '&.active': {
      color: t.colors[t.primaryColor][t.colorScheme === 'light' ? 8 : 4],
      '&:hover': {
        color: t.colors[t.primaryColor][t.colorScheme === 'light' ? 9 : 3],
      },
    },
  },
}));

function DesktopMenu({ ...props }: DesktopMenuProps) {
  const { classes } = useDesktopMenuStyles();
  return (
    <Group {...props}>
      <NavLink to={'/'} className={classes.link}>
        Pricing
      </NavLink>
      <NavLink to={'/about'} className={classes.link}>
        About
      </NavLink>
      <NavLink to={'/contact'} className={classes.link}>
        Contact
      </NavLink>
    </Group>
  );
}

function MobileMenu({ ...props }: MobileMenuProps) {
  const { classes } = useMobileMenuStyles();
  const [menuOpened, { open, close }] = useDisclosure(false);
  return (
    <Box {...props}>
      <Menu
        opened={menuOpened}
        onOpen={open}
        onClose={close}
        control={<Burger opened={menuOpened} />}
      >
        <Menu.Item icon={<CurrencyDollar size={12} />}>
          <NavLink to={'/'} className={classes.link}>
            Pricing
          </NavLink>
        </Menu.Item>
        <Menu.Item icon={<InfoSquare size={12} />}>
          <NavLink to={'/about'} className={classes.link}>
            About
          </NavLink>
        </Menu.Item>
        <Menu.Item icon={<Send size={12} />}>
          <NavLink to={'/contact'} className={classes.link}>
            Contact
          </NavLink>
        </Menu.Item>
      </Menu>
    </Box>
  );
}

export default function HeaderNavigation() {
  const hiddenStyles: CSSObject = {
    overflow: 'hidden',
    height: 0,
    width: 0,
    padding: 0,
    margin: 0,
    opacity: 0,
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <MediaQuery smallerThan={'xs'} styles={hiddenStyles}>
        <DesktopMenu />
      </MediaQuery>
      <MediaQuery largerThan={'xs'} styles={hiddenStyles}>
        <MobileMenu />
      </MediaQuery>
    </Box>
  );
}

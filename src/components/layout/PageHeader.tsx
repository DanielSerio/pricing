import { Box, Header } from '@mantine/core';
import React from 'react';
import Logo from '../Logo';

export default function PageHeader() {
  return (
    <Box component='header'>
      <Header height={72}>
        <Box>
          <Logo />
        </Box>
        <Box></Box>
      </Header>
    </Box>
  );
}

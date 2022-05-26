import { Anchor, Container, Footer, Text } from '@mantine/core';
import React from 'react';

export default function PageFooter() {
  return (
    <Footer height={48} sx={{ display: 'grid', placeItems: 'center' }}>
      <Container sx={{ textAlign: 'center' }}>
        <Text size={'xs'} color={'dimmed'}>
          Dan Serio | 2022 |{' '}
          <Anchor href={'mailto:dserio.d@gmail.com'}>dserio.d@gmail.com</Anchor>
        </Text>
      </Container>
    </Footer>
  );
}

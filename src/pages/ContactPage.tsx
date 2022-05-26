import { Anchor, Box, Text, Title } from '@mantine/core';
import React from 'react';
import Page from '../components/layout/Page';
import PageSection from '../components/layout/PageSection';
import TypographyContainer from '../components/layout/TypographyContainer';

export default function ContactPage() {
  return (
    <Page>
      <PageSection>
        <TypographyContainer<'article'>
          component={'article'}
          mx={'auto'}
          sx={{ minHeight: '320px' }}
        >
          <Title order={1} align={'center'}>
            Contact Me
          </Title>
          <Box
            component='address'
            sx={{
              fontStyle: 'normal',
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 'fit-content',
              padding: '1ch 1.62ch',
              margin: '0 auto',
              borderRadius: 4,
              boxShadow: `0 1px 8px -6px black`,
              '& h2': {
                marginTop: 0,
                marginBottom: 4,
              },
            }}
          >
            <Title order={2}>Dan Serio</Title>
            <Anchor href='mailto:dserio.d@gmail.com'>dserio.d@gmail.com</Anchor>
            <Text component='span'>Cincinnati, OH</Text>
          </Box>
        </TypographyContainer>
      </PageSection>
    </Page>
  );
}

import { Text, Title } from '@mantine/core';
import React from 'react';
import Page from '../components/layout/Page';
import PageSection from '../components/layout/PageSection';
import TypographyContainer from '../components/layout/TypographyContainer';

export default function PricingPage() {
  return (
    <Page>
      <PageSection>
        <TypographyContainer>
          <Title order={1}>Pricing</Title>
          <Text component='p'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quis
            sed, nulla quibusdam quod non assumenda illo perspiciatis, deleniti
            voluptas, sunt nisi maiores autem quas amet omnis ducimus ipsa cum!
          </Text>
        </TypographyContainer>
      </PageSection>
    </Page>
  );
}

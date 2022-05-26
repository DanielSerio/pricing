import { List, Text, Title } from '@mantine/core';
import React from 'react';
import ContactButton from '../components/ContactButton';
import Page from '../components/layout/Page';
import PageSection from '../components/layout/PageSection';
import TypographyContainer from '../components/layout/TypographyContainer';
import PricingCardList from '../components/PricingCardList';

export default function PricingPage() {
  return (
    <Page>
      <PageSection>
        <TypographyContainer<'article'> component={'article'}>
          <Title order={1}>Pricing</Title>
          <Text component='p'>
            All sites are built with care, and meant to be both accessible &amp;
            responsive.
          </Text>
          <Text component='p'>Key points of focus include:</Text>
          <List listStyleType={'square'}>
            <List.Item>Accessibility</List.Item>
            <List.Item>SEO/Search Engine Optimization</List.Item>
            <List.Item>Responsive Design</List.Item>
          </List>
        </TypographyContainer>
        <PricingCardList />
        <Text mt={48} component='p' size={'sm'}>
          For any further questions, please:
        </Text>
        <ContactButton textDetails='Here For More Information' />
      </PageSection>
    </Page>
  );
}

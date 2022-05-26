import { List, Text, Title } from '@mantine/core';
import React from 'react';
import Page from '../components/layout/Page';
import PageSection from '../components/layout/PageSection';
import TypographyContainer from '../components/layout/TypographyContainer';
import PricingCard from '../components/PricingCard';
import PricingCardList from '../components/PricingCardList';

export default function PricingPage() {
  return (
    <Page>
      <PageSection>
        <TypographyContainer<'article'> component={'article'}>
          <Title order={1}>Pricing</Title>
          <Text component='p'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quis
            sed, nulla quibusdam quod non assumenda illo perspiciatis, deleniti
            voluptas, sunt nisi maiores autem quas amet omnis ducimus ipsa cum!
          </Text>
          <Text component='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            explicabo nisi voluptate, ex consequuntur iste, accusantium expedita
            nihil eos dignissimos numquam:
          </Text>
          <List>
            <List.Item>One</List.Item>
            <List.Item>Two</List.Item>
            <List.Item>Three</List.Item>
          </List>
        </TypographyContainer>
        <PricingCardList />
      </PageSection>
    </Page>
  );
}

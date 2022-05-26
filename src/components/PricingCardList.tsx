import { Grid, GridProps, Text } from '@mantine/core';
import React from 'react';
import PricingCard from './PricingCard';

export interface PricingCardListProps extends GridProps {}

export default function PricingCardList() {
  return (
    <Grid itemType='li'>
      <Grid.Col>
        <PricingCard title={'First Pricing Card'} price={300}>
          <Text>Some Texts</Text>
        </PricingCard>
      </Grid.Col>
      <Grid.Col>
        <PricingCard title={'Second Pricing Card'} price={300}>
          <Text>Some Texts</Text>
        </PricingCard>
      </Grid.Col>
      <Grid.Col>
        <PricingCard title={'Third Pricing Card'} price={300}>
          <Text>Some Texts</Text>
        </PricingCard>
      </Grid.Col>
    </Grid>
  );
}

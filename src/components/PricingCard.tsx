import { Box, Card, CardProps, Divider, Text } from '@mantine/core';
import React from 'react';
import { PricingCardItem } from '../types';

export type PricingCardProps = CardProps<'li'> & PricingCardItem;

export default function PricingCard({
  children,
  title,
  rateType,
  price,
  ...rest
}: PricingCardProps) {
  const DividerSection = () => (
    <Card.Section>
      <Divider />
    </Card.Section>
  );

  return (
    <Card component='li' {...rest}>
      <Card.Section>{title}</Card.Section>
      <DividerSection />
      <Card.Section>{children}</Card.Section>
      <DividerSection />
      <Card.Section>
        <Box>
          {rateType === 'hourly' && <Text>Per Hour</Text>}
          {Boolean(!rateType || rateType === 'total') && (
            <Text>Total Cost</Text>
          )}
        </Box>
        <Box>
          <Text>$</Text>
          <Text>{price}</Text>
        </Box>
      </Card.Section>
    </Card>
  );
}

import {
  Box,
  Card,
  CardProps,
  createStyles,
  Divider,
  MantineTheme,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import { MantineStylesObject, PricingCardItem } from '../types';
import TypographyContainer from './layout/TypographyContainer';

export type PricingCardProps = CardProps<'li'> & PricingCardItem;

function createPricingCardStyles(t: MantineTheme): MantineStylesObject {
  return {
    root: {
      background: 'red',
      padding: 0,
    },
    dividerSection: {
      padding: 0,
      margin: 0,
      background: 'green',
    },
    contentSection: {
      paddingLeft: t.spacing.sm,
      paddingRight: t.spacing.sm,
      paddingTop: t.spacing.xs,
      paddingBottom: t.spacing.xs,
    },
  };
}

const usePricingCardStyles = createStyles(createPricingCardStyles);

export default function PricingCard({
  children,
  title,
  rateType,
  price,
  ...rest
}: PricingCardProps) {
  const { classes } = usePricingCardStyles();
  const DividerSection = () => (
    <Card.Section className={classes.dividerSection}>
      <Divider />
    </Card.Section>
  );

  return (
    <Card withBorder p={0} shadow={'md'} component='li' {...rest}>
      <Card.Section className={classes.contentSection}>
        <TypographyContainer pt={'sm'}>
          <Title sx={{ marginTop: `0 !important` }} order={2}>
            {title}
          </Title>
        </TypographyContainer>
      </Card.Section>
      <DividerSection />
      <Card.Section className={classes.contentSection}>
        <TypographyContainer py={'md'}>{children}</TypographyContainer>
      </Card.Section>
      <DividerSection />
      <Card.Section
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
        className={classes.contentSection}
      >
        <Box>
          {rateType === 'hourly' && <Text>Per Hour</Text>}
          {Boolean(!rateType || rateType === 'total') && (
            <Text weight={700} color={'dimmed'}>
              Total Cost
            </Text>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Text
            pr={4}
            sx={{ fontSize: '2rem', transform: 'translateY(8px)' }}
            color={'dimmed'}
          >
            $
          </Text>
          <Text weight={700} color={'cyan'} size={'xl'}>
            {price}
          </Text>
        </Box>
      </Card.Section>
    </Card>
  );
}

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
    dividerSection: {
      padding: 0,
      margin: 0,
    },
    contentSection: {
      paddingLeft: t.spacing.sm,
      paddingRight: t.spacing.sm,
      paddingTop: t.spacing.xs,
      paddingBottom: t.spacing.xs,
      color: 'inherit',
      '& *': { color: 'inherit' },
    },
  };
}

const usePricingCardStyles = createStyles(createPricingCardStyles);

export default function PricingCard({
  children,
  title,
  rateType,
  price,
  emphasis,
  ...rest
}: PricingCardProps) {
  const { classes } = usePricingCardStyles();
  const DividerSection = () => (
    <Card.Section className={classes.dividerSection}>
      <Divider />
    </Card.Section>
  );

  return (
    <Card
      sx={(t: MantineTheme) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: emphasis
          ? t.colorScheme === 'light'
            ? t.colors.dark[7]
            : t.colors.gray[2]
          : 'inherit',
        color: emphasis
          ? t.colorScheme === 'light'
            ? t.white
            : t.black
          : 'inherit',
      })}
      withBorder
      p={0}
      shadow={'md'}
      component='li'
      {...rest}
    >
      <Card.Section className={classes.contentSection}>
        <TypographyContainer pt={'sm'} component={'span'}>
          <Title
            sx={(t: MantineTheme) => ({
              marginTop: `0 !important`,
              fontSize: `${t.fontSizes.lg}px !important`,
              color: emphasis
                ? t.colorScheme === 'light'
                  ? t.white
                  : t.black
                : 'inherit',
            })}
            order={1}
          >
            {title}
          </Title>
        </TypographyContainer>
      </Card.Section>
      <DividerSection />
      <Card.Section
        className={classes.contentSection}
        sx={(t: MantineTheme) => ({
          flex: 1,
          color: emphasis
            ? t.colorScheme === 'light'
              ? t.white
              : t.black
            : 'inherit',
        })}
      >
        <TypographyContainer<'span'> component={'span'} py={'md'}>
          {children}
        </TypographyContainer>
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
          {rateType === 'hourly' && (
            <Text weight={700} color={'dimmed'}>
              Per Hour
            </Text>
          )}
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

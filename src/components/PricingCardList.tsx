import {
  Box,
  createStyles,
  Grid,
  GridProps,
  List,
  MantineTheme,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import PricingCard from './PricingCard';

export interface PricingCardListProps extends GridProps {}
const useCardListStyles = createStyles((t: MantineTheme) => ({
  root: {
    '& li': {
      listStyle: 'square',
    },
  },
}));
export default function PricingCardList() {
  const { classes } = useCardListStyles();
  return (
    <Box component={'ul'} mx={'auto'} my={'xl'} p={0}>
      <Grid columns={12} align={'stretch'}>
        <Grid.Col span={12} xs={6} md={4}>
          <PricingCard title={'Three Page Site'} price={300}>
            <Title order={3} mt={`0 !important`} mb={`0 !important`}>
              Features
            </Title>
            <List size={'sm'} type='unordered' className={classes.root}>
              <List.Item>Maximum 3 pages</List.Item>
              <List.Item>Maximum 1 form</List.Item>
              <List.Item>7 Day Delivery</List.Item>
            </List>
          </PricingCard>
        </Grid.Col>
        <Grid.Col span={12} xs={6} md={4}>
          <PricingCard title={'Five Page Site'} price={500}>
            <Title order={3} mt={`0 !important`} mb={`0 !important`}>
              Features
            </Title>
            <List size={'sm'} type='unordered' className={classes.root}>
              <List.Item>Maximum 5 pages</List.Item>
              <List.Item>Maximum 2 forms</List.Item>
              <List.Item>10 Days Delivery</List.Item>
              <List.Item>1 Revision</List.Item>
            </List>
          </PricingCard>
        </Grid.Col>
        <Grid.Col span={12} xs={6} md={4}>
          <PricingCard title={'Seven Page Site'} price={600}>
            <Title order={3} mt={`0 !important`} mb={`0 !important`}>
              Features
            </Title>
            <List size={'sm'} type='unordered' className={classes.root}>
              <List.Item>Maximum 7 pages</List.Item>
              <List.Item>Maximum 3 forms</List.Item>
              <List.Item>14 Days Delivery</List.Item>
              <List.Item>2 Revision</List.Item>
              <List.Item>Source Code Included</List.Item>
            </List>
          </PricingCard>
        </Grid.Col>
        <Grid.Col span={12} xs={6} md={6} offsetMd={3}>
          <PricingCard
            title={'Frontend/Full-Stack Contract Development'}
            price={55}
            rateType='hourly'
            emphasis
          >
            <Title order={3} mt={`0 !important`} mb={`0 !important`}>
              Familiar Tools
            </Title>
            <List size={'sm'} type='unordered' className={classes.root}>
              <List.Item>Typescript/Javascript</List.Item>
              <List.Item>SCSS/CSS</List.Item>
              <List.Item>React</List.Item>
              <List.Item>HTML Canvas</List.Item>
            </List>
          </PricingCard>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

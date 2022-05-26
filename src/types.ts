import { CSSObject } from '@mantine/core';

export type MantineStylesObject = Record<string, CSSObject>;

export type RateType = 'hourly' | 'total';

export interface PricingCardItem {
  title: string;
  rateType?: RateType;
  price: number;
  emphasis?: boolean;
}

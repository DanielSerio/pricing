import { Button, ButtonProps } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

export interface ContactButtonProps extends ButtonProps<'button'> {
  textDetails?: string;
}

export default function ContactButton({
  textDetails,
  ...rest
}: ContactButtonProps) {
  return (
    <Link to={'/contact'}>
      <Button
        my={'lg'}
        {...rest}
        variant='gradient'
        gradient={{
          from: 'teal',
          to: 'blue',
        }}
      >
        Contact Me {Boolean(textDetails) && textDetails}
      </Button>
    </Link>
  );
}

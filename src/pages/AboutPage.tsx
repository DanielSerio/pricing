import { Text, Title } from '@mantine/core';
import React from 'react';
import ContactButton from '../components/ContactButton';
import Page from '../components/layout/Page';
import PageSection from '../components/layout/PageSection';
import TypographyContainer from '../components/layout/TypographyContainer';

export default function AboutPage() {
  return (
    <Page>
      <PageSection>
        <TypographyContainer<'article'> component={'article'} mx={'auto'}>
          <Title order={1}>About Me</Title>
          <Text component='p'>
            I am a self-taught developer with a passion for the web. I have
            always been a creator. I have a BFA in Graphic Design from the
            American Academy of Art in Chicago, which is where I was first
            introduced to web design. I instantly fell in love. I started out
            learning basic web design through online courses and now have the
            ability to create everything from simple static sites to full blown
            Full-Stack web applications.
          </Text>
          <ContactButton textDetails='Here For More Information' />
        </TypographyContainer>
      </PageSection>
    </Page>
  );
}

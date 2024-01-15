import { Container } from 'components/Container/Container.styled';
import React from 'react';
import { SectionWrapper, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </Container>
    </SectionWrapper>
  );
};

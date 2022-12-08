import styled from 'styled-components';

import { Navigation } from '@/components/navigation';
import { navLinks } from '@/content/links';
import { Col, Grid, Row } from '@/styles/grid';

const StyledFooterSection = styled.section`
  padding-bottom: 8rem;
  margin-top: 10rem;
  border-top-width: 1px;
  padding-top: 5rem;
  border-color: rgba(63, 63, 70, 0.4);
`;

const StyledFooterNavigation = styled(Navigation)``;

export function FooterSection() {
  return (
    <StyledFooterSection>
      <StyledFooterNavigation items={navLinks} type="basic" />
    </StyledFooterSection>
  );
}

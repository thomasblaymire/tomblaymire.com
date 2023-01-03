import styled from 'styled-components';

import { TimeLine } from '@/components/timeline';
import { uses } from '@/content/uses';
import { device } from '@/helpers/device';

const StyledTimeLineSection = styled.section`
  margin-top: calc(5rem * calc(1 - 0));
  margin-bottom: calc(5rem * 0);

  @media ${device.tablet} {
    padding-left: 1.5rem;
    border-left-width: 1px;
    border-color: #e5e7eb26;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-top: 2.5rem;
    color: ${({ theme }) => theme.colors.textHeading};
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    line-height: 2.3rem;
    color: rgb(161 161 170/1);
    z-index: 10;
    position: relative;
  }

  svg {
    width: 50px;
  }
`;

export function TimelineSection() {
  return (
    <>
      {uses.map((use, index) => {
        return (
          <StyledTimeLineSection key={index}>
            <TimeLine use={use} />
          </StyledTimeLineSection>
        );
      })}
    </>
  );
}

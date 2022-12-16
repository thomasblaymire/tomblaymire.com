import styled from 'styled-components';

import { formatDate } from '@/helpers/date';

interface TimeProps {
  dateTime: string;
}

const StyledTime = styled.time`
  position: relative;
  color: rgb(113 113 122 /1);
  line-height: 1.5rem;
  padding-left: 1.5rem;
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  order: -9999;
  margin-bottom: 2rem;
`;

const StyledDividerWrapper = styled.span`
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  bottom: 0;
  position: absolute;
`;

const StyledTimeDivider = styled.span`
  width: 0.2rem;
  background-color: rgb(113 113 122 / 1);
  border-radius: 9999px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export function Time({ dateTime }: TimeProps): JSX.Element {
  const formattedDate = formatDate(dateTime);
  return (
    <StyledTime dateTime={formattedDate}>
      <StyledDividerWrapper>
        <StyledTimeDivider />
      </StyledDividerWrapper>
      {formattedDate}
    </StyledTime>
  );
}

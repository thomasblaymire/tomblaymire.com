import styled from 'styled-components';

import { Card } from '@/components/card';
import { WorkExperienceItem, workExperiences } from '@/content/work';

interface WorkItemProps {
  item: WorkExperienceItem;
}

const StyledWork = styled.div`
  margin-top: calc(3.5rem * calc(1 - 0));
  margin-bottom: calc(3.5rem * 0);
`;

const WorkSSROnly = styled.dt`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const StyledWorkImageWrapper = styled.div`
  background-color: rgb(39 39 42/1);
  border-color: rgba(63, 63, 70, 0.5);
  border-width: 1px;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  display: flex;
`;

const StyledWorkImage = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

const StyledWorkItem = styled.li`
  display: flex;
  gap: 1.5rem;

  &:not(:first-child) {
    margin-top: calc(1.5rem * calc(1 - -0.5));
    margin-bottom: calc(1rem * -0.5);
  }
`;

const StyledWorkList = styled.ol`
  margin-top: 2.5rem;
`;

const StyledWorkInfo = styled.dl`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  column-gap: 0.5rem;
`;

const StyledCompanyName = styled.dd`
  flex: none;
  width: 100%;
  font-size: 1.35rem;
  line-height: 1.5rem;
`;

const StyledJobTitle = styled.dd`
  color: rgb(161 161 170/1);
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

const StyledTimePeriod = styled.dd`
  margin-left: auto;
  color: rgb(161 161 170/1);
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

const WorkItem = ({ item }: WorkItemProps): JSX.Element => {
  const { image, name, jobTitle, dateFrom, dateTo } = item;
  return (
    <StyledWorkItem>
      <StyledWorkImageWrapper>
        <StyledWorkImage src={image} alt="" />
      </StyledWorkImageWrapper>
      <StyledWorkInfo>
        <WorkSSROnly>Company</WorkSSROnly>
        <StyledCompanyName>{name}</StyledCompanyName>
        <WorkSSROnly>Role</WorkSSROnly>
        <StyledJobTitle>{jobTitle}</StyledJobTitle>
        <WorkSSROnly>Date</WorkSSROnly>
        <StyledTimePeriod aria-label={`${dateFrom} until ${dateTo}`}>
          <time dateTime={dateFrom}>{dateFrom}</time> <span aria-hidden="true">—</span>{' '}
          <time dateTime={dateTo}>{dateTo}</time>
        </StyledTimePeriod>
      </StyledWorkInfo>
    </StyledWorkItem>
  );
};

export function Work() {
  return (
    <StyledWork>
      <Card>
        <>
          <h2>Work</h2>
          <StyledWorkList>
            {workExperiences.map((item, index) => (
              <WorkItem key={index} item={item} />
            ))}
          </StyledWorkList>
        </>
      </Card>
    </StyledWork>
  );
}

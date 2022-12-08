import styled from 'styled-components';

import emis from '@/assets/icons/emis.svg';
import evri from '@/assets/icons/evri.svg';
import skybet from '@/assets/icons/skybet.svg';
import stan from '@/assets/icons/stan.svg';
import xcover from '@/assets/icons/xcover.svg';
import { Card } from '@/components/card';

const StyledWork = styled.div`
  margin-top: calc(3.5rem * calc(1 - 0));
  margin-bottom: calc(3.5rem * 0);
`;

const workItems = [
  {
    image: stan,
    company: 'Stan',
    jobTitle: 'Software Engineer',
    dateFrom: '2020',
    dateTo: '2022',
  },
  {
    image: xcover,
    company: 'Cover Genius',
    jobTitle: 'Front End Engineer',
    dateFrom: '2011',
    dateTo: '2014',
  },
  {
    image: skybet,
    company: 'Sky Betting & Gaming',
    jobTitle: 'Software Engineer',
    dateFrom: '2011',
    dateTo: '2014',
  },
  {
    image: evri,
    company: 'Evri',
    jobTitle: 'UI Engineer',
    dateFrom: '2011',
    dateTo: '2014',
  },
  {
    image: emis,
    company: 'Emis Health',
    jobTitle: 'Web Developer',
    dateFrom: '2011',
    dateTo: '2014',
  },
];

interface WorkItemProps {
  item: WorkItem;
}
interface WorkItem {
  image: string;
  company: string;
  jobTitle: string;
  dateFrom: string;
  dateTo: string;
}

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

const WorkImageWrapper = styled.div`
  background-color: rgb(39 39 42/1);
  border-color: rgba(63, 63, 70, 0.5);
  border-width: 1px;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  display: flex;
  margin-top: 0.25rem;
`;

const WorkImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

const StyledWorkItem = styled.li`
  display: flex;
  gap: 1.5rem;
  margin-top: calc(1rem * calc(1 - 0));
  margin-bottom: calc(1rem * 0);
`;

const StyledWorkList = styled.ol`
  margin-top: 1.5rem;
`;

const StyledWorkInfo = styled.dl`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 0.5rem;
`;

const StyledCompany = styled.dd`
  flex: none;
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const StyledTitle = styled.dd`
  color: rgb(161 161 170/1);
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

const WorkItem = ({ item }: WorkItemProps) => {
  const { image, company, jobTitle, dateFrom, dateTo } = item;

  return (
    <StyledWorkItem>
      <WorkImageWrapper>
        <WorkImage src={image} alt="" />
      </WorkImageWrapper>
      <StyledWorkInfo>
        <WorkSSROnly>Company</WorkSSROnly>
        <StyledCompany>{company}</StyledCompany>
        <WorkSSROnly>Role</WorkSSROnly>
        <StyledTitle>{jobTitle}</StyledTitle>
        <WorkSSROnly>Date</WorkSSROnly>
        <dd aria-label={`${dateFrom} until ${dateTo}`}>
          <time dateTime={dateFrom}>{dateFrom}</time> <span aria-hidden="true">—</span>{' '}
          <time dateTime={dateTo}>{dateTo}</time>
        </dd>
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
            {workItems.map((item, index) => (
              <WorkItem key={index} item={item} />
            ))}
          </StyledWorkList>
        </>
      </Card>
    </StyledWork>
  );
}

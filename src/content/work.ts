import emis from '@/assets/icons/emis.svg';
import evri from '@/assets/icons/evri.svg';
import skybet from '@/assets/icons/skybet.svg';
import stan from '@/assets/icons/stan.svg';
import xcover from '@/assets/icons/xcover.svg';

export interface WorkExperienceItem {
  image: string;
  company: string;
  jobTitle: string;
  dateFrom: string;
  dateTo: string;
}

export const workExperiences: WorkExperienceItem[] = [
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
    dateFrom: '2019',
    dateTo: '2020',
  },
  {
    image: skybet,
    company: 'Sky Bet & Gaming',
    jobTitle: 'Software Engineer',
    dateFrom: '2018',
    dateTo: '2019',
  },
  {
    image: evri,
    company: 'Evri',
    jobTitle: 'UI Engineer',
    dateFrom: '2016',
    dateTo: '2018',
  },
  {
    image: emis,
    company: 'Emis Health',
    jobTitle: 'Web Developer',
    dateFrom: '2012',
    dateTo: '2016',
  },
];

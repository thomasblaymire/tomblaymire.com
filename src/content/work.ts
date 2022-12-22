import crypto from '@/assets/icons/crypto.svg';
import emis from '@/assets/icons/emis.svg';
import evri from '@/assets/icons/evri.svg';
import learnstability from '@/assets/icons/learnstability.svg';
import skybet from '@/assets/icons/skybet.svg';
import stan from '@/assets/icons/stan.svg';
import xcover from '@/assets/icons/xcover.svg';

export interface WorkExperienceItem {
  image: string;
  name: string;
  jobTitle: string;
  link: string;
  linkText: string;
  shortDescription?: string;
  dateFrom: string;
  dateTo: string;
}

export interface PersonalProjectItem {
  image: string;
  name: string;
  shortDescription?: string;
  link: string;
  linkText: string;
}

export const workExperiences: WorkExperienceItem[] = [
  {
    image: stan,
    name: 'Stan',
    jobTitle: 'Software Engineer',
    shortDescription:
      'Enhacing TV platforms and implementing live sports for one of the leading video streaming services in Australia.',
    link: 'https://www.stan.com.au/',
    linkText: 'stan',
    dateFrom: '2020',
    dateTo: '2022',
  },
  {
    image: xcover,
    name: 'Cover Genius',
    jobTitle: 'Front End Engineer',
    shortDescription:
      'Building the new XCover.com platform to allow customers to purchase insurance with ease.',
    link: 'https://www.xcover.com/en',
    linkText: 'xcover',
    dateFrom: '2019',
    dateTo: '2020',
  },
  {
    image: skybet,
    name: 'Sky Bet & Gaming',
    jobTitle: 'Software Engineer',
    shortDescription:
      'Re-building the new Betslip from the ground up for one of the UKs leading betting applications.',
    link: 'https://m.skybet.com/',
    linkText: 'skybet',
    dateFrom: '2018',
    dateTo: '2019',
  },
  {
    image: evri,
    name: 'Evri',
    jobTitle: 'UI Engineer',
    shortDescription:
      'Creating the careers and innovation websites along with enhancing the primary parcel service website.',
    link: 'https://www.evri.com/',
    linkText: 'evri',
    dateFrom: '2016',
    dateTo: '2018',
  },
  {
    image: emis,
    name: 'Emis Health',
    jobTitle: 'Web Developer',
    shortDescription:
      'Developing medical practice websites and enhancing online appointment booking services.',
    link: 'https://www.emishealth.com/',
    linkText: 'emis',
    dateFrom: '2012',
    dateTo: '2016',
  },
];

export const personalProjects: PersonalProjectItem[] = [
  {
    image: crypto,
    name: 'Crypto Track',
    shortDescription:
      'An online crypto tracking application, featuring latest prices, watchlists and user authentication.',
    link: 'https://github.com/thomasblaymire/crypto-track',
    linkText: 'crypto',
  },
  {
    image: learnstability,
    name: 'Learnstability',
    shortDescription:
      'Building an online course review platform pulling in the best courses from popular course APIs.',
    link: 'https://www.learnstability.com/',
    linkText: 'learnstability',
  },
];

import { ComponentType } from 'react';

import CoverGeniusProject from './cover-genius';
import CryptoTrackProject from './crypto-track';
import EmisHealthProject from './emis-health';
import EvriProject from './evri';
import LearnstabilityProject from './learnstability';
import NewDayProject from './newday';
import SkyBetProject from './sky-bet';
import StanProject from './stan';

export interface ProjectContent {
  slug: string;
  Content: ComponentType;
}

const projectContents: ProjectContent[] = [
  { slug: 'newday', Content: NewDayProject },
  { slug: 'stan', Content: StanProject },
  { slug: 'cover-genius', Content: CoverGeniusProject },
  { slug: 'sky-bet', Content: SkyBetProject },
  { slug: 'evri', Content: EvriProject },
  { slug: 'emis-health', Content: EmisHealthProject },
  { slug: 'crypto-track', Content: CryptoTrackProject },
  { slug: 'learnstability', Content: LearnstabilityProject },
];

export const getProjectContentBySlug = (slug: string): ProjectContent | undefined => {
  return projectContents.find((project) => project.slug === slug);
};

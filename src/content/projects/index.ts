import { ComponentType } from 'react';

import CryptoProject from './crypto';
import EmisProject from './emis';
import EvriProject from './evri';
import LearnstabilityProject from './learnstability';
import NewDayProject from './newday';
import SkybetProject from './skybet';
import StanProject from './stan';
import XcoverProject from './xcover';

export interface ProjectContent {
  slug: string;
  Content: ComponentType;
}

const projectContents: ProjectContent[] = [
  { slug: 'newday', Content: NewDayProject },
  { slug: 'stan', Content: StanProject },
  { slug: 'xcover', Content: XcoverProject },
  { slug: 'skybet', Content: SkybetProject },
  { slug: 'evri', Content: EvriProject },
  { slug: 'emis', Content: EmisProject },
  { slug: 'crypto', Content: CryptoProject },
  { slug: 'learnstability', Content: LearnstabilityProject },
];

export const getProjectContentBySlug = (slug: string): ProjectContent | undefined => {
  return projectContents.find((project) => project.slug === slug);
};

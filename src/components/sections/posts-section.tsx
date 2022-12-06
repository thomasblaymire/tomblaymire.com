import styled from 'styled-components';

import { Logo } from '@/components/logo';
import { Post } from '@/components/post';

export type HeroSectionProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  socials: boolean;
};

const StyledPostsSection = styled.section`
  grid-gap: 4rem;
  display: flex;
  flex-direction: column;
`;

export function PostsSection() {
  return (
    <StyledPostsSection>
      <Post />
      <Post />
      <Post />
    </StyledPostsSection>
  );
}

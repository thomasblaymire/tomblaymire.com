import styled from 'styled-components';

import { Post } from '@/components/post';
import { posts } from '@/content/posts/sample';

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
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </StyledPostsSection>
  );
}

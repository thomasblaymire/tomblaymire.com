import styled from 'styled-components';

import { ErrorMessage } from '@/components/error-message';
import { Post } from '@/components/post';
import { usePosts } from '@/hooks/usePosts';
import { PostInterface } from '@/types/post';

export type PostsProps = {
  limit?: number;
};

const StyledPosts = styled.div`
  grid-gap: 8rem;
  display: flex;
  flex-direction: column;
`;

export function Posts({ limit }: PostsProps) {
  const { posts, error } = usePosts();
  const formattedPosts = limit ? posts && posts.slice(0, limit) : posts;
  const renderPosts = () => {
    if (error) return <ErrorMessage error={error} />;
    if (formattedPosts) {
      return formattedPosts.map((post: PostInterface, index: number) => (
        <Post key={index} post={post} />
      ));
    }
    return;
  };

  return <StyledPosts>{renderPosts()}</StyledPosts>;
}

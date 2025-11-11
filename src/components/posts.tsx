import { ErrorMessage } from '@/components/error-message';
import { Post } from '@/components/post';
import { usePosts } from '@/hooks/usePosts';
import { PostInterface } from '@/types/post';

export type PostsProps = {
  limit?: number;
};

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

  return <div className="gap-[8rem] flex flex-col">{renderPosts()}</div>;
}

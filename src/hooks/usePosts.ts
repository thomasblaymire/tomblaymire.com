import { createClient } from 'contentful';
import { useEffect, useMemo, useState } from 'react';

import { PostInterface } from '@/types/post';

export const usePosts = () => {
  const [posts, setPosts] = useState<Array<PostInterface>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const client = useMemo(
    () =>
      createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
      }),
    [],
  );

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { items } = await client.getEntries({
          content_type: 'blogPost',
        });
        setPosts(items as PostInterface[]);
      } catch (err) {
        const error = err as Error;
        console.error(
          `Error: unable to load posts name=${error.name} message=${error.message} stack=${error.stack}`,
        );
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);
  return { posts, error, loading };
};

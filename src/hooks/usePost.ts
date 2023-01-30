import { createClient, Entry } from 'contentful';
import { useEffect, useState } from 'react';

export type BlogPostFields = {
  title: string;
  body: string;
  publishDate: string;
  link: string;
};

export const usePost = (slug: string | undefined, type: string) => {
  const [post, setPost] = useState<null | Entry<BlogPostFields>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });

  useEffect(() => {
    const getSinglePost = async (slug: string | undefined) => {
      try {
        const item = await client.getEntries({
          'fields.slug': slug,
          content_type: type,
        });
        setPost(item.items[0] as Entry<BlogPostFields>);
      } catch (err) {
        const error = err as Error;
        console.error(
          `Error: unable to load post name=${error.name} message=${error.message} stack=${error.stack}`,
        );
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getSinglePost(slug);
  }, []);
  return { post, error, loading };
};

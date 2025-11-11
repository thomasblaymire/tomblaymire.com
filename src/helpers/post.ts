import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const getAuthor = async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'author',
      select: 'fields',
    });

    const sanitizedEntries = entries.items.map((item) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fields = item.fields as any;
      const avatar = fields.avatar.fields;
      return {
        ...fields,
        avatar,
      };
    });

    return sanitizedEntries;
  } catch (error) {
    console.log(`Error fetching authors ${error}`);
  }
};

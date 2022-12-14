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

    const sanitizedEntries = entries.items.map((item: any) => {
      const avatar = item.fields.avatar.fields;
      return {
        ...item.fields,
        avatar,
      };
    });

    return sanitizedEntries;
  } catch (error) {
    console.log(`Error fetching authors ${error}`);
  }
};

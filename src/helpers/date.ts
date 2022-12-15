// Format UTC Date from Contentful to readable Day/Month/Year format.
export const formatDate = (date: string) => new Date(Date.parse(date)).toDateString();
